import { FC } from 'react'
import { BoxIcon } from '../../ui/BoxIcon'
import { IGrowWithUsData } from '../../types/types'
import { styles } from '../../styles/styles'
import { useHoverGradient } from '../../hooks/useHoverGradient'

type VariantCart = 'small' | 'big'
type TypeCart = 'primary' | 'secondary'

interface GrowWithUsCartProps {
	customStyle?: string
	variant: VariantCart
	type: TypeCart
	item: IGrowWithUsData
}

const GrowWithUsCart: FC<GrowWithUsCartProps> = ({ customStyle, type, variant, item }) => {
	const { cardRef, isHovered, handleMouseMove, handleMouseEnter, handleMouseLeave, gradientStyle, mousePosition } =
		useHoverGradient({
			defaultGradient:
				'radial-gradient(42.82% 77.08% at 50% 29.17%, #A972B3 0%, #2F0F35 27.5%, #111111 100%)',
			hoverGradient:
				'radial-gradient(circle at 50% 50%, rgba(169, 114, 179, 0.8) 0%, rgba(47, 15, 53, 0.4) 30%, transparent 70%)',
		})

	return (
		<div className={`relative ${variant === 'big' ? 'sm:w-full md:w-1/2-custom md:h-96' : 'sm:w-full md:w-1/3-custom'}`} data-aos="fade-up" data-aos-delay={`${1000 + item.id * 100}`}>
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
				className={`relative rounded-2xl border-2 border-transparent transition-all duration-300 bg-bgDark ${customStyle} ${type === 'primary' ? 'sm:p-7 lg:p-10 flex flex-col justify-between gap-y-4 h-full' : ''} `}
				style={gradientStyle}
			>
				<div className='flex justify-end'>
					<BoxIcon customStyle='shadow-[0px_14px_24px_0px_rgba(0,0,0,0.25)] transition-all duration-300 rounded-[1.25rem] bg-darkBgPrimary hover:bg-lightBgPrimary'>
						<img src={item.icon} alt="icon" />
					</BoxIcon>
				</div>
				<div className='flex flex-col gap-y-1'>
					<p className={`${styles.titleH4} text-white`}>{item.title}</p>
					<p className={`${styles.baseText} text-darkTextMuted`}>{item.text}</p>
				</div>
			</div>
		</div>
	)
}

export default GrowWithUsCart
