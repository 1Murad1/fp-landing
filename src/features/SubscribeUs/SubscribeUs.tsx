import { SocialMediaData } from '@/mockData/mockData'
import { styles } from '@/styles/styles'
import React, { FC } from 'react'
import LinkCart from './LinkCart'

interface SubscribeUsProps {
	customStyle?: string
}

export const SubscribeUs: FC<SubscribeUsProps> = React.memo(({ customStyle }) => (
	<div className={`${customStyle}`}>
		<div className={`${styles.container}`}>
			<h3 className={`${styles.titleH3} mb-1`}>Subscribe us</h3>
			<p className={`${styles.baseText} text-darkTextMuted mb-10`}>And always stay up to date with the latest news</p>
			<div className='flex items-stretch justify-between gap-x-3 gap-y-2 sm:flex-col md:flex-row'>
				{
					SocialMediaData?.map((item) => (
						<LinkCart key={item.id} item={item} />
					))
				}
			</div>
		</div>
	</div>
))
