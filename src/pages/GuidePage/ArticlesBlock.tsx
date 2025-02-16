import CartLink from '@/components/CartLink'
import { articlesCartsData } from '@/mockData/mockData'
import { styles } from '@/styles/styles'
import React from 'react'

interface ArticlesBlockProps {
	customStyle?: string
}

const ArticlesBlock: React.FC<ArticlesBlockProps> = ({ customStyle }) => {
	return (
		<div>
			<h4 className={`${styles.titleH4} mb-10 sm:hidden md:block`}>Articles</h4>
			<div className={`flex flex-wrap justify-between items-stretch gap-3 sm:flex-col md:flex-row ${customStyle}`}>
				{
					articlesCartsData?.map((item) => (
						<CartLink key={item.id} item={item} containerStyle='sm:w-full md:w-1/2-custom'>
							<span className={`${styles.titleH4} text-white`}>{item.title}</span>
							<span className='h-[1px] bg-darkGray w-full'></span>
							<span className={`${styles.baseText} text-darkTextMuted`}>{item.text}</span>
						</CartLink>
					))
				}
			</div>
		</div>

	)
}

export default ArticlesBlock