import React from 'react'
import { styles } from '@/styles/styles';
import BlogCart from '@/components/BlogCart';
import { SubscribeUs } from '@/features/SubscribeUs/SubscribeUs';
import { BlogsData } from '@/mockData/mockData';
import NewCartImage7 from '@/assets/newCartImage7.png'
import CustomPagination from '@/components/Pagination';
import { Link } from 'react-router-dom';

const cartInfo = {
	id: 1,
	title: 'LQG Puts Privacy & Security First',
	text: 'Before we get into Grass 101, let’s start with an analogy to understand what ‘unused internet’ means. Think of your home internet like a big highway with multiple lanes.',
	linkText: 'Learn More',
	link: 'blog5',
	date: 'October 14, 2024',
	image: NewCartImage7
}

export const BlogsPage: React.FC = React.memo(() => (
	<div className='sm:pt-28 md:pt-52'>
		<div className={`${styles.container}`}>
			<h1 className={`${styles.titleH3} sm:mb-7 md:mb-14`}>Discover our Blog</h1>
			<div className='flex items-stretch justify-between gap-y-6 gap-x-3 mb-6 flex-wrap'>
				<BlogCart cartInfo={cartInfo} variant='small' customStyle='browse-cart-border sm:w-full xs:w-1/2-custom md:w-66.666-custom' />
				<div className='sm:w-full xs:w-1/2-custom md:w-33.333-custom flex flex-col sm:gap-y-3 md:gap-y-6 '>
					{
						[1, 2, 3].map((item) => (
							<div key={item} className='p-3 flex flex-col items-start gap-y-4 '>
								<span className={`${styles.baseText} text-darkTextMuted`}>{cartInfo.date}</span>
								<span className={`${styles.titleH4} text-white`}>{cartInfo.title}</span>
								<span className={`${styles.baseText} text-darkTextMuted line-clamp-2`}>{cartInfo.text}</span>
								<Link to={cartInfo.link} className={`${styles.baseText} text-darkTextLink group flex items-center gap-2.5 mt-auto`}>
									{cartInfo.linkText}
									<svg className='group-hover:translate-x-1 transition-all' width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M10.3238 4.92426C10.5581 4.68995 10.5581 4.31005 10.3238 4.07574L6.50538 0.257359C6.27107 0.0230446 5.89117 0.0230446 5.65685 0.257359C5.42254 0.491674 5.42254 0.871573 5.65685 1.10589L9.05097 4.5L5.65685 7.89411C5.42254 8.12843 5.42254 8.50833 5.65685 8.74264C5.89117 8.97696 6.27107 8.97696 6.50538 8.74264L10.3238 4.92426ZM0 5.1L9.8995 5.1V3.9L0 3.9L0 5.1Z" fill="#7C8FFF" />
									</svg>
								</Link>
							</div>
						))
					}

				</div>
			</div>
			<div className='flex flex-wrap justify-between gap-y-6 gap-x-3 sm:mb-7 md:mb-14'>
				{
					BlogsData?.map((item) => (
						<BlogCart key={item.id} cartInfo={item} variant='small' customStyle='browse-cart-border sm:w-full xs:w-1/2-custom md:w-1/3-custom' />
					))
				}
			</div>
			<CustomPagination />
		</div>
		<SubscribeUs customStyle='sm:my-20 md:my-40' />
	</div>
)
)

BlogsPage.displayName = 'BlogsPage';