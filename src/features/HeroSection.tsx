import React, { FC } from 'react'
import { styles } from '../styles/styles'
import { LiquidityInfo } from '../ui/LiquidityInfo';
import { Button } from '../ui/Button';
import CountUp from 'react-countup';

interface HeroSectionProps {
	customStyle?: string
}

export const HeroSection: FC<HeroSectionProps> = React.memo(({ customStyle }) => (

	<div className={`first-block flex sm:items-end lg:items-center justify-center ${customStyle}`}>
		<div className={`${styles.container} flex justify-center sm:mb-10 lg:mb-0`}>
			<div className='flex flex-col items-center justify-center sm:gap-5 lg:gap-6 max-w-xl w-full'>
				<h1 data-aos="fade-right" className={`${styles.titleH1}`}>Access the full power of DeFi</h1>
				<p data-aos="fade-left" className={`${styles.textSubtitle} text-center text-gray`}>Liquidity Gate is the world’s largest liquidity protocol.
					Supply, borrow, swap, stake and more.</p>
				<LiquidityInfo customStyle='sm:mt-5 lg:mt-4'>$<CountUp className='sm:w-[2.89rem] lg:w-16 inline-block' start={0} end={34.95} duration={2.5} separator="." decimals={2} /> billion of liquidity currently supplied.</LiquidityInfo>
				<Button customStyle={`${styles.buttonStyleAccent} px-9 py-4 sm:mt-5 lg:mt-6`} variant='primary' link={false} type="button">Get started</Button>
			</div>
		</div>
	</div>
))

HeroSection.displayName = 'HeroSection';
