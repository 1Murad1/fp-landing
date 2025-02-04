import { styles } from '../../styles/styles'
import { SafetySecurityData } from '../../mockData/mockData'
import LinkMore from '@/components/ui/LinkMore'

const SafetySecurity = () => {
	return (
		<div className='flex items-stretch justify-between gap-x-3 gap-y-2 sm:flex-col md:flex-row'>
			{
				SafetySecurityData?.map((item) => (
					<div key={item.id} className='sm:p-7 lg:p-10 rounded-2xl border-2 border-darkBgSecondary flex-1 bg-black-30 flex flex-col gap-4'>
						<h4 className={`${styles.titleH4} text-white`}>{item.title}</h4>
						<div className='h-[1px] bg-darkGray w-full'></div>
						<p className={`${styles.baseText} text-darkTextMuted`}>{item.text}</p>
						<LinkMore text={item.linkText} link={item.link} />
					</div>
				))
			}

		</div>
	)
}

export default SafetySecurity
