import React from 'react'
import { SubscribeUs } from '@/features/SubscribeUs/SubscribeUs'
import { styles } from '@/styles/styles'
import Sidebar from '@/components/Sidebar'
import { AccordionDemo } from '@/components/AccordionDemo'
import { faqPageData, sidebarFaqData } from '@/mockData/mockData'


export const FaqPage: React.FC = React.memo(() => {
	return (
		<div className='sm:pt-28 md:pt-52 faq-page'>
			<div className='sm:min-h-screen'>
				<div className={`${styles.container}`}>
					<h3 className={`${styles.titleH3} sm:mb-10 xs:mb-5`}>FAQs</h3>
					<div className='relative flex justify-between items-start gap-x-40'>
						<Sidebar sidebarData={sidebarFaqData} customStyle='w-max sticky top-10 sm:pt-5 xs:pt-10' />
						<div className='flex-1'>
							{
								faqPageData?.map((item) => (
									<div key={item.id} data-aos='fade-up' data-aos-delay={300}>
										<h4 id={item.id} className={`${styles.titleH4} text-white sm:py-5 xs:py-10`}>{item.title}</h4>
										<AccordionDemo variant='page' data={item.accordionData} customStyle='faq-accordion ' />
									</div>

								))
							}
						</div>
					</div>

				</div>
			</div>
			<SubscribeUs customStyle='sm:my-20 md:my-40' />
		</div>
	)
}
)