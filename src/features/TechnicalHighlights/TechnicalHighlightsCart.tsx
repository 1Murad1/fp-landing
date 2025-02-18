import { FC } from 'react'
import { ITechnicalHighlightsData } from '../../types/types';
import { styles } from '../../styles/styles';
import { useHoverGradient } from '@/hooks/useHoverGradient';

interface TechnicalHighlightsCartProps {
	item: ITechnicalHighlightsData
}

const TechnicalHighlightsCart: FC<TechnicalHighlightsCartProps> = ({ item }) => {
	const getGradient = (itemId: number) => {
		switch (itemId) {
			case 1:
				return 'linear-gradient(#111111, #111111) padding-box, radial-gradient(109.33% 196.79% at -16.9% 5%, #E984FB 0%, #5C2267 40.65%, #0D0D0F 100%) border-box';
			case 2:
				return 'linear-gradient(#111111, #111111) padding-box, radial-gradient(109.33% 196.79% at -16.9% 5%, #111111 0%, #381140 100%) border-box';
			case 3:
				return 'linear-gradient(#111111, #111111) padding-box, radial-gradient(109.33% 196.79% at -16.9% 5%, #381140 0%, #111111 100%) border-box';
			case 4:
				return 'linear-gradient(#111111, #111111) padding-box, radial-gradient(109.33% 196.79% at -16.9% 5%, #111111 0%, #381140 100%) border-box';
			case 5:
				return 'linear-gradient(#111111, #111111) padding-box, radial-gradient(109.33% 196.79% at -16.9% 5%, #381140 0%, #111111 100%) border-box';
			case 6:
				return 'linear-gradient(#111111, #111111) padding-box, radial-gradient(109.33% 196.79% at -16.9% 5%, #111111 0%, #381140 100%) border-box';
			case 7:
				return 'linear-gradient(#111111, #111111) padding-box, radial-gradient(109.33% 196.79% at -16.9% 5%, #381140 0%, #111111 100%) border-box';
			case 8:
				return 'linear-gradient(#111111, #111111) padding-box, radial-gradient(99.46% 174.34% at 114.68% 118.04%, #E984FB 0%, #5C2267 40.65%, #0D0D0F 100%) border-box';
			default:
				return 'linear-gradient(#111111, #111111) padding-box, radial-gradient(68.27% 122.89% at -16.59% 96.67%, #E984FB 0%, #5C2267 40.65%, #111111 100%) border-box';
		}
	}


	const { cardRef, isHovered, handleMouseMove, handleMouseEnter, handleMouseLeave, gradientStyle, mousePosition } = useHoverGradient({
		defaultGradient:
			getGradient(item.id),
		hoverGradient:
			'radial-gradient(circle at 50% 50%, rgba(169, 114, 179, 0.8) 0%, rgba(47, 15, 53, 0.4) 30%, transparent 70%)',
	})
	return (
		<div className='relative sm:w-full md:w-1/2-custom'>
			<div
				className={`absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}
				style={{
					background: `radial-gradient(circle at ${mousePosition.x} ${mousePosition.y}, #BE55D1 0%, #090909 30%, transparent 70%)`,
				}}
			/>
			<div ref={cardRef}
				onMouseMove={handleMouseMove}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave} style={gradientStyle} data-aos={`${item.id % 2 === 0 ? 'fade-left' : 'fade-right'}`} data-aos-delay={`${500 + item.id * 100}`} className={`h-full border-gradient-technical ${(item.id === 1 || item.id === 8) && 'border-gradient-technical1'} ${(item.id === 2 || item.id === 4 || item.id === 6) && 'border-gradient-technical2'} ${(item.id === 3 || item.id === 5 || item.id === 7) && 'border-gradient-technical3'} border-gradient-technical sm:p-7 lg:p-10 border-2 border-transparent  flex flex-col gap-4 rounded-2xl`}>
				<h4 className={`${styles.titleH4} text-white`}>{item.title}</h4>
				<p className={`${styles.baseText} text-darkTextMuted sm:pr-0 lg:pr-10`}>{item.text}</p>
			</div>
		</div>

	)
}

export default TechnicalHighlightsCart
