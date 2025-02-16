import { SubscribeUs } from '@/features/SubscribeUs/SubscribeUs'
import { styles } from '../../styles/styles'
import SupportCartsBlock from './SupportCartsBlock'
import GuidesCarts from './GuidesCarts'

const SupportPage = () => {
	return (
		<div className='sm:pt-28 md:pt-52'>
			<div className={`${styles.container}`}>
				<h3 className={`${styles.titleH3} mb-10`}>Help & Support</h3>
				<SupportCartsBlock />
				<h3 className={`${styles.titleH3} mb-10`}>Guides</h3>
				<GuidesCarts />
			</div>
			<SubscribeUs customStyle='sm:my-20 md:my-40' />
		</div>
	)
}

export default SupportPage