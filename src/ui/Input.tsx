import { FC } from 'react'

type InputType = 'text' | 'password' | 'email'

interface InputProps {
	customStyle?: string
	placeholder?: string
	type: InputType
	value?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = ({ placeholder, type, customStyle, value, onChange }) => {
	return (
		<input onChange={onChange} type={type} placeholder={placeholder} value={value} className={`outline-none bg-darkBgSecondary border border-darkBgBorder rounded-lg p-5 text-darkTextMuted ${customStyle}`} />
	)
}

export default Input