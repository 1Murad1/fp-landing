import React, { FC } from 'react'
import { styles } from '../../styles/styles'
import GrowWithUsCart from './GrowWithUsCart'
import Icon10 from '../../assets/icons/icon-10.svg'
import { Button } from '../../ui/Button'
import { GrowWithUsData } from '@/mockData/mockData'

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
				<div className={`growWithUsBigCartBorder sm:order-5 md:-order-none rounded-2xl border-2 border-transparent  sm:p-7 lg:p-10 flex flex-col justify-center items-center gap-y-4 sm:w-full md:w-1/2-custom md:h-96`}>
					<h3 className='w-9/12 sm:text-xl lg:text-[1.75rem] uppercase leading-9 font-bold text-white text-center'>Governed by the community</h3>
					<p className='sm:text-sm lg:text-base lg:leading-5 text-darkTextMuted font-normal text-center'>A global community of holders and delegates.</p>
					<Button customStyle={`${styles.buttonStyleAccent} px-9 py-4 mt-6`} variant='primary' link={false} type="button">Governance Forum</Button>
				</div>
				<GrowWithUsCart item={item} variant='big' type='primary' />
			</div>
		</div>
	</div>
))