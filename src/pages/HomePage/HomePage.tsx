import React, { FC } from 'react'
import { HeroSection } from '../../features/HeroSection';
import { DarkenedSwiper } from '../../features/DarkenedSlider/DarkenedSlider';
import { LiquidityRewardsHub } from '../../features/LiquidityRewardsHub/LiquidityRewardsHub';
import { Collateral } from '../../components/Collateral';
import { GrowWithUs } from '../../features/GrowWithUs/GrowWithUs';
import { TechnicalHighlights } from '../../features/TechnicalHighlights/TechnicalHighlights';
import { ProtectedVerified } from '../../features/ProtectedVerified/ProtectedVerified';
import { FAQs } from '../../features/FAQs/FAQs';
import { BrowseOurLatestNews } from '@/features/BrowseOurLatestNews/BrowseOurLatestNews';
import { JoinLqg } from '@/features/JoinLqg';
import { SubscribeUs } from '@/features/SubscribeUs/SubscribeUs';
import CustomBg from '@/assets/custom-bg.png'

interface HomePageProps {
	customStyle?: string
}

export const HomePage: FC<HomePageProps> = React.memo(({ customStyle }) => (
	<div className={`home-page ${customStyle} bg-[url('./assets/bg-elipse.png')] bg-no-repeat bg-center`}>
		<HeroSection customStyle='relative z-10' />
		<DarkenedSwiper customStyle='sm:pb-[1.875rem] lg:pb-20 relative z-10' />
		<LiquidityRewardsHub customStyle='sm:py-[1.875rem] lg:py-20 relative z-10' />
		<Collateral customStyle='sm:py-[1.875rem] lg:py-20 relative z-10' />
		<div className='relative'>
			<div className='absolute top-[31.25rem] right-0 z-0 left-0 w-full'>
				<img className='w-full' src={CustomBg} alt="bg" />
			</div>
			<GrowWithUs customStyle='sm:py-[1.875rem] lg:py-20 relative z-10' />
			<TechnicalHighlights customStyle='sm:py-[1.875rem] lg:py-20 relative z-10' />
		</div>

		<ProtectedVerified customStyle='sm:py-[1.875rem] relative z-10 lg:py-20' />
		<FAQs customStyle='sm:py-[1.875rem] lg:py-20 relative z-10' />
		<div className='relative'>
			<div className={`bg-[url('./assets/custom-bg2.png')] bg-no-repeat bg-center bg-[length:100%)]  absolute bottom-4 max-w-[81.25rem] h-[81.25rem] w-full z-0 left-1/2 -translate-x-1/2 flex justify-center`}></div>
			<BrowseOurLatestNews customStyle='sm:py-[1.875rem] lg:py-20 relative z-10' />
			<JoinLqg customStyle='sm:py-[1.875rem] lg:py-20 relative z-10' />
		</div>
		<SubscribeUs customStyle='sm:py-[1.875rem] lg:py-20 relative z-10' />
	</div>
))

HomePage.displayName = 'HomePage';

