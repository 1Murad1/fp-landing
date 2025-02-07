import React from 'react'
import { ILiquidityCartData } from '../../types/types'
import { styles } from '../../styles/styles'
import { useHoverGradient } from '../../hooks/useHoverGradient'

interface ILiquidityCartProps {
	item: ILiquidityCartData
	customStyle?: string
}

const LiquidityCart: React.FC<ILiquidityCartProps> = ({ item, customStyle }) => {
	const { cardRef, isHovered, handleMouseMove, handleMouseEnter, handleMouseLeave, gradientStyle, mousePosition } =
		useHoverGradient({
			defaultGradient: 'radial-gradient(42.82% 77.08% at 50% 29.17%, #BE55D1 0%, #6A1B79 31.67%, #090909 100%)',
			hoverGradient: 'radial-gradient(circle at 50% 50%, rgba(190, 85, 209, 0.8) 0%, rgba(106, 27, 121, 0.4) 30%, transparent 70%)'
		})

	return (
		<div className="relative">
			<div
				className={`absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'
					}`}
				style={{
					background: `radial-gradient(circle at ${mousePosition.x} ${mousePosition.y}, rgba(190, 85, 209, 0.8) 0%, rgba(106, 27, 121, 0.4) 30%, transparent 70%)`
				}}
			/>
			<div
				ref={cardRef}
				onMouseMove={handleMouseMove}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				className={`relative p-10 flex flex-col gap-4 rounded-2xl cursor-pointer border-2 border-transparent transition-all duration-300 bg-bgDark ${customStyle}`}
				style={gradientStyle}
			>
				<p className={`${styles.titleH4} text-white`}>{item.title}</p>
				<div className="w-full h-[1px] bg-darkGray my-4" />
				<p className={`${styles.baseText} text-darkTextMuted`}>{item.text}</p>
			</div>
		</div>
	)
}

export default LiquidityCart
