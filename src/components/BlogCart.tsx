import React from 'react'
import { styles } from '@/styles/styles'
import { IBlogCartData } from '@/types/types'
import { Link } from 'react-router-dom'

interface IBlogCartInfo {
	cartInfo: IBlogCartData
	customStyle?: string
	variant: 'small' | 'big'
}

const BlogCart: React.FC<IBlogCartInfo> = ({ cartInfo, customStyle, variant }) => {
	return (
		<Link data-aos="fade-up" to={cartInfo.link} data-aos-delay={variant === 'big' ? 0 : `${500 + cartInfo.id * 100}`} className={`p-5 rounded-2xl flex flex-col items-start gap-4 border-2 border-darkBgSecondary ${customStyle}`}>
			<span className='overflow-hidden rounded-xl flex'>
				<img src={cartInfo.image} alt="new image cart" />
			</span>
			<div className='p-3 flex flex-col items-start gap-y-4'>
				<span className={`${styles.baseText} text-darkTextMuted`}>{cartInfo.date}</span>
				<span className={`${styles.titleH4} text-white`}>{cartInfo.title}</span>
				<span className={`${styles.baseText} text-darkTextMuted line-clamp-2`}>{cartInfo.text}</span>
				<span className={`${styles.baseText} text-darkTextLink group flex items-center gap-2.5 mt-auto`}>
					{cartInfo.linkText}
					<svg className='group-hover:translate-x-1 transition-all' width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10.3238 4.92426C10.5581 4.68995 10.5581 4.31005 10.3238 4.07574L6.50538 0.257359C6.27107 0.0230446 5.89117 0.0230446 5.65685 0.257359C5.42254 0.491674 5.42254 0.871573 5.65685 1.10589L9.05097 4.5L5.65685 7.89411C5.42254 8.12843 5.42254 8.50833 5.65685 8.74264C5.89117 8.97696 6.27107 8.97696 6.50538 8.74264L10.3238 4.92426ZM0 5.1L9.8995 5.1V3.9L0 3.9L0 5.1Z" fill="#7C8FFF" />
					</svg>
				</span>
			</div>

		</Link>
	)
}

export default BlogCart