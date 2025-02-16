import { FC, useState } from 'react'
import { Modal } from './Modal'
import ModalBg from '@/assets/modal/bg-modal.png'
import { Link } from 'react-router-dom'
import Input from '@/ui/Input'
import { Button } from '@/ui/Button'
import { styles } from '@/styles/styles'
import { CustomCheckbox } from '@/ui/CustomCheckbox'

interface ModalSubscribeProps {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
}

const ModalSubscribe: FC<ModalSubscribeProps> = ({ isOpen, setIsOpen }) => {
	const [value, setValue] = useState('');
	return (
		<Modal
			isOpen={isOpen}
			onOpenChange={setIsOpen}
			contentClassName={`subscribe-modal border-none sm:p-7 md:p-16 overflow-hidden sm:max-w-full xsm:max-w-[90%] md:max-w-[37.5rem] sm:top-auto sm:bottom-4 sm:translate-y-0 md:top-1/2 md:bottom-auto md:-translate-y-1/2`}
		>
			<img className="absolute left-0 bottom-0 z-0" src={ModalBg} alt="modal" />

			<div className="relative z-10">
				<p className="text-3xl w-64 text-white mb-5 font-semibold">Subscribe to our newslette</p>
				<p className="text-sm text-white mb-10">No spam, no fluff. Just updates on our journey to revolutioize data in web3.
					You can unsubscribe anytime. For more details review our <Link onClick={() => setIsOpen(false)} to="/privacy-policy" className="text-darkTextLink underline">Privacy Policy</Link></p>
				<form>
					<label className='text-sm text-white mb-2 block'>Email</label>
					<div className='flex items-stretch justify-between gap-2 flex-wrap'>
						<Input type="email" placeholder="mail@mail.com" value={value} onChange={(e) => setValue(e.target.value)} customStyle='flex-1' />
						<Button onClick={() => console.log(value)} customStyle={`${styles.buttonStyleAccent} px-8 py-4 items-center text-sm`} variant='primary' link={false} type="button">Subscribe</Button>
					</div>
					<CustomCheckbox id='checkbox' checked label="I agree to receive emails from Liquidity Gate" className='mt-5' />
				</form>
			</div>


		</Modal>
	)
}

export default ModalSubscribe