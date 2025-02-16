import {
	Accordion,
} from "@/components/ui/accordion"
import React, { FC, useState } from "react"
import AccordionDemoItem from "./ui/AccordionDemoItem"
import { IAccordionData } from "@/types/types"


interface AccordionDemoProps {
	customStyle?: string
	data: IAccordionData[]
	variant: 'page' | 'block'
}

export const AccordionDemo: FC<AccordionDemoProps> = React.memo(({ customStyle, data, variant }) => {
	const [activeId, setActiveId] = useState<string | null>(null)
	return (
		<Accordion type="single" collapsible className={`${customStyle} w-full`}>
			{
				data.map(item => (
					<AccordionDemoItem variant={variant} key={item.id}
						item={item}
						activeId={activeId}
						setActiveId={setActiveId} />
				))
			}
		</Accordion>
	)
})