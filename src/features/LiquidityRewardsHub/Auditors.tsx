import { AuditorsData } from "@/mockData/mockData"


const Auditors = () => {
	return (
		<div className='flex items-stretch justify-between gap-x-3 gap-y-2 sm:flex-col md:flex-row sm:mb-7 lg:mb-10'>
			{
				AuditorsData?.map((item) => (
					<div data-aos={`${item.id % 2 === 0 ? 'flip-left' : 'flip-right'}`} data-aos-delay={`${1000 + item.id * 100}`} key={item.id} className='auditors-border sm:min-h-56 md:h-44 flex-1 flex justify-center items-center border-2 border-transparent rounded-2xl'>
						<img src={item.icon} alt="cart" />
					</div>
				))
			}
		</div>
	)
}

export default Auditors
