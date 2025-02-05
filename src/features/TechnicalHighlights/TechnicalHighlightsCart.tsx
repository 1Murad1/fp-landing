import { FC } from 'react'
import { ITechnicalHighlightsData } from '../../types/types';
import { styles } from '../../styles/styles';

interface TechnicalHighlightsCartProps {
	item: ITechnicalHighlightsData
}

const TechnicalHighlightsCart: FC<TechnicalHighlightsCartProps> = ({ item }) => {
	return (
		<div data-aos={`${item.id % 2 === 0 ? 'fade-left' : 'fade-right'}`} data-aos-delay={`${1500 + item.id * 100}`} className={`border-gradient-technical ${(item.id === 1 || item.id === 8) && 'border-gradient-technical1'} ${(item.id === 2 || item.id === 4 || item.id === 6) && 'border-gradient-technical2'} ${(item.id === 3 || item.id === 5 || item.id === 7) && 'border-gradient-technical3'} border-gradient-technical sm:p-7 lg:p-10 border-2 border-transparent  flex flex-col gap-4 rounded-2xl sm:w-full md:w-1/2-custom`}>
			<h4 className={`${styles.titleH4} text-white`}>{item.title}</h4>
			<p className={`${styles.baseText} text-darkTextMuted sm:pr-0 lg:pr-10`}>{item.text}</p>
		</div>
	)
}

export default TechnicalHighlightsCart
