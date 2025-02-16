import React from 'react'
import { useHoverGradient } from '@/hooks/useHoverGradient'
import { styles } from '@/styles/styles'

interface TabCartProps {
	tab: {
		tabTitle: string
		tabText: string
	}
	index: number
	activeTab: number
	handleTabClick: (index: number) => void
}

const TabCart: React.FC<TabCartProps> = ({ tab, index, activeTab, handleTabClick }) => {
	const { cardRef, isHovered, handleMouseMove, handleMouseEnter, handleMouseLeave, gradientStyle, mousePosition } = useHoverGradient({
		defaultGradient: 'radial-gradient(circle at 50% 50%, rgba(169, 114, 179, 0.8) 0%, rgba(47, 15, 53, 0.4) 30%, transparent 70%)',
		hoverGradient:
			'radial-gradient(circle at 50% 50%, rgba(169, 114, 179, 0.8) 0%, rgba(47, 15, 53, 0.4) 30%, transparent 70%)',
	})

	const activeGradientStyle = {
		background: `
      linear-gradient(rgba(10, 10, 10, 1), rgba(10, 10, 10, 1)) padding-box,
      radial-gradient(42.82% 77.08% at 50% 29.17%, #BE55D1 0%, #6A1B79 31.67%, #090909 100%) border-box
    `,
		border: '2px solid transparent'
	}

	return (
		<div className='relative h-full'>
			<div
				className={`absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}
				style={{
					background: `radial-gradient(circle at ${mousePosition.x} ${mousePosition.y}, #BE55D1 0%, #090909 30%, transparent 70%)`,
				}}
			/>
			<div
				ref={cardRef}
				onMouseMove={handleMouseMove}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				style={activeTab === index ? activeGradientStyle : gradientStyle}
				onClick={() => handleTabClick(index)}
				className={`relative sm:p-7 md:p-10 h-full cursor-pointer flex flex-col w-full gap-y-4 rounded-2xl bg-black-100-cart border-2 border-transparent ${activeTab === index
					? 'activeTab'
					: ''
					}`}
			>
				<span className={`${styles.titleH4} text-left text-white`}>{tab.tabTitle}</span>
				<span className='h-[1px] w-full bg-darkGray'></span>
				<span className={`sm:text-xs md:text-base text-left text-darkTextMuted`}>{tab.tabText}</span>
			</div>
		</div>
	)
}

export default TabCart