import React, { FC } from 'react'
import { styles } from '../../styles/styles'
import GrowWithUsCart from './GrowWithUsCart'
import Icon10 from '../../assets/icons/icon-10.svg'
import { GrowWithUsData } from '@/mockData/mockData'
import GrowWithUsBigCart from './GrowWithUsBigCart'

interface GrowWithUsProps {
	customStyle?: string
}

const item = {
	id: 5,
	title: 'Grow with us',
	text: 'Instant start earn from your memecoins',
	icon: Icon10
}

export const GrowWithUs: FC<GrowWithUsProps> = React.memo(({ customStyle }) => (
	<div className={`${customStyle}`}>
		<div className={`${styles.container}`}>
			<h3 className={`${styles.titleH3} mb-10`}>Grow with us</h3>
			<div className='flex flex-wrap justify-between items-stretch gap-x-3 gap-y-2 sm:flex-col md:flex-row'>
				{
					GrowWithUsData?.map((item) => (
						<GrowWithUsCart key={item.id} item={item} variant='small' type='primary' />
					))
				}
				<GrowWithUsBigCart />
				<GrowWithUsCart item={item} variant='big' type='primary' />
			</div>
		</div>
	</div>
))