import { styles } from '@/styles/styles'
import { IAccordionData } from '@/types/types'
import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { FC } from 'react'

interface AccordionDemoItemProps {
	item: IAccordionData
}

const AccordionDemoItem: FC<AccordionDemoItemProps> = ({ item }) => {
	return (
		<AccordionItem key={item.id} value={`item-${item.id}`}>
			<AccordionTrigger className={`${styles.titleH4} accordeon-header no-underline`}>{item.title}</AccordionTrigger>
			<AccordionContent className={`${styles.baseText} text-darkTextMuted`}>
				{item.text}
			</AccordionContent>
		</AccordionItem>
	)
}

export default AccordionDemoItem
