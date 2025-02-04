import React from 'react'
import { ILiquidityCartData } from '../../types/types'
import { styles } from '../../styles/styles'

interface ILiquidityCartDataProps {
	item: ILiquidityCartData
	customStyle?: string
}

const LiquidityCart: React.FC<ILiquidityCartDataProps> = ({ item, customStyle }) => {


	return (
		<div
			className={`animated-border-card p-10 bg-black7-30 flex flex-col border-2 border-black gap-4 rounded-2xl ${customStyle}`}
		>
			<p className={`${styles.titleH4} text-white`}>{item.title}</p>
			<div className='w-full h-[1px] bg-darkGray' />
			<p className={`${styles.baseText} text-darkTextMuted`}>{item.text}</p>
		</div>
	);
}

export default LiquidityCart
