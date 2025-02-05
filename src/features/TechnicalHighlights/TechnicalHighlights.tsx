import React from 'react'
import { styles } from '../../styles/styles';
import TechnicalHighlightsCart from './TechnicalHighlightsCart';
import { TechnicalHighlightsData } from '@/mockData/mockData';

interface TechnicalHighlightsProps {
	customStyle?: string
}

export const TechnicalHighlights: React.FC<TechnicalHighlightsProps> = React.memo(({ customStyle }) => (
	<div className={`${customStyle}`}>
		<div className={`${styles.container}`}>
			<h3 data-aos="fade-right" data-aos-delay="1500" className={`${styles.titleH3} mb-4`}>Technical Highlights</h3>
			<p data-aos="fade-right" data-aos-delay="1600" className={`${styles.baseText} text-darkTextMuted max-w-2xl sm:mb-7 lg:mb-10`}>Introduces a series of technical enhancements that streamline the development and deployment of custom pools, while maintaining the flexibility and interoperability.</p>
			<div className='flex flex-wrap gap-3'>
				{
					TechnicalHighlightsData?.map((item) => (
						<TechnicalHighlightsCart key={item.id} item={item} />
					))
				}
			</div>
		</div>
	</div>
))

TechnicalHighlights.displayName = 'TechnicalHighlights';