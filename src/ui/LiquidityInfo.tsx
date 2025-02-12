import React from 'react'
import { styles } from '../styles/styles';

interface LiquidityInfoProps {
	customStyle?: string
	text: string
}

export const LiquidityInfo: React.FC<LiquidityInfoProps> = React.memo(({ customStyle, text }) => (
	<div data-aos="zoom-in" className={`${customStyle} flex items-center gap-2.5 py-2.5 sm:px-4 lg:px-5 border rounded-[2.5rem] text-darkTextMuted`}>
		<div className='relative flex-shrink-0 size-6 rounded-full bg-red-20 flex items-center justify-center animate-pulse'>
			<div className='size-3 rounded-full bg-darkAccentRed animate-pulse'></div>
			<div className='absolute inset-0 rounded-full bg-red-20 opacity-50 animate-ping'></div>
		</div>
		<p className={`${styles.textSubtitle} text-gray`}>{text}</p>
	</div>
))

LiquidityInfo.displayName = 'LiquidityInfo';