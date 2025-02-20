import React, { useState } from 'react'
import { styles } from '../styles/styles';
import { Logo } from '../ui/Logo';
import { Navigation } from './Navigation';
import { INavigationData } from '../types/types';
import { Link } from 'react-router-dom';
import { Button } from '@/ui/Button';
import ModalSubscribe from './modals/ModalSubscribe';
import GooglePlay from '@/assets/icons/google-play.svg';
import AppStore from '@/assets/icons/app-store.svg';
import Tg from '@/assets/icons/tg.svg';

interface FooterProps {
	customStyle?: string
}

const navigationData: INavigationData[] = [
	{
		id: 1,
		path: '/faq',
		label: 'FAQ'
	},
	{
		id: 2,
		path: 'support',
		label: 'Help & Support'
	},
	{
		id: 3,
		path: 'brand',
		label: 'Brand'
	},
	{
		id: 4,
		path: 'legal',
		label: 'Legal'
	},
	{
		id: 5,
		path: 'open-app',
		label: 'Open app'
	},
	{
		id: 6,
		path: 'bug-bounty',
		label: 'Bug Bounty'
	},
	{
		id: 7,
		path: 'docs',
		label: 'Docs'
	}
]

export const Footer: React.FC<FooterProps> = React.memo(({ customStyle }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<footer id='footer' className={`${customStyle} sm:py-[1.875rem] lg:py-14 relative z-10`}>
			<div className={`${styles.container} flex flex-col sm:gap-y-16 lg:gap-y-20`}>
				<div className='footer-nav-wrapper flex items-center justify-between sm:flex-col gap-y-7 lg:flex-row'>
					<Logo />
					<div className='flex gap-x-10  gap-y-7 flex-wra sm:flex-col md:flex-row flex-wrap sm:justify-center lg:justify-end'>
						<Navigation customStyle="footer-nav gap-x-10 gap-y-7 sm:flex-col md:flex-row flex-wrap justify-center" navigationData={navigationData} />
						<Button onClick={() => setIsOpen(true)} customStyle={`${styles.buttonStyleBase} px-5 py-3.5`} variant='primary' link={false} type="button">Sign up to newsletter</Button>
					</div>

				</div>
				<div className='flex items-center justify-between gap-x-6 gap-y-7 sm:flex-col-reverse md:flex-row'>
					<div className='flex gap-x-14 items-center flex-wrap gap-y-7 justify-center'>
						<p className={`text-[0.6875rem] leading-3 text-darkTextMuted text-center`}>Copyright © 2010 - 2025 · All rights reserved</p>
						<div className='flex items-center gap-x-5 flex-wrap justify-center gap-y-7'>
							<Link to='privacy-policy' className={`text-[0.6875rem] leading-3 transition-all duration-300 hover:text-white text-darkTextMuted cursor-pointer`}>Privacy Policy</Link>
							<span className='w-[1px] h-5 bg-darkTextMuted'></span>
							<Link to='terms-of-service' className={`text-[0.6875rem] leading-3 transition-all duration-300 hover:text-white text-darkTextMuted cursor-pointer`}>Terms of Service</Link>
						</div>
					</div>
					<div className='flex items-center gap-x-3.5 sm:flex-col gap-y-7 xs:flex-row'>
						<Link to={'/'} className='inline-block sm:max-w-[8.5rem] xs:min-w-36 '>
							<img className='w-full' src={GooglePlay} alt="icon" />
						</Link>
						<Link to={'/'} className='inline-block min-w-32'>
							<img className='w-full' src={AppStore} alt="icon" />
						</Link>
						<Link to={'/'} className='inline-block min-w-32'>
							<img className='w-full' src={Tg} alt="icon" />
						</Link>
					</div>
				</div>
			</div>
			<ModalSubscribe isOpen={isOpen} setIsOpen={setIsOpen} />
		</footer>
	)
})

Footer.displayName = 'Footer';