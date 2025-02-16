import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface CustomCheckboxProps {
	id: string;
	label?: string;
	checked?: boolean;
	onChange?: (checked: boolean) => void;
	disabled?: boolean;
	className?: string;
}

export function CustomCheckbox({
	id,
	label,
	checked,
	onChange,
	disabled,
	className,
}: CustomCheckboxProps) {
	return (
		<div className={cn("flex items-center space-x-2", className)}>
			<Checkbox
				id={id}
				checked={checked}
				onCheckedChange={onChange}
				disabled={disabled}
			/>
			{label && (
				<label
					htmlFor={id}
					className={cn(
						"cursor-pointer text-sm font-normal leading-3 text-white",
						"peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					)}
				>
					{label}
				</label>
			)}
		</div>
	);
}
