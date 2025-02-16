import React, { ReactNode } from 'react';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";

interface ModalProps {
	// Основные пропсы
	trigger?: ReactNode;
	title?: string;
	description?: string;
	children?: ReactNode;

	// Стилизация
	className?: string;
	contentClassName?: string;
	headerClassName?: string;

	// Управление состоянием
	isOpen?: boolean;
	onOpenChange?: (open: boolean) => void;
}

export const Modal: React.FC<ModalProps> = React.memo(({
	title,
	description,
	children,
	contentClassName = '',
	headerClassName = '',
	isOpen,
	onOpenChange,
}) => (
	<Dialog open={isOpen} onOpenChange={onOpenChange}	>

		<DialogContent className={contentClassName}>
			{(title || description) && (
				<DialogHeader className={headerClassName}>
					{title && <DialogTitle>{title}</DialogTitle>}
					{description && (
						<DialogDescription>
							{description}
						</DialogDescription>
					)}
				</DialogHeader>
			)}
			{children}
		</DialogContent>
	</Dialog>
));

Modal.displayName = 'Modal';