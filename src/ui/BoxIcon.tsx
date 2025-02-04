import React, { PropsWithChildren } from 'react'

interface BoxIconProps {
	customStyle?: string
}

export const BoxIcon: React.FC<PropsWithChildren<BoxIconProps>> = React.memo(({ customStyle, children }) => (
	<div className={`size-20 flex items-center justify-center ${customStyle}`}>{children}</div>
))