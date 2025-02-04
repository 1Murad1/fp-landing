import { FC } from 'react'
import { BoxIcon } from '../../ui/BoxIcon'
import { IGrowWithUsData } from '../../types/types'
import { styles } from '../../styles/styles'

type variantCart = 'small' | 'big'
type typeCart = 'primary' | 'secondary'

interface GrowWithUsCartProps {
	customStyle?: string
	variant: variantCart
	type: typeCart
	item: IGrowWithUsData
}

const GrowWithUsCart: FC<GrowWithUsCartProps> = ({ customStyle, type, variant, item }) => {
	return (
		<div className={`${customStyle} rounded-2xl border-2 border-darkBgSecondary ${type === 'primary' ? 'bg-black-40-cart sm:p-7 lg:p-10 flex flex-col justify-between gap-y-4' : ''} ${variant === 'big' ? 'sm:w-full md:w-1/2-custom md:h-96' : 'sm:w-full md:w-1/3-custom'}`}>
			<div className='flex justify-end'>
				<BoxIcon customStyle='shadow-[0px_14px_24px_0px_rgba(0,0,0,0.25)] rounded-[1.25rem] bg-darkBgPrimary'>
					<img src={item.icon} alt="icon" />
				</BoxIcon>
			</div>
			<div className='flex flex-col gap-y-1'>
				<p className={`${styles.titleH4} text-white`}>{item.title}</p>
				<p className={`${styles.baseText} text-darkTextMuted`}>{item.text}</p>
			</div>
		</div>
	)
}

export default GrowWithUsCart
