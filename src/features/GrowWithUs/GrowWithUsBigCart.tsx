import React from 'react'
import { Button } from '@/ui/Button'
import { styles } from '@/styles/styles'
import { useHoverGradient } from '@/hooks/useHoverGradient'

const GrowWithUsBigCart: React.FC = () => {
	const { cardRef, isHovered, handleMouseMove, handleMouseEnter, handleMouseLeave, gradientStyle, mousePosition } =
		useHoverGradient({
			defaultGradient:
				'radial-gradient(42.82% 77.08% at 50% 29.17%, #A972B3 0%, #2F0F35 27.5%, #111111 100%)',
			hoverGradient:
				'radial-gradient(circle at 50% 50%, rgba(169, 114, 179, 0.8) 0%, rgba(47, 15, 53, 0.4) 30%, transparent 70%)',
		})
	return (
		<div className='relative sm:w-full md:w-1/2-custom' data-aos="fade-up" data-aos-delay={`${500 + 4 * 100}`}>
			<div
				className={`absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}
				style={{
					background: `radial-gradient(circle at ${mousePosition.x} ${mousePosition.y}, rgba(169, 114, 179, 0.8) 0%, rgba(47, 15, 53, 0.4) 30%, transparent 70%)`,
				}}
			/>
			<div
				ref={cardRef}
				onMouseMove={handleMouseMove}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				className={`relative sm:order-5 md:-order-none rounded-2xl border-2 border-transparent sm:p-7 lg:p-10 flex flex-col justify-center items-center gap-y-4  md:h-96`}
				style={gradientStyle}
			>
				<h3 className='w-9/12 sm:text-xl lg:text-[1.75rem] uppercase leading-9 font-bold text-white text-center'>
					Governed by the community
				</h3>
				<p className='sm:text-sm lg:text-base lg:leading-5 text-darkTextMuted font-normal text-center'>
					A global community of holders and delegates.
				</p>
				<Button customStyle={`${styles.buttonStyleAccent} px-9 py-4 mt-6`} variant='primary' link={false} type="button">
					Governance Forum
				</Button>
			</div>
		</div>

	)
}

export default GrowWithUsBigCart
