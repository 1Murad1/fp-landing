import { useRef, useMemo, useState } from "react";
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
const CYCLONE_PHASE_DURATION = 1;
const CYCLONE_RADIUS = 3;
const CYCLONE_STRENGTH = 2;
const BOUNDARY_X = 4;
const BOUNDARY_Y = 4;
const BOUNDARY_Z = 0;
const INITIAL_VOID_RADIUS = 0.2;
const MAX_VOID_RADIUS = 0.4;
const PUSH_STRENGTH = 0.1;
const VOID_PROBABILITY = 0.2;
const VOID_NOISE_SCALE = 0.5;
const STATIONARY_TIME_THRESHOLD = 300;

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

      const startingPosition = new THREE.Vector3(0, 0, 0);

      dots.push({
        position: startingPosition.clone(),
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

function noise(x: number, y: number) {
  return Math.sin(x * 10 + y * 10) * 0.5 + 0.5;
}

const MovingDots = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const dots = useMemo(generateDots, []);

  const [voidRadius, setVoidRadius] = useState(INITIAL_VOID_RADIUS);
  const [lastCursorPosition, setLastCursorPosition] = useState({ x: 0, y: 0 });
  const [lastMovementTime, setLastMovementTime] = useState(Date.now());

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

    const cursorX = (state.pointer.x * state.viewport.width) / 2;
    const cursorY = (state.pointer.y * state.viewport.height) / 2;

    const cursorMoved =
      cursorX !== lastCursorPosition.x || cursorY !== lastCursorPosition.y;

    if (cursorMoved) {
      setVoidRadius(INITIAL_VOID_RADIUS);
      setLastCursorPosition({ x: cursorX, y: cursorY });
      setLastMovementTime(Date.now());
    } else {
      const currentTime = Date.now();
      if (currentTime - lastMovementTime > STATIONARY_TIME_THRESHOLD) {
        setVoidRadius((prevRadius) =>
          Math.min(prevRadius + 0.001, MAX_VOID_RADIUS)
        );
      }
    }

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

      const dx = dot.position.x - cursorX;
      const dy = dot.position.y - cursorY;
      const distanceToCursor = Math.sqrt(dx * dx + dy * dy);

      const noiseValue = noise(dot.position.x, dot.position.y);
      const distortedDistance = distanceToCursor * (1 + VOID_NOISE_SCALE * (noiseValue - 0.5));

      const isCursorInInitial = cursorX === 0 && cursorY === 0;

      if (distortedDistance < voidRadius && !isCursorInInitial) {
        if (Math.random() < VOID_PROBABILITY) {
          const pushFactor = (voidRadius - distortedDistance) / voidRadius;
          dot.position.x += (dx / distanceToCursor) * pushFactor * PUSH_STRENGTH;
          dot.position.y += (dy / distanceToCursor) * pushFactor * PUSH_STRENGTH;
        }
      }

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
