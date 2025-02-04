import { FC } from 'react'
import { ITechnicalHighlightsData } from '../../types/types';
import { styles } from '../../styles/styles';

interface TechnicalHighlightsCartProps {
	item: ITechnicalHighlightsData
}

const TechnicalHighlightsCart: FC<TechnicalHighlightsCartProps> = ({ item }) => {
	return (
		<div className='border-gradient sm:p-7 lg:p-10 border-2 border-black bg-black-40 flex flex-col gap-4 rounded-2xl sm:w-full md:w-1/2-custom'>
			<h4 className={`${styles.titleH4} text-white`}>{item.title}</h4>
			<p className={`${styles.baseText} text-darkTextMuted sm:pr-0 lg:pr-10`}>{item.text}</p>
		</div>
	)
}

export default TechnicalHighlightsCart
