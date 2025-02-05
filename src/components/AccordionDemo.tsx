import {
	Accordion,
} from "@/components/ui/accordion"
import React, { FC } from "react"
import AccordionDemoItem from "./ui/AccordionDemoItem"
import { AccordionData } from "@/mockData/mockData"

interface AccordionDemoProps {
	customStyle?: string
}

export const AccordionDemo: FC<AccordionDemoProps> = React.memo(({ customStyle }) => (
	<Accordion type="single" collapsible className={`${customStyle} w-full`}>
		{
			AccordionData.map(item => (
				<AccordionDemoItem key={item.id} item={item} />
			))
		}
	</Accordion>
))