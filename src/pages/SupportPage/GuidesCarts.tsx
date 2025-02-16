import CartLink from '@/components/CartLink'
import { guidesCartsData } from '@/mockData/mockData'
import { styles } from '@/styles/styles'
import { BoxIcon } from '@/ui/BoxIcon'
import React from 'react'

const GuidesCarts: React.FC = () => {
	return (
		<div className='flex items-stretch justify-between gap-3 flex-wrap'>
			{
				guidesCartsData?.map((item) => (
					<CartLink key={item.id} item={item} containerStyle='sm:w-full md:w-1/2-custom'>
						<BoxIcon customStyle='size-14 shadow-[0px_14px_24px_0px_rgba(0,0,0,0.25)] rounded-xl bg-darkBgPrimary hover:bg-lightBgPrimary transition-all duration-300 cursor-pointer'>
							{item.icon}
						</BoxIcon>
						<span className={`${styles.titleH4} text-white`}>{item.title}</span>
						<span className='h-[1px] bg-darkGray w-full'></span>
						<span className={`${styles.baseText} text-darkTextMuted`}>{item.text}</span>
					</CartLink>
				))
			}
		</div>
	)
}

export default GuidesCarts