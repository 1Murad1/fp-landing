import React from 'react'
import { INavigationData } from '../types/types';
import { NavigationLink } from '../ui/NavigationLink';

interface NavigationProps {
	customStyle?: string
	navigationData: INavigationData[]
}

export const Navigation: React.FC<NavigationProps> = React.memo(({ customStyle, navigationData }) => (
	<div className={`${customStyle} flex items-center`}>
		{navigationData.map(({ id, path, label }) => <NavigationLink key={id} path={path} label={label} />)}
	</div>
))

Navigation.displayName = 'Navigation';