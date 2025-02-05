import { ISocialMediaData } from '@/types/types'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface ILinkCartProps {
	item: ISocialMediaData
}

const LinkCart: FC<ILinkCartProps> = ({ item }) => {
	return (
		<Link data-aos={`${item.id % 2 === 0 ? 'flip-left' : 'flip-right'}`} data-aos-delay={`${1500 + item.id * 100}`} to={item.link} className='subscribe-cart-border relative p-7 sm:min-h-56 md:h-72 group flex-1 rounded-2xl border-2 border-transparent flex items-center justify-center'>
			<span className='transition-all duration-500 absolute group-hover:bg-darkAccentBlue bg-darkBgSecondary left-7 top-7 py-4 block px-6 rounded-[0.5rem] text-base leading-3 text-white'>{item.linkText}</span>
			{item.icon}

		</Link>
	)
}

export default LinkCart
