import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

type Dot = {
  position: THREE.Vector3;
  initial: THREE.Vector3;
  startTime: number;
  cyclonePhase: boolean;
  cyclonePhaseEndTime: number | null;
};

const DOTS_PER_LINE = 1500;
const PARTICLE_SIZE = 0.012;
const PARTICLE_COLOR = "purple";
const ANIMATION_SPEED = 0.05;
const WAYPOINT_RANDOMNESS = 0.02;
const RANDOM_POSITION_RANGE = 5;
const CYCLONE_PHASE_DURATION = 1;
const CYCLONE_RADIUS = 3;
const CYCLONE_STRENGTH = 2;
const BOUNDARY_X = 4;
const BOUNDARY_Y = 4;
const BOUNDARY_Z = 0;

const leftPart = [
  [new THREE.Vector3(-1, -0.5, 0), new THREE.Vector3(0, -1.5, 0)],
  [new THREE.Vector3(-1, -0.5, 0), new THREE.Vector3(0, 1.5, 0)],
  [new THREE.Vector3(-0.5, -0.15, 0), new THREE.Vector3(0, -1.5, 0)],
  [new THREE.Vector3(-0.5, -0.15, 0), new THREE.Vector3(0, 1.5, 0)],
  [new THREE.Vector3(-0.8, -0.7, 0), new THREE.Vector3(0, 0.3, 0)],
];

const rightPart = [
  [new THREE.Vector3(1, -0.5, 0), new THREE.Vector3(0, -1.5, 0)],
  [new THREE.Vector3(1, -0.5, 0), new THREE.Vector3(0, 1.5, 0)],
  [new THREE.Vector3(0.5, -0.15, 0), new THREE.Vector3(0, -1.5, 0)],
  [new THREE.Vector3(0.5, -0.15, 0), new THREE.Vector3(0, 1.5, 0)],
  [new THREE.Vector3(0.8, -0.7, 0), new THREE.Vector3(0, 0.3, 0)],
];

const LINE_COORDINATES = [...leftPart, ...rightPart];

function generateDots() {
  const dots: Dot[] = [];

  LINE_COORDINATES.forEach(([start, end]) => {
    for (let i = 0; i < DOTS_PER_LINE; i++) {
      const t = i / DOTS_PER_LINE;
      const x = start.x + t * (end.x - start.x);
      const y = start.y + t * (end.y - start.y);
      const z = start.z + t * (end.z - start.z);

      const randomPosition = new THREE.Vector3(
        (Math.random() - 0.5) * RANDOM_POSITION_RANGE,
        (Math.random() - 0.5) * RANDOM_POSITION_RANGE,
        0
      );

      dots.push({
        position: randomPosition.clone(),
        initial: new THREE.Vector3(x, y, z),
        startTime: Math.random() * 0.5,
        cyclonePhase: true,
        cyclonePhaseEndTime: null,
      });
    }
  });

  return dots;
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(value, max));
}

const MovingDots = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const dots = useMemo(generateDots, []);

  const positions = useMemo(() => {
    const array = new Float32Array(dots.length * 3);
    dots.forEach((dot, i) => {
      array[i * 3] = dot.position.x;
      array[i * 3 + 1] = dot.position.y;
      array[i * 3 + 2] = dot.position.z;
    });
    return array;
  }, [dots]);

  useFrame((state) => {
    if (!particlesRef.current) return;
    const positions = particlesRef.current.geometry.attributes.position.array;

    dots.forEach((dot, i) => {
      const index = i * 3;

      if (state.clock.elapsedTime < dot.startTime) {
        return;
      }

      if (dot.cyclonePhase) {
        const angle = -state.clock.elapsedTime * CYCLONE_STRENGTH;

        const newX = Math.cos(angle) * CYCLONE_RADIUS * CYCLONE_STRENGTH;
        const newY = Math.sin(angle) * CYCLONE_RADIUS * CYCLONE_STRENGTH;

        const newX2 =
          Math.cos(angle + Math.PI) * CYCLONE_RADIUS * CYCLONE_STRENGTH;
        const newY2 =
          Math.sin(angle + Math.PI) * CYCLONE_RADIUS * CYCLONE_STRENGTH;

        if (i % 2 === 0) {
          dot.position.x = newX;
          dot.position.y = newY;
        } else {
          dot.position.x = newX2;
          dot.position.y = newY2;
        }

        const distanceFromCenter = Math.sqrt(
          dot.position.x ** 2 + dot.position.y ** 2
        );
        if (distanceFromCenter > CYCLONE_RADIUS) {
          const scale = CYCLONE_RADIUS / distanceFromCenter;
          dot.position.x *= scale;
          dot.position.y *= scale;
        }

        dot.position.x = clamp(dot.position.x, -BOUNDARY_X, BOUNDARY_X);
        dot.position.y = clamp(dot.position.y, -BOUNDARY_Y, BOUNDARY_Y);

        if (dot.cyclonePhaseEndTime === null) {
          dot.cyclonePhaseEndTime = state.clock.elapsedTime;
        }

        if (state.clock.elapsedTime - dot.startTime > CYCLONE_PHASE_DURATION) {
          dot.cyclonePhase = false;
        }
      } else {
        dot.position.lerp(dot.initial, ANIMATION_SPEED);

        dot.position.x += (Math.random() - 0.5) * WAYPOINT_RANDOMNESS;
        dot.position.y += (Math.random() - 0.5) * WAYPOINT_RANDOMNESS;
        dot.position.z += (Math.random() - 0.5) * WAYPOINT_RANDOMNESS * 0.5;
      }

      dot.position.x = clamp(dot.position.x, -BOUNDARY_X, BOUNDARY_X);
      dot.position.y = clamp(dot.position.y, -BOUNDARY_Y, BOUNDARY_Y);
      dot.position.z = clamp(dot.position.z, -BOUNDARY_Z, BOUNDARY_Z);

      positions[index] = dot.position.x;
      positions[index + 1] = dot.position.y;
      positions[index + 2] = dot.position.z;
    });

    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={PARTICLE_SIZE}
        color={PARTICLE_COLOR}
        transparent
        opacity={0.9}
      />
    </points>
  );
};

const AnimationLogoCyclones = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight />
      <MovingDots />
    </Canvas>
  );
};

export default AnimationLogoCyclones;
