import LinkMore from '@/components/ui/LinkMore'
import { styles } from '@/styles/styles'
import { ILatestNewsData } from '@/types/types'
import { FC } from 'react'

interface ISliderNewCart {
	cartInfo: ILatestNewsData
	customStyle?: string
}

const SliderNewCart: FC<ISliderNewCart> = ({ cartInfo, customStyle }) => {
	return (
		<div className={`${customStyle} p-5 rounded-2xl flex flex-col items-start gap-4 border-2 border-darkBgSecondary sm:min-h-[16.875rem] lg:min-h-[30rem]`}>
			<div className='overflow-hidden rounded-xl flex'>
				<img src={cartInfo.image} alt="new image cart" />
			</div>
			<h4 className={`${styles.titleH4} text-white`}>{cartInfo.title}</h4>
			<p className={`${styles.baseText} text-darkTextMuted`}>{cartInfo.text}</p>
			<LinkMore text={cartInfo.linkText} link={cartInfo.link} />
		</div>
	)
}

export default SliderNewCart
