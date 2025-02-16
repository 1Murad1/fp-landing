export interface INavigationData { 
	id: number,
	path: string,
	label: string
}

export interface IDarkenedSliderData {
	id: number,
	imageDesktop: string
	imageMobile: string
	tabTitle: string
	tabText: string
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
	icon: React.ReactNode
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

export interface IBlogCartData extends ILatestNewsData {
	date: string
}

export interface IAboutNewsData {
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

export interface ISidebarData {
	id: number,
	title: string,
	anchor: string
}

export interface IFaqCategoryData {
  id: string;
  title: string;
  accordionData: IAccordionData[];
}

export interface IBaseCartItem {
	id: number;
	link: string;
}

export interface ISupportCartItem extends IBaseCartItem {
  title: string;
  text: string;
  linkText: string;
}

export interface IGuidesCartItem extends IBaseCartItem {
	title: string;
	text: string;
	icon: React.ReactNode
}


export interface IArticlesCartItem extends IBaseCartItem {
	title: string;
	text: string;
}

export interface IArticlesPageData {
	id: number,
	idSection: string,
	title: string,
	text: string
}