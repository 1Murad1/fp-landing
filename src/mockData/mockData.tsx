import { IAccordionData, IAuditorsData, IDarkenedSliderData, IGrowWithUsData, ILatestNewsData, ILiquidityCartData, IMarqueeData, ISafetySecurityData, ISocialMediaData, ITechnicalHighlightsData } from '../types/types'
import SlideImage1 from '../assets/slideImage1.png'
import SlideImage2 from '../assets/slideImage2.png'
import SlideImage3 from '../assets/slideImage3.png'
import FlokiIcon from '../assets/icons/floki.svg'
import ShibaInuIcon from '../assets/icons/shiba-inu.svg'
import PepeIcon from '../assets/icons/pepe.svg'
import BonkIcon from '../assets/icons/bonk.svg'
import BomeIcon from '../assets/icons/bome.svg'
import DogeIcon from '../assets/icons/doge.svg'
import WalletIcon from '../assets/icons/wallet-money.svg';
import GraphNewUp from '../assets/icons/graph-new-up.svg';
import WidgetIcon from '../assets/icons/widget.svg';
import NewCartImage1 from '../assets/newCartImage1.png'
import NewCartImage2 from '../assets/newCartImage2.png'
import NewCartImage3 from '../assets/newCartImage3.png'
import TwitterIcon from '@/components/svg/TwitterIcon'
import TelegramIcon from '@/components/svg/TelegramIcon'
import DiscordIcon from '@/components/svg/DiscordIcon'
import CertoraIcon from '@/components/svg/CertoraIcon'
import SpearbitIcon from '@/components/svg/SpearbitIcon'


export const DarkenedSliderData: IDarkenedSliderData[] = [
	{
		id: 1,
		url: SlideImage3,
	},
	{
		id: 2,
		url: SlideImage1,
	},
	{
		id: 3,
		url: SlideImage2,
	},
]



export const MarqueeData: IMarqueeData[] = [
	{
		id: 1,
		url: FlokiIcon,
		text: 'FLOKI'
	},
	{
		id: 2,
		url: ShibaInuIcon,
		text: 'SHIBA-INU'
	},
	{
		id: 3,
		url: PepeIcon,
		text: 'PEPE'
	},
	{
		id: 4,
		url: BonkIcon,
		text: 'BONK'
	},
	{
		id: 5,
		url: BomeIcon,
		text: 'BOME'
	},
	{
		id: 6,
		url: DogeIcon,
		text: 'DOGE'
	},
]

export const LiquidityCartData: ILiquidityCartData[] = [
	{
		id: 1,
		title: 'Put your money to work',
		text: 'Provide liquidity with your favorite assets like DOGE, PEPE and more Memes tokens.'
	},
	{
		id: 2,
		title: 'Nonstop earning',
		text: 'Gain exposure to trades PnL, earn fees, and promte seasmless trading on derivatives markets.'
	},
	{
		id: 3,
		title: 'Tap into your assets',
		text: 'Borrow against your collateral with USDx, an interest-free stablecoin taht lets you keep more of your money.'
	},
]

export const GrowWithUsData: IGrowWithUsData[] = [
	{
		id: 1,
		title: '$90m',
		text: '24hr Volume',
		icon: WalletIcon
	},
	{
		id: 2,
		title: '$1.1b',
		text: 'TVL',
		icon: GraphNewUp
	},
	{
		id: 3,
		title: '4.1k',
		text: 'Pools',
		icon: WidgetIcon
	},
]

export const TechnicalHighlightsData: ITechnicalHighlightsData[] = [
	{
		id: 1,
		title: 'Rate Scaling',
		text: 'V3 abstracts the complexity of managing LSTs by moving all rate scaling into the Vault, providing pools with uniform rate-scaled balances and input values by default, ensuring that yield from yield-bearing tokens is not captured by arbitrage traders.',
	},
	{
		id: 2,
		title: 'Liquidity Invariant Approximation',
		text: 'Supports unbalanced add/remove liquidity operations across all pool types, drastically enhancing user experience, as users are not forced to add liquidity in proportional amounts.'
	},
	{
		id: 3,
		title: 'Transient Accounting',
		text: `EIP-1153's transient op-codes unlock a new, expressive design, the “Till” pattern. This allows the Vault to efficiently enforce contract-level invariants in the scope of a callback, supporting design patterns that were previously not possible.`
	},
	{
		id: 4,
		title: 'ERC20MultiToken',
		text: 'Ensures atomic updates to pool token balances and total supply within the Vault, reducing risks of read-only reentrancy attack vectors.'
	},
	{
		id: 5,
		title: 'Swap Fee Management',
		text: 'Standardizes swap fee implementation within the Vault for consistent interfaces across pools, while allowing flexibility at the hook level.'
	},
	{
		id: 6,
		title: 'Pool Creator Fee',
		text: 'Introduces a permissionless mechanism for external pool developers to earn a share of swap fees and yield, incentivizing innovative AMM creation.'
	},
	{
		id: 7,
		title: 'Pool Pause Manager',
		text: 'The pool can define its pause window on registration, relying on the Vault to enforce the time window and manage authentication.'
	},
	{
		id: 8,
		title: 'Decimal Scaling',
		text: 'To alleviate the challenges of managing tokens with variable decimals, the Vault provides the pool with token balances and input values scaled to 18 decimals.'
	}
]

export const AuditorsData: IAuditorsData[] = [
	{
		id: 1,
		icon: <CertoraIcon fill='group-hover:fill-violet transition-all duration-300' stroke="group-hover:stroke-violet transition-all duration-300" />
	},
	{
		id: 2,
		icon: <SpearbitIcon fill='group-hover:fill-violet transition-all duration-300' />
	},
]

export const SafetySecurityData: ISafetySecurityData[] = [
	{
		id: 1,
		title: 'Extensive Audits',
		text: 'Peace of mind supported by multiple audits by the world’s leading security firms.',
		linkText: 'Learn More',
		link: ''
	},
	{
		id: 2,
		title: 'Bug Bounty',
		text: 'Security is a top priority. Report vulnerabilities or bugs responsibly and get rewarded.',
		linkText: 'Learn More',
		link: ''
	},
	{
		id: 3,
		title: 'Shortfall Secured',
		text: 'The Aave Protocol is secured with a backstop against protocol insolvency.',
		linkText: 'Learn More',
		link: ''
	},]

export const AccordionData: IAccordionData[] = [
	{
		id: 1,
		title: 'What is LQG?',
		text: 'text text text text text text text text text text'
	},
	{
		id: 2,
		title: 'Where are supplied tokens stored?',
		text: 'Supplied tokens are stored in publicly accessible smart contracts that enable overcollateralised borrowing according to governance-approved parameters. The LQG smart contracts have been audited and formally verified by third parties.'
	},
	{
		id: 3,
		title: 'Does Aave have risks?',
		text: 'text text text text text text text text text text'
	},
	{
		id: 4,
		title: 'How can I access LQG?',
		text: 'text text text text text text text text text text'
	}
]

export const LatestNewsData: ILatestNewsData[] = [
	{
		id: 1,
		title: 'LQG Puts Privacy & Security First',
		text: 'Peace of mind supported by multiple audits by the world’s leading security firms.',
		linkText: 'Learn More',
		link: '',
		image: NewCartImage1
	},
	{
		id: 2,
		title: 'LQG Puts Privacy & Security First',
		text: 'Peace of mind supported by multiple audits by the world’s leading security firms.',
		linkText: 'Learn More',
		link: '',
		image: NewCartImage2
	},
	{
		id: 3,
		title: 'LQG Puts Privacy & Security First',
		text: 'Peace of mind supported by multiple audits by the world’s leading security firms.',
		linkText: 'Learn More',
		link: '',
		image: NewCartImage3
	}
]

export const SocialMediaData: ISocialMediaData[] = [
	{
		id: 1,
		icon: <TwitterIcon customStyle='group-hover:fill-violet transition-all duration-300' />,
		link: '',
		linkText: 'Twitter / X'
	},
	{
		id: 2,
		icon: <TelegramIcon customStyle='group-hover:fill-violet transition-all duration-300' />,
		link: '',
		linkText: 'Telegram'
	},
	{
		id: 3,
		icon: <DiscordIcon customStyle='group-hover:fill-violet transition-all duration-300' />,
		link: '',
		linkText: 'Discord'
	},
]