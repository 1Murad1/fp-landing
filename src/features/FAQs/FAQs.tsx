import React from 'react'
import { AccordionDemo } from '../../components/AccordionDemo';
import { styles } from '@/styles/styles';
import { Button } from '@/ui/Button';
import { AccordionData } from "@/mockData/mockData"

interface FAQsProps {
	customStyle?: string
}

export const FAQs: React.FC<FAQsProps> = React.memo(({ customStyle }) => (
	<div data-aos="zoom-in" data-aos-delay="500" id='faq' className={`${customStyle}`}>
		<div className={`${styles.container} flex items-start justify-between gap-x-6 sm:flex-col lg:flex-row`}>
			<div data-aos="flip-up" data-aos-delay="600" className='flex sm:items-center lg:items-start sm:w-full lg:w-auto justify-between lg:flex-col gap-7'>
				<h3 className={`${styles.titleH3}`}>FAQs</h3>
				<Button customStyle={`${styles.buttonStyleBase} sm:hidden xs:flex group flex items-center gap-x-3 px-6 py-4`} variant='primary' link={false} type="button">
					See all answer
					<svg className='group-hover:rotate-45 group-hover:translate-x-1 transition-all' width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M8.6 1.5C8.6 1.16863 8.33137 0.9 8 0.9L2.6 0.9C2.26863 0.9 2 1.16863 2 1.5C2 1.83137 2.26863 2.1 2.6 2.1L7.4 2.1L7.4 6.9C7.4 7.23137 7.66863 7.5 8 7.5C8.33137 7.5 8.6 7.23137 8.6 6.9L8.6 1.5ZM1.42426 8.92426L8.42426 1.92426L7.57574 1.07574L0.575736 8.07574L1.42426 8.92426Z" fill="white" />
					</svg>
				</Button>
			</div>
			<AccordionDemo variant='block' data={AccordionData} customStyle='sm:max-w-full lg:max-w-[47.8125rem]' />
			<Button customStyle={`${styles.buttonStyleBase} xs:hidden mt-9 group flex items-center gap-x-3 px-6 py-4`} variant='primary' link={false} type="button">
				See all answer
				<svg className='group-hover:rotate-45 group-hover:translate-x-1 transition-all' width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M8.6 1.5C8.6 1.16863 8.33137 0.9 8 0.9L2.6 0.9C2.26863 0.9 2 1.16863 2 1.5C2 1.83137 2.26863 2.1 2.6 2.1L7.4 2.1L7.4 6.9C7.4 7.23137 7.66863 7.5 8 7.5C8.33137 7.5 8.6 7.23137 8.6 6.9L8.6 1.5ZM1.42426 8.92426L8.42426 1.92426L7.57574 1.07574L0.575736 8.07574L1.42426 8.92426Z" fill="white" />
				</svg>
			</Button>
		</div>

	</div>
))

FAQs.displayName = 'FAQs';