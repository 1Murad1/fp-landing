import React, { FC } from 'react'
import { styles } from '../styles/styles'
import { LiquidityInfo } from '../ui/LiquidityInfo';
import { Button } from '../ui/Button';

interface HeroSectionProps {
	customStyle?: string
}

export const HeroSection: FC<HeroSectionProps> = React.memo(({ customStyle }) => (

	<div className={` h-screen flex sm:items-end lg:items-center justify-center ${customStyle}`}>
		<div className={`${styles.container} flex justify-center sm:mb-10 lg:mb-0`}>
			<div className='flex flex-col items-center justify-center sm:gap-5 lg:gap-6 max-w-xl w-full'>
				<h1 className={`${styles.titleH1}`}>Access the full power of DeFi</h1>
				<p className={`${styles.textSubtitle} text-center text-gray`}>Liquidity Gate is the world’s largest liquidity protocol.
					Supply, borrow, swap, stake and more.</p>
				<LiquidityInfo customStyle='sm:mt-5 lg:mt-4' text='$34.95 billion of liquidity currently supplied.' />
				<Button customStyle={`${styles.buttonStyleAccent} px-9 py-4 sm:mt-5 lg:mt-6`} variant='primary' link={false} type="button">Open app</Button>
			</div>
		</div>
	</div>
))

HeroSection.displayName = 'HeroSection';
