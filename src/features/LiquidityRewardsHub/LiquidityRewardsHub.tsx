import React from 'react'
import { styles } from '../../styles/styles';
import CustomMarquee from './CustomMarquee';
import LiquidityCart from './LiquidityCart';
import { LiquidityCartData } from '@/mockData/mockData';

interface LiquidityRewardsHubProps {
	customStyle?: string
}

export const LiquidityRewardsHub: React.FC<LiquidityRewardsHubProps> = React.memo(({ customStyle }) => (
	<div className={`${customStyle}`}>
		<div className={`${styles.container} sm:mb-7 lg:mb-10`}>
			<h3 data-aos="fade-right" className={`${styles.titleH3} mb-4`}>Provide liquidity and earn rewards</h3>
			<p data-aos="fade-right" className={`${styles.baseText} text-darkTextMuted`}>Replace First liquidity platform to earn rewards from your memecoins</p>
		</div>
		<CustomMarquee customStyle='mb-3' />
		<div data-aos="fade-up" data-aos-delay="1500" className={`${styles.container} flex justify-between items-stretch gap-3 sm:flex-col md:flex-row`}>
			{
				LiquidityCartData?.map((item) => (
					<LiquidityCart key={item.id} item={item} customStyle='flex-1' />
				))
			}
		</div>
	</div>
))

LiquidityRewardsHub.displayName = 'LiquidityRewardsHub';