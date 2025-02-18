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
import CustomBg2 from '@/assets/custom-bg2.png'
import CustomBgMob from '@/assets/custom-bg-bottom-mob.png'
import { AboutUsNews } from '@/features/AboutUsNews/AboutUsNews';
import { AnimatedLogo } from '@/components/AnimatedLogo';
import AnimationLogoCyclones from '@/components/AnimatedLogoCyclones';

interface HomePageProps {
	customStyle?: string
}

export const HomePage: FC<HomePageProps> = React.memo(({ customStyle }) => (
	<div className={`home-page ${customStyle} bg-[url('./assets/bg-elipse.png')] bg-no-repeat bg-center overflow-x-hidden`}>
		<div className='sm:h-[40rem] md:h-[59rem] flex  w-full'>
			<AnimationLogoCyclones />
			<AnimatedLogo />
		</div>
		{/* <div className='sm:h-[40rem] md:h-[59rem] absolute w-full'>

		</div> */}

		<HeroSection customStyle='relative z-10' />
		<DarkenedSwiper customStyle='sm:pb-[1.875rem] lg:pb-20 relative z-10' />
		<LiquidityRewardsHub customStyle='sm:py-[1.875rem] lg:py-20 relative z-10' />
		<Collateral customStyle='sm:py-[1.875rem] lg:py-20 relative z-10' />
		<div className='relative'>
			<div data-aos="fade-up" data-aos-delay="500" className='absolute top-[31.25rem] right-0 z-0 left-0 w-full'>
				<img className='w-full sm:hidden xs:block' src={CustomBg} alt="bg" />
				<img className='w-full xs:hidden' src={CustomBgMob} alt="bg" />
			</div>
			<GrowWithUs customStyle='sm:py-[1.875rem] lg:py-20 relative z-10' />
			<TechnicalHighlights customStyle='sm:py-[1.875rem] lg:py-20 relative z-10' />
		</div>
		<div className="relative">
			<div data-aos="fade-up" data-aos-delay="500" className='absolute top-0 right-0 z-0 left-0 sm:w-full xs:w-2/3'>
				<img className='w-full sm:hidden xs:block' src={CustomBg} alt="bg" />
				<img className='w-full xs:hidden' src={CustomBgMob} alt="bg" />
			</div>
			<div data-aos="fade-up" data-aos-delay="500" className='absolute -bottom-20 z-0 sm:right-0 xs:right-20 sm:w-full xs:w-2/3'>
				<img className='w-full sm:hidden xs:block' src={CustomBg} alt="bg" />
				<img className='w-full xs:hidden' src={CustomBgMob} alt="bg" />
			</div>
			<ProtectedVerified customStyle='sm:py-[1.875rem] relative z-10 lg:py-20' />
			<FAQs customStyle='sm:py-[1.875rem] lg:py-20 relative z-10' />
		</div>

		<div className='relative'>
			<div data-aos="fade-up" data-aos-delay="500" className={`absolute -bottom-40 right-0 z-0 left-0 w-full`}>
				<img className='w-full sm:hidden xs:block' src={CustomBg2} alt="bg" />
				<img className='w-full xs:hidden' src={CustomBgMob} alt="bg" />
			</div>
			<BrowseOurLatestNews customStyle='sm:py-[1.875rem] lg:py-20 relative z-10' />
			<AboutUsNews customStyle='sm:py-[1.875rem] lg:py-20 relative z-10' />
			<JoinLqg customStyle='sm:py-[1.875rem] lg:py-20 relative z-10' />
		</div>
		<SubscribeUs customStyle='sm:py-[1.875rem] lg:py-20 relative z-10' />
	</div>
))

HomePage.displayName = 'HomePage';

