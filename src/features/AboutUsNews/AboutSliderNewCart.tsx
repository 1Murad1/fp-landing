import { styles } from '@/styles/styles'
import { ILatestNewsData } from '@/types/types'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface ISliderNewCart {
	cartInfo: ILatestNewsData
	customStyle?: string
}

const AboutSliderNewCart: FC<ISliderNewCart> = ({ cartInfo, customStyle }) => {
	return (
		<Link data-aos="fade-up" data-aos-delay={`${500 + cartInfo.id * 100}`} to={cartInfo.link} className={`${customStyle} about-new-cart-border h-full transition-all duration-500 p-5 rounded-2xl flex flex-col items-start gap-4 border-2 border-darkBgSecondary sm:min-h-[16.875rem] lg:min-h-[30rem]`}>
			<span className='overflow-hidden rounded-xl flex'>
				<img src={cartInfo.image} alt="new image cart" />
			</span>
			<span className={`leading-6 text-[1.125rem] text-darkTextMuted`}>{cartInfo.title}</span>
			<span className={`${styles.titleH4} text-darkTextMuted line-clamp-2`}>{cartInfo.text}</span>
			<span className={`${styles.baseText} text-darkTextLink group flex items-center gap-2.5 mt-auto`}>
				{cartInfo.linkText}
				<svg className='group-hover:translate-x-1 transition-all' width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M10.3238 4.92426C10.5581 4.68995 10.5581 4.31005 10.3238 4.07574L6.50538 0.257359C6.27107 0.0230446 5.89117 0.0230446 5.65685 0.257359C5.42254 0.491674 5.42254 0.871573 5.65685 1.10589L9.05097 4.5L5.65685 7.89411C5.42254 8.12843 5.42254 8.50833 5.65685 8.74264C5.89117 8.97696 6.27107 8.97696 6.50538 8.74264L10.3238 4.92426ZM0 5.1L9.8995 5.1V3.9L0 3.9L0 5.1Z" fill="#7C8FFF" />
				</svg>
			</span>
		</Link>
	)
}

export default AboutSliderNewCart
