import React from 'react'
import { INavigationData } from '../types/types';
import { NavigationLink } from '../ui/NavigationLink';

interface NavigationProps {
	customStyle?: string
	navigationData: INavigationData[]
	isMob?: boolean
	handleClose?: () => void
}

export const Navigation: React.FC<NavigationProps> = React.memo(({ customStyle, navigationData, isMob, handleClose }) => (
	<div data-aos="fade-up" className={`${customStyle} flex items-center`}>
		{navigationData.map(({ id, path, label }) => <NavigationLink handleClose={handleClose} isMob={isMob} key={id} path={path} label={label} />)}
	</div>
))

Navigation.displayName = 'Navigation';