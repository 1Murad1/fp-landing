import { FC } from "react"

interface ButtonMobMenuProps {
	customStyle?: string
	handleClick?: () => void
}

const ButtonMobMenu: FC<ButtonMobMenuProps> = ({ customStyle, handleClick }) => {
	return (
		<button className={`sm:flex md:hidden cursor-pointer items-center justify-center ${customStyle}`} onClick={handleClick}>
			<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M28 16H12M28 8H4M28 24H4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		</button>
	)
}

export default ButtonMobMenu
