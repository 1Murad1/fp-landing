import React from 'react'

interface CloseIconProps {
	customStyle?: string
}

const CloseIcon: React.FC<CloseIconProps> = ({ customStyle }) => {
	return (
		<svg className={`${customStyle}`} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M7 7L16 16M25 25L16 16M16 16L25 7L7 25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
		</svg>

	)
}

export default CloseIcon