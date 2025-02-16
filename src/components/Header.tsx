import React from "react"
import { INavigationData } from "../types/types"
import { styles } from "../styles/styles"
import { Navigation } from "./Navigation"
import { Logo } from "../ui/Logo"
import { Button } from "../ui/Button"
import ButtonMobMenu from "@/ui/ButtonMobMenu"
import MobMenu from "./MobMenu"
import { useIsMobile } from "@/hooks/useMobile"


interface HeaderProps {
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
		label: 'Support'
	},
]

export const Header: React.FC<HeaderProps> = React.memo(({ customStyle }) => {
	const [open, setOpen] = React.useState(false);
	const isMobile = useIsMobile(767);
	return (
		<header className={`${customStyle} absolute left-0 w-full right-0 sm:top-7 md:top-14 z-20`}>
			{isMobile && <MobMenu handleClose={() => setOpen(false)} open={open} />}
			<div className={`${styles.container} flex items-center gap-x-16 justify-between`}>
				<Logo customStyle="sm:w-[4.5625rem] lg:w-[6.5625rem]" />
				<Navigation customStyle="ml-auto gap-14 sm:hidden md:flex" navigationData={navigationData} />
				<Button customStyle={`${styles.buttonStyleBase} px-5 py-4 sm:hidden md:flex`} variant='primary' link={false} type="button">Open app</Button>
				<ButtonMobMenu handleClick={() => setOpen(true)} />
			</div>
		</header>
	)
})

Header.displayName = 'Header';

