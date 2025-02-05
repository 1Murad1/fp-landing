import { styles } from '@/styles/styles'
import { Button } from '@/ui/Button'
import React, { FC } from 'react'
import { SliderNews } from './SliderNews'

interface IBrowseOurLatestNewsProps {
	customStyle?: string
}

export const BrowseOurLatestNews: FC<IBrowseOurLatestNewsProps> = React.memo(({ customStyle }) => (
	<div className={`${customStyle}`}>
		<div className={`${styles.container}`}>
			<h3 data-aos="fade-right" data-aos-delay="1000" className={`${styles.titleH3} mb-4`}>Browse our latest news</h3>
			<div className='flex items-start justify-between gap-x-3 sm:mb-7 lg:mb-10'>
				<p data-aos="fade-right" data-aos-delay="1600" className={`${styles.baseText} text-darkTextMuted max-w-5xl w-full`}>Dive deep into our collection of articles, stories, and updates on all things Grass. Whether you’re looking for industry trends, company updates, or behind-the-scenes glimpses, our blog offers a wealth of knowledge to feed your curiosity.</p>
				<Button customStyle={`${styles.buttonStyleBase} sm:hidden xs:flex group px-6 py-4 flex items-center gap-x-3 whitespace-nowrap`} variant='primary' link={false} type="button">View all articles <svg className='group-hover:rotate-45 group-hover:translate-x-1 transition-all' width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M8.6 1.5C8.6 1.16863 8.33137 0.9 8 0.9L2.6 0.9C2.26863 0.9 2 1.16863 2 1.5C2 1.83137 2.26863 2.1 2.6 2.1L7.4 2.1L7.4 6.9C7.4 7.23137 7.66863 7.5 8 7.5C8.33137 7.5 8.6 7.23137 8.6 6.9L8.6 1.5ZM1.42426 8.92426L8.42426 1.92426L7.57574 1.07574L0.575736 8.07574L1.42426 8.92426Z" fill="white" />
				</svg>
				</Button>
			</div>
			<SliderNews />
			<Button customStyle={`${styles.buttonStyleBase} mt-8 xs:hidden group px-6 py-4 flex items-center gap-x-3 whitespace-nowrap`} variant='primary' link={false} type="button">View all articles <svg className='group-hover:rotate-45 group-hover:translate-x-1 transition-all' width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M8.6 1.5C8.6 1.16863 8.33137 0.9 8 0.9L2.6 0.9C2.26863 0.9 2 1.16863 2 1.5C2 1.83137 2.26863 2.1 2.6 2.1L7.4 2.1L7.4 6.9C7.4 7.23137 7.66863 7.5 8 7.5C8.33137 7.5 8.6 7.23137 8.6 6.9L8.6 1.5ZM1.42426 8.92426L8.42426 1.92426L7.57574 1.07574L0.575736 8.07574L1.42426 8.92426Z" fill="white" />
			</svg>
			</Button>
		</div>
	</div>
))
