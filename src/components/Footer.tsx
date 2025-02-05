import React from 'react'
import { styles } from '../styles/styles';
import { Logo } from '../ui/Logo';
import { Navigation } from './Navigation';
import { INavigationData } from '../types/types';
import { Link } from 'react-router-dom';

interface FooterProps {
	customStyle?: string
}

const navigationData: INavigationData[] = [
	{
		id: 1,
		path: '/#faq',
		label: 'FAQ'
	},
	{
		id: 2,
		path: 'support',
		label: 'Support'
	},
	{
		id: 3,
		path: 'governance',
		label: 'Governance'
	},
	{
		id: 4,
		path: 'open-app',
		label: 'Open app'
	},
	{
		id: 5,
		path: 'docs',
		label: 'Docs'
	}
]

export const Footer: React.FC<FooterProps> = React.memo(({ customStyle }) => (
	<footer id='footer' className={`${customStyle} sm:py-[1.875rem] lg:py-14 relative z-10`}>
		<div className={`${styles.container} flex flex-col sm:gap-y-16 lg:gap-y-20`}>
			<div className='footer-nav-wrapper flex items-center justify-between gap-x-16 sm:flex-col md:flex-row gap-y-12'>
				<Logo />
				<Navigation customStyle="footer-nav gap-x-10 sm:flex-col md:flex-row gap-y-7" navigationData={navigationData} />
			</div>
			<div className='flex items-center justify-between gap-x-6 gap-y-7 sm:flex-col md:flex-row'>
				<p className={`${styles.baseText} text-darkTextMuted text-center`}>Copyright © 2010 - 2025 · All rights reserved</p>
				<div className='flex items-center gap-x-5 flex-wrap justify-center gap-y-7'>
					<Link to='support' className={`${styles.baseText} transition-all duration-300 hover:text-white  text-darkTextMuted cursor-pointer`}>Support</Link>
					<span className='w-[1px] h-5  bg-darkTextMuted'></span>
					<Link to='privacy-policy' className={`${styles.baseText} transition-all duration-300 hover:text-white text-darkTextMuted cursor-pointer`}>Privacy Policy</Link>
					<span className='w-[1px] h-5 bg-darkTextMuted'></span>
					<Link to='terms-of-service' className={`${styles.baseText} transition-all duration-300 hover:text-white text-darkTextMuted cursor-pointer`}>Terms of Service</Link>
				</div>
			</div>
		</div>
	</footer>
))

Footer.displayName = 'Footer';