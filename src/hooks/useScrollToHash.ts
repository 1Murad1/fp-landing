import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToHash = (): { 
  scrollToElement: (elementId: string) => void 
} => {
	const { hash, pathname } = useLocation();

	const scrollToElement = useCallback((elementId: string): void => {
		const element = document.getElementById(elementId);
		if (element) {
			const navHeight = 0; 
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - navHeight;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth'
			});
		}
	}, []);

	useEffect(() => {
		if (hash) {
			const elementId = hash.replace('#', '');
			scrollToElement(elementId);
		} else {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}, [hash, pathname, scrollToElement]);

	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			const link = target.closest('a');

			if (link && link.hash) {
				const elementId = link.hash.replace('#', '');
				const targetElement = document.getElementById(elementId);

				if (targetElement) {
					if (window.location.hash === link.hash) {
						
						e.preventDefault();
						scrollToElement(elementId);
					}
				}
			}
		};

		document.addEventListener('click', handleClick);
		return () => document.removeEventListener('click', handleClick);
	}, [scrollToElement]);

	return { scrollToElement };
};