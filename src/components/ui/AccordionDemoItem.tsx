import { styles } from '@/styles/styles'
import { IAccordionData } from '@/types/types'
import {
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { FC } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AccordionDemoItemProps {
	item: IAccordionData
	activeId: string | null
	setActiveId: (id: string | null) => void
	variant: 'page' | 'block'
}

const AccordionDemoItem: FC<AccordionDemoItemProps> = ({ item, activeId, setActiveId, variant }) => {
	const isOpen = activeId === String(item.id)

	const handleClick = () => {
		setActiveId(isOpen ? null : String(item.id))
	}

	return (
		<AccordionItem key={item.id} value={`item-${item.id}`}>
			<AccordionTrigger
				className={`${variant === 'block' ? styles.titleH4 : 'text-[1.125rem]'} accordeon-header no-underline`}
				onClick={handleClick}
			>
				{item.title}
			</AccordionTrigger>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						style={{ overflow: "hidden" }}
					>
						<p className={`${variant === 'block' ? styles.baseText : 'text-[1.125rem]'} text-darkTextMuted`}>
							{item.text}
						</p>
					</motion.div>
				)}
			</AnimatePresence>
		</AccordionItem>
	)
}

export default AccordionDemoItem
