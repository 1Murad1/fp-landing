import React, { FC } from 'react'
import { BoxIcon } from '../../ui/BoxIcon'
import { styles } from '../../styles/styles'
import { IMarqueeData } from '../../types/types'

interface MarqueeComponentProps {
	item: IMarqueeData
}

const MarqueeComponent: FC<MarqueeComponentProps> = ({ item }) => {
	return (
		<div className='bg-black-10 flex flex-col items-center justify-center gap-4 rounded-[1.625rem] sm:h-[11.25rem] sm:w-[9.25rem] lg:h-52 lg:w-[11.5rem] mx-1.5'>
			<BoxIcon customStyle=''>
				<img src={item.url} alt='icon' />
			</BoxIcon>
			<p className={`${styles.textSubtitle}`}>{item.text}</p>
		</div>
	)
}

export default MarqueeComponent
