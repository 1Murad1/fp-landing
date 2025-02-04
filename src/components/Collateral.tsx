import React from 'react'
import { styles } from '../styles/styles'

interface CollateralProps {
	customStyle?: string
}

export const Collateral: React.FC<CollateralProps> = React.memo(({ customStyle }) => (
	<div className={`${customStyle}`}>
		<div className={`${styles.container}`}>
			<h2 className={`${styles.titleH2}`}><span className='text-darkAccentGreen'>$1.079.801.285</span> of borrowing backed by <br className='sm:hidden lg:block' />
				<span className='text-darkAccentRed'>$2.107.654.320</span> of collateral across <span className='text-darkAccentRed'>17</span> markets</h2>
		</div>

	</div>
))

Collateral.displayName = 'Collateral';

