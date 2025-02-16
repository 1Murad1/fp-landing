import { useHoverGradient } from '@/hooks/useHoverGradient'
import { styles } from '@/styles/styles'
import { ISafetySecurityData } from '@/types/types'
import React from 'react'
import { useNavigate } from 'react-router-dom'

interface SafetySecurityProps {
	item: ISafetySecurityData
}

const SafetySecurityCart: React.FC<SafetySecurityProps> = ({ item }) => {
	const navigate = useNavigate()

	const getGradient = (itemId: number) => {
		switch (itemId) {
			case 1:
				return 'linear-gradient(#090909, #090909) padding-box, radial-gradient(37.26% 67.06% at 27.08% 12.1%, #BE55D1 0%, #6A1B79 31.67%, #090909 100%) border-box';
			case 2:
				return 'linear-gradient(#090909, #090909) padding-box, radial-gradient(42.82% 77.08% at 50% 29.17%, #BE55D1 0%, #6A1B79 31.67%, #090909 100%) border-box';
			case 3:
				return 'linear-gradient(#090909, #090909) padding-box, radial-gradient(29.86% 52.18% at 76.62% 24.01%, #BE55D1 0%, #6A1B79 31.67%, #090909 100%) border-box';
			default:
				return 'linear-gradient(#090909, #090909) padding-box, radial-gradient(37.26% 67.06% at 27.08% 12.1%, #BE55D1 0%, #6A1B79 31.67%, #090909 100%) border-box';
		}
	};

	const { cardRef, isHovered, handleMouseMove, handleMouseEnter, handleMouseLeave, gradientStyle, mousePosition } = useHoverGradient({
		defaultGradient:
			getGradient(item.id),
		hoverGradient:
			'radial-gradient(circle at 50% 50%, rgba(169, 114, 179, 0.8) 0%, rgba(47, 15, 53, 0.4) 30%, transparent 70%)',
	})
	return (
		<div className='relative'>
			<div
				className={`absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}
				style={{
					background: `radial-gradient(circle at ${mousePosition.x} ${mousePosition.y}, #BE55D1 0%, #090909 30%, transparent 70%)`,
				}}
			/>
			<div onClick={() => navigate(item.link)} ref={cardRef}
				onMouseMove={handleMouseMove}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave} style={gradientStyle} data-aos='flip-left' data-aos-delay={`${500 + item.id * 100}`} key={item.id} className={`security-cart-border cursor-pointer ${item.id === 1 && 'security-cart-border1'} ${item.id === 2 && 'security-cart-border2'} ${item.id === 3 && 'security-cart-border3'} sm:p-7 lg:p-10 rounded-2xl border-2 border-transparent flex-1 flex flex-col gap-4`}>
				<span className={`${styles.titleH4} text-white`}>{item.title}</span>
				<span className='h-[1px] bg-darkGray w-full'></span>
				<span className={`${styles.baseText} text-darkTextMuted`}>{item.text}</span>
				<span className={`${styles.baseText} text-darkTextLink group flex items-center gap-2.5 mt-auto`}>
					{item.linkText}
					<svg className='group-hover:translate-x-1 transition-all' width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10.3238 4.92426C10.5581 4.68995 10.5581 4.31005 10.3238 4.07574L6.50538 0.257359C6.27107 0.0230446 5.89117 0.0230446 5.65685 0.257359C5.42254 0.491674 5.42254 0.871573 5.65685 1.10589L9.05097 4.5L5.65685 7.89411C5.42254 8.12843 5.42254 8.50833 5.65685 8.74264C5.89117 8.97696 6.27107 8.97696 6.50538 8.74264L10.3238 4.92426ZM0 5.1L9.8995 5.1V3.9L0 3.9L0 5.1Z" fill="#7C8FFF" />
					</svg>
				</span>
			</div>
		</div>
	)
}

export default SafetySecurityCart