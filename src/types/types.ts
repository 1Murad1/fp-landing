export interface INavigationData { 
	id: number,
	path: string,
	label: string
}

export interface IDarkenedSliderData {
	id: number,
	url: string
}

export interface IMarqueeData {
	id: number,
	url: string
	text: string
}

export interface ILiquidityCartData {
	id: number,
	title: string
	text: string
}

export interface IGrowWithUsData {
	id: number,
	title: string
	text: string
	icon: string
}

export interface ITechnicalHighlightsData {
	id: number,
	title: string
	text: string
}

export interface IAuditorsData {
	id: number,
	icon: string
}

export interface ISafetySecurityData {
	id: number,
	title: string
	text: string
	linkText: string
	link: string
}

export interface IAccordionData {
	id: number,
	title: string
	text: string
}

export interface ILatestNewsData {
	id: number,
	title: string
	text: string
	linkText: string
	link: string
	image: string
}

export interface ISocialMediaData {
	id: number,
	icon: React.ReactNode
	link: string
	linkText: string
}

export type BreakpointValues = {
  width: number;
  gradientWidth: number;
};

export type BreakpointConfig = {
  [key: string]: BreakpointValues;
};