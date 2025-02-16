import { useEffect, useRef, useState } from "react";

export function useOnScreen() {
	const [isVisible, setIsVisible] = useState(false);
	const elementRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {

			if (entries[0].isIntersecting) {
				setIsVisible(true);
				observer.disconnect();
			}
		});

		if (elementRef.current) {
			observer.observe(elementRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return { elementRef, isVisible };
}
