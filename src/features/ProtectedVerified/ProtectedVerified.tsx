import React from 'react'
import { styles } from '../../styles/styles';
import Auditors from '../LiquidityRewardsHub/Auditors';
import SafetySecurity from './SafetySecurity';


interface IProtectedVerifiedProps {
	customStyle?: string
}

export const ProtectedVerified: React.FC<IProtectedVerifiedProps> = React.memo(({ customStyle }) => (
	<div className={`${customStyle}`}>
		<div className={`${styles.container}`}>
			<h3 data-aos="fade-right" data-aos-delay="1500" className={`${styles.titleH3} mb-4`}>Protected & verified</h3>
			<p data-aos="fade-right" data-aos-delay="1600" className={`${styles.baseText} text-darkTextMuted sm:mb-7 lg:mb-16`}>Over $4M invested security, including audits, bug bounties and expert reviews.</p>
			<h4 data-aos="fade-right" data-aos-delay="1700" className={`${styles.titleH4} text-white uppercase mb-7`}>Auditors</h4>
			<Auditors />
			<h4 data-aos="fade-right" data-aos-delay="1800" className={`${styles.titleH4} text-white uppercase mb-7`}>SAFeTY & SECURITY</h4>
			<SafetySecurity />
		</div>
	</div >
))

ProtectedVerified.displayName = 'ProtectedVerified';
