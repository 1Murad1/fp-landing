import React, { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

type ButtonType = 'submit' | 'reset' | 'button'
type ButtonVariant = 'primary' | 'secondary'
interface ButtonProps {
	customStyle?: string
	type?: ButtonType
	variant: ButtonVariant
	link: boolean
	path?: string
	onClick?: () => void
}

export const Button: React.FC<PropsWithChildren<ButtonProps>> = React.memo(({ customStyle, type, variant, link, path, children, onClick }) => (
	link ? (
		<Link to={path || ''} className={`${customStyle} ${variant === 'primary' ? 'bg-darkAccentBlue hover:bg-darkBgSecondary' : 'bg-darkBgSecondary hover:bg-darkAccentBlue'}`}>{children}</Link>
	) : (
		<button onClick={onClick || undefined} type={type} className={`${customStyle} ${variant === 'primary' ? 'bg-darkAccentBlue hover:bg-darkBgSecondary' : 'bg-darkBgSecondary hover:bg-darkAccentBlue'}`}>{children}</button>
	)
))

Button.displayName = 'Button';