import { styles } from '@/styles/styles'
import { Button } from '@/ui/Button'
import { LiquidityInfo } from '@/ui/LiquidityInfo'
import React, { FC } from 'react'

interface IJoinLqgProps {
	customStyle?: string
}

export const JoinLqg: FC<IJoinLqgProps> = React.memo(({ customStyle }) => (
	<div data-aos="zoom-in" data-aos-delay="1500" className={`${customStyle}`}>
		<div className={`${styles.container} flex flex-col items-center justify-center gap-y-9`}>
			<h2 className={`${styles.titleH1}`}>Join the LQG</h2>
			<LiquidityInfo text='$34.95 billion of liquidity currently supplied.' />
			<div className='flex items-center gap-x-2 flex-wrap justify-center gap-y-2'>
				<Button customStyle={`${styles.buttonStyleAccent} px-9 py-4`} variant='secondary' link={false} type="button">Get started</Button>
				<Button customStyle={`${styles.buttonStyleAccent} px-9 py-4`} variant='primary' link={false} type="button">Open dashboard</Button>
			</div>
		</div>
	</div>
)
)