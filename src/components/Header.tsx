import React from "react"
import { INavigationData } from "../types/types"
import { styles } from "../styles/styles"
import { Navigation } from "./Navigation"
import { Logo } from "../ui/Logo"
import { Button } from "../ui/Button"
import ButtonMobMenu from "@/ui/ButtonMobMenu"

interface HeaderProps {
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
]

export const Header: React.FC<HeaderProps> = React.memo(({ customStyle }) => (
	<header className={`${customStyle} absolute left-0 w-full right-0 sm:top-7 md:top-14 z-20`}>
		<div className={`${styles.container} flex items-center gap-x-16 justify-between`}>
			<Logo customStyle="sm:w-[4.5625rem] lg:w-[6.5625rem]" />
			<Navigation customStyle="ml-auto gap-14 sm:hidden md:flex" navigationData={navigationData} />
			<Button customStyle={`${styles.buttonStyleBase} px-5 py-4 sm:hidden md:flex`} variant='primary' link={false} type="button">Open app</Button>
			<ButtonMobMenu />
		</div>
	</header>
))

Header.displayName = 'Header';

