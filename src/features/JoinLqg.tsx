import { styles } from '@/styles/styles'
import { Button } from '@/ui/Button'
import React, { FC } from 'react'

interface IJoinLqgProps {
	customStyle?: string
}

export const JoinLqg: FC<IJoinLqgProps> = React.memo(({ customStyle }) => {
	return (
		<div data-aos="zoom-in" data-aos-delay="500" className={`${customStyle}`}>
			<div className={`${styles.container} flex flex-col items-center justify-center gap-y-9`}>
				<h2 className={`${styles.titleH1}`}>Start Earning With LQG</h2>
				<p className={`${styles.textSubtitle} max-w-2xl w-full text-center text-gray`}> Launch the LQG App now and start earning with the best pools for maximum returns and ultimate flexibility!</p>
				<div className='flex items-center gap-x-2 flex-wrap justify-center gap-y-2'>
					<Button customStyle={`${styles.buttonStyleAccent} px-9 py-4`} variant='primary' link={true} path={'/'} type="button">Open dashboard</Button>
				</div>
			</div>
		</div>
	)
}
)