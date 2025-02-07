import { SafetySecurityData } from '@/mockData/mockData'
import SafetySecurityCart from './SafetySecurityCart'

const SafetySecurity = () => {
	return (
		<div className='flex items-stretch justify-between gap-x-3 gap-y-2 sm:flex-col md:flex-row'>
			{
				SafetySecurityData?.map((item) => (
					<SafetySecurityCart key={item.id} item={item} />
				))
			}

		</div>
	)
}

export default SafetySecurity
