import React from 'react'
import { Link } from 'react-router-dom'
import LogoImage from '../assets/icons/logo.svg'

export interface LogoProps {
	customStyle?: string
}

export const Logo: React.FC<LogoProps> = React.memo(({ customStyle }) => (
	<Link data-aos="zoom-in" to='/' className={`${customStyle} flex`}>
		<img src={LogoImage} alt="logo" />
	</Link>
))

Logo.displayName = 'Logo';