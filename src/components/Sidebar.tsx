import { useScrollToHash } from '@/hooks/useScrollToHash'
import { ISidebarData } from '@/types/types'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface SidebarProps {
	customStyle?: string
	sidebarData: ISidebarData[]
}

const Sidebar: React.FC<SidebarProps> = ({ customStyle, sidebarData }) => {
	const [activeSection, setActiveSection] = useState(sidebarData[0].anchor);
	const { scrollToElement } = useScrollToHash();

	useEffect(() => {
		const handleScroll = () => {
			const sections = sidebarData.map(item =>
				document.getElementById(item.anchor.replace('#', ''))
			);

			const currentSection = sections.find(section => {
				if (!section) return false;
				const rect = section.getBoundingClientRect();
				return rect.top <= 100 && rect.bottom >= 100;
			});

			if (currentSection) {
				setActiveSection('#' + currentSection.id);
			}
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => window.removeEventListener('scroll', handleScroll);
	}, [sidebarData]);
	return (
		<div className={`${customStyle} sm:hidden md:flex flex-col gap-y-6`}>
			{sidebarData?.map((link) => (
				<Link
					key={link.id}
					to={link.anchor}
					className={`text-base transition-colors duration-200 ${activeSection === link.anchor
						? 'text-white font-normal'
						: 'text-darkTextMuted font-normal'
						}`}
					onClick={(e) => {
						e.preventDefault();
						scrollToElement(link.anchor.replace('#', ''));
					}}
				>
					{link.title}
				</Link>
			))}
		</div>
	)
}

export default Sidebar