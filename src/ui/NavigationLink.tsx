import React from 'react'
import { NavLink } from 'react-router-dom'
import { styles } from '../styles/styles';

interface NavigationLinkProps {
	customStyle?: string
	path: string
	label: string
}

export const NavigationLink: React.FC<NavigationLinkProps> = React.memo(({ customStyle, path, label }) => (
	<NavLink className={({ isActive }) => `${styles.navigationLink} ${customStyle} ${isActive ? 'activeLink' : ''}`} to={path}>
		{label}
		<span className={`${styles.customLineLink}`}></span>
	</NavLink>
))

NavigationLink.displayName = 'NavigationLink';

