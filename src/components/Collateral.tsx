import React from 'react'
import { styles } from '../styles/styles'
import CountUp from 'react-countup';
import { useOnScreen } from '@/hooks/useOnScreen';

interface CollateralProps {
	customStyle?: string
}


export const Collateral: React.FC<CollateralProps> = React.memo(({ customStyle }) => {
	const { elementRef, isVisible } = useOnScreen();
	return (
		<div className={`${customStyle}`}>
			<div className={`${styles.container}`}>
				<h2 ref={elementRef} data-aos="fade-up" data-aos-delay="500" className={`${styles.titleH2}`}><span className='text-darkAccentGreen'>${isVisible && <CountUp className='sm:w-36 lg:w-[19rem] inline-block ' start={0} end={1079801285} duration={2} separator="." />}</span> of borrowing backed by <br className='sm:hidden lg:block' />
					<span className='text-darkAccentRed'>${isVisible && <CountUp className='sm:w-36 lg:w-[19rem] inline-block ' start={0} end={2107654320} duration={2} separator="." />} </span> of collateral across <span className='text-darkAccentRed'>{isVisible && <CountUp className='sm:w-6 lg:w-12 inline-block' start={0} end={17} duration={4} separator="." />}</span> markets</h2>
			</div>
		</div>
	)
})

Collateral.displayName = 'Collateral';

