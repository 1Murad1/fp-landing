import React from 'react'

interface TwitterIconProps {
	customStyle?: string
}

const TwitterIcon: React.FC<TwitterIconProps> = ({ customStyle }) => {
	return (
		<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_1131_16117)">
				<path d="M26.1903 18.6331L42.5729 0H38.6921L24.4611 16.1755L13.1032 0H0L17.1791 24.4626L0 43.9998H3.8808L18.8995 26.9143L30.8968 43.9998H44M5.28147 2.86347H11.2435L38.6892 41.2771H32.7257" className={`${customStyle}`} fill="white" />
			</g>
			<defs>
				<clipPath id="clip0_1131_16117">
					<rect width="44" height="44" className={`${customStyle}`} fill="white" />
				</clipPath>
			</defs>
		</svg>

	)
}

export default TwitterIcon
