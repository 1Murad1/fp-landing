import { styles } from '@/styles/styles'
import React, { FC } from 'react'
import { AboutSliderNews } from './AboutSliderNews'

interface IBrowseOurLatestNewsProps {
	customStyle?: string
}

export const AboutUsNews: FC<IBrowseOurLatestNewsProps> = React.memo(({ customStyle }) => (
	<div className={`${customStyle}`}>
		<div className={`${styles.container}`}>
			<h3 data-aos="fade-right" data-aos-delay="500" className={`${styles.titleH3} mb-4`}>About us in the news</h3>
			<div className='flex items-start justify-between gap-x-3 sm:mb-7 lg:mb-10'>
			</div>
			<AboutSliderNews />
		</div>
	</div>
))
