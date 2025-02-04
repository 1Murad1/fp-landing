import { ISocialMediaData } from '@/types/types'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

interface ILinkCartProps {
	item: ISocialMediaData
}

const LinkCart: FC<ILinkCartProps> = ({ item }) => {
	return (
		<Link to={item.link} className='relative p-7 sm:min-h-56 md:h-72 flex-1 rounded-2xl border-2 border-darkBgSecondary flex items-center justify-center'>
			<span className='absolute bg-darkBgSecondary left-7 top-7 py-4 block px-6 rounded-[0.5rem] text-base leading-3 text-white'>{item.linkText}</span>
			<img src={item.icon} alt="cart" />
		</Link>
	)
}

export default LinkCart
