import { SubscribeUs } from '@/features/SubscribeUs/SubscribeUs';
import { styles } from '@/styles/styles';
import { Button } from '@/ui/Button';
import React from 'react'

export const NotFoundPage: React.FC = React.memo(() => (
	<div>
		<div className='sm:h-screen flex items-center'>
			<div className='sm:w-72 xs:w-80 mx-auto flex flex-col items-center'>
				<p className='mb-5 text-6xl text-center text-white'>404</p>
				<p className={`${styles.baseText} text-center text-white mb-14`}>It seems you've wandered into a place you weren't supposed to be.</p>
				<Button customStyle={`${styles.buttonStyleBase} px-6 py-5`} variant='primary' link={true} path='/'>Go to home</Button>
			</div>

		</div>
		<SubscribeUs />
	</div>
))

NotFoundPage.displayName = 'NotFoundPage';
