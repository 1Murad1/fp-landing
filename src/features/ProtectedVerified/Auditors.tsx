import React from 'react'
import { AuditorsData } from '../../mockData/mockData'

const Auditors = () => {
	return (
		<div className='flex items-stretch justify-between gap-x-3 gap-y-2 sm:flex-col md:flex-row sm:mb-7 lg:mb-10'>
			{
				AuditorsData?.map((item) => (
					<div key={item.id} className='sm:min-h-56 md:h-44 flex-1 flex justify-center items-center border-2 border-darkBgSecondary rounded-2xl bg-black-30'>
						<img src={item.icon} alt="cart" />
					</div>
				))
			}
		</div>
	)
}

export default Auditors
