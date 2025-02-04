import React from 'react'
import { styles } from '../../styles/styles';
import Auditors from './Auditors';
import SafetySecurity from './SafetySecurity';


interface IProtectedVerifiedProps {
	customStyle?: string
}

export const ProtectedVerified: React.FC<IProtectedVerifiedProps> = React.memo(({ customStyle }) => (
	<div className={`${customStyle}`}>
		<div className={`${styles.container}`}>
			<h3 className={`${styles.titleH3} mb-4`}>Protected & verified</h3>
			<p className={`${styles.baseText} text-darkTextMuted sm:mb-7 lg:mb-16`}>Over $4M invested security, including audits, bug bounties and expert reviews.</p>
			<h4 className={`${styles.titleH4} text-white uppercase mb-7`}>Auditors</h4>
			<Auditors />
			<h4 className={`${styles.titleH4} text-white uppercase mb-7`}>SAFeTY & SECURITY</h4>
			<SafetySecurity />
		</div>
	</div >
))

ProtectedVerified.displayName = 'ProtectedVerified';
