import React from 'react'
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination"

interface IPaginationProps {
	customStyle?: string
}

const CustomPagination: React.FC<IPaginationProps> = () => {
	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious href="/blogs" />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink isActive href="/blogs">1</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="/blogs">2</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="/blogs">3</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationEllipsis />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="/blogs">12</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationNext href="/blogs" />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	)
}

export default CustomPagination