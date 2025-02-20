import { IAboutNewsData, IAccordionData, IArticlesCartItem, IArticlesPageData, IAuditorsData, IBlogCartData, IDarkenedSliderData, IFaqCategoryData, IGrowWithUsData, IGuidesCartItem, ILatestNewsData, ILiquidityCartData, IMarqueeData, ISafetySecurityData, ISidebarData, ISocialMediaData, ISupportCartItem, ITechnicalHighlightsData } from '../types/types'
import SlideImageDesktop1 from '../assets/mainSlider/slideImageDesktop1.png'
import SlideImageDesktop2 from '../assets/mainSlider/slideImageDesktop2.png'
import SlideImageDesktop3 from '../assets/mainSlider/slideImageDesktop3.png'
import SlideImageDesktop4 from '../assets/mainSlider/slideImageDesktop4.png'
import SlideImageMobile1 from '../assets/mainSlider/slideImageMobile1.png'
import SlideImageMobile2 from '../assets/mainSlider/slideImageMobile2.png'
import SlideImageMobile3 from '../assets/mainSlider/slideImageMobile3.png'
import SlideImageMobile4 from '../assets/mainSlider/slideImageMobile4.png'
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
import NewCartImage4 from '../assets/newCartImage4.png'
import NewCartImage5 from '../assets/newCartImage5.png'
import NewCartImage6 from '../assets/newCartImage6.png'
import TwitterIcon from '@/components/svg/TwitterIcon'
import TelegramIcon from '@/components/svg/TelegramIcon'
import MediumIcon from '@/components/svg/MediumIcon'
import CertoraIcon from '@/components/svg/CertoraIcon'
import SpearbitIcon from '@/components/svg/SpearbitIcon'
import ForbesIcon from '../assets/icons/forbes.svg'
import DigitalIcon from '../assets/icons/digital.svg'
import DecryptIcon from '../assets/icons/decrypt.svg'
import MoneyIcon from '@/components/svg/MoneyIcon'
import CardTransferIcon from '@/components/svg/CardTransferIcon'
import LikeIcon from '@/components/svg/LikeIcon'
import SecurityIcon from '@/components/svg/SecurityIcon'
import ProgrammingIcon from '@/components/svg/ProgrammingIcon'


export const DarkenedSliderData: IDarkenedSliderData[] = [
	{
		id: 1,
		imageDesktop: SlideImageDesktop1,
		imageMobile: SlideImageMobile1,
		tabTitle: 'Dashboard',
		tabText: 'Monitor your dApps performance, health, and behavior.'
	},
	{
		id: 2,
		imageDesktop: SlideImageDesktop2,
		imageMobile: SlideImageMobile2,
		tabTitle: 'Add liquidity',
		tabText: 'Add liquidity to your favorite pairs that you’re confident’ll grow'
	},
	{
		id: 3,
		imageDesktop: SlideImageDesktop3,
		imageMobile: SlideImageMobile3,
		tabTitle: 'Claim',
		tabText: 'Receive and collect rewards for staking your assets.'
	},
	{
		id: 4,
		imageDesktop: SlideImageDesktop4,
		imageMobile: SlideImageMobile4,
		tabTitle: 'Transaction',
		tabText: 'View your dApp’s transactions in real-time to identify statuses.'
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

export const BlogsData: IBlogCartData[] = [
	{
		id: 1,
		title: 'LQG Puts Privacy & Security First',
		text: 'Peace of mind supported by multiple audits by the world’s leading security firms.',
		linkText: 'Learn More',
		link: 'blog1',
		date: 'October 14, 2024',
		image: NewCartImage1
	},
	{
		id: 2,
		title: 'LQG Puts Privacy & Security First',
		text: 'Peace of mind supported by multiple audits by the world’s leading security firms.',
		linkText: 'Learn More',
		link: 'blog2',
		date: 'October 14, 2024',
		image: NewCartImage2
	},
	{
		id: 3,
		title: 'LQG Puts Privacy & Security First',
		text: 'Peace of mind supported by multiple audits by the world’s leading security firms.',
		linkText: 'Learn More',
		link: 'blog3',
		date: 'October 14, 2024',
		image: NewCartImage3
	},
	{
		id: 4,
		title: 'LQG Puts Privacy & Security First',
		text: 'Peace of mind supported by multiple audits by the world’s leading security firms.',
		linkText: 'Learn More',
		link: 'blog4',
		date: 'October 14, 2024',
		image: NewCartImage4
	},
	{
		id: 5,
		title: 'LQG Puts Privacy & Security First',
		text: 'Peace of mind supported by multiple audits by the world’s leading security firms.',
		linkText: 'Learn More',
		link: 'blog5',
		date: 'October 14, 2024',
		image: NewCartImage5
	},
	{
		id: 6,
		title: 'LQG Puts Privacy & Security First',
		text: 'Peace of mind supported by multiple audits by the world’s leading security firms.',
		linkText: 'Learn More',
		link: 'blog6',
		date: 'October 14, 2024',
		image: NewCartImage6
	}
]

export const AboutNewsData: IAboutNewsData[] = [
	{
		id: 1,
		title: 'Gamified Campaigns',
		text: 'Forbes Dives Into Web3',
		linkText: 'Learn More',
		link: '',
		image: ForbesIcon
	},
	{
		id: 2,
		title: 'Web3 AI',
		text: 'LQG Joins Growing List of Crypto Startups Pivoting',
		linkText: 'Learn More',
		link: '',
		image: DecryptIcon
	},
	{
		id: 3,
		title: 'Digital Identity',
		text: 'In the Next Bull Run, Web3 Digital Identity and Reputation are Everything',
		linkText: 'Learn More',
		link: '',
		image: DigitalIcon
	},
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
		icon: <MediumIcon customStyle='group-hover:fill-violet transition-all duration-300' />,
		link: '',
		linkText: 'Medium'
	},
]


export const sidebarFaqData: ISidebarData[] = [
	{
		id: 1,
		title: 'General',
		anchor: '#general'
	},
	{
		id: 2,
		title: 'Risk',
		anchor: '#risk'
	},
	{
		id: 3,
		title: 'Supplying & Earning',
		anchor: '#supplying'
	},
	{
		id: 4,
		title: 'Liquidations',
		anchor: '#liquidations'
	},
	{
		id: 5,
		title: 'Safety Module',
		anchor: '#safety-module'
	},
	{
		id: 6,
		title: 'Developers',
		anchor: '#developers'
	},
	{
		id: 7,
		title: 'Brand',
		anchor: '#brand'
	}
]

export const sidebarGuideData: ISidebarData[] = [
	{
		id: 1,
		title: 'Introduction',
		anchor: '#introduction'
	},
	{
		id: 2,
		title: 'Step 1: Connect Wallet',
		anchor: '#step-1-connect-wallet'
	},
	{
		id: 3,
		title: 'Step 2: Navigate to "Your Supplies"',
		anchor: '#step-2-navigate-to-your-supplies'
	},
	{
		id: 4,
		title: 'Step 3: Select Token to Withdraw',
		anchor: '#step-3-select-token-to-withdraw'
	},
	{
		id: 5,
		title: 'Step 4: Confirm Withdrawal',
		anchor: '#step-4-confirm-withdrawal'
	},
	{
		id: 6,
		title: 'Step 5: Handling Collateralised Tokens',
		anchor: '#step-5-handling-collateralised-tokens'
	},
	{
		id: 7,
		title: 'Step 6: Withdrawing and Switching Tokens',
		anchor: '#step-6-withdrawing-and-switching-tokens'
	}
]

export const articlesPageData: IArticlesPageData[] = [
	{
		id: 1,
		idSection: 'introduction',
		title: 'Introduction',
		text: 'Withdrawing tokens from the Aave Protocol transfers underlying supplied assets along with any accrued interest, provided there is sufficient liquidity in the pool. This means suppliers can withdraw up to the amount available in the pool that is not currently borrowed. The process varies slightly depending on the type of token and the withdrawal method, and can be performed through protocl smart contracts or a frontend such as the Aave Labs interface.'
	},
	{
		id: 2,
		idSection: 'step-1-connect-wallet',
		title: 'Step 1: Connect Wallet',
		text: 'To begin, press ‘Connect Wallet’ and select the Ethereum wallet provider corresponding to the wallet where the tokens are supplied.'
	},
	{
		id: 3,
		idSection: 'step-2-navigate-to-your-supplies',
		title: 'Step 2: Navigate to "Your Supplies"',
		text: 'Once connected, navigate to the ‘Dashboard’ and locate the ‘Your Supplies’ section. This table displays all tokens you have supplied to the Aave Protocol.'
	},
	{
		id: 4,
		idSection: 'step-3-select-token-to-withdraw',
		title: 'Step 3: Select Token to Withdraw',
		text: 'Choose the token you wish to withdraw from the list. Verify that there is enough available liquidity in the pool to support your withdrawal. If the token is not being used as collateral for an active borrow position, you can proceed to withdraw the desired amount.'
	},
	{
		id: 5,
		idSection: 'step-4-confirm-withdrawal',
		title: 'Step 4: Confirm Withdrawal',
		text: 'Enter the amount you want to withdraw and confirm the transaction in your wallet. If you are withdrawing the same underlying token that you supplied (e.g., WETH to WETH), no additional approval transaction is needed. However, if you’re withdrawing to a network base token, such as ETH, the Aave Protocol stores these as wrapped tokens (e.g., WETH). In this case, the withdrawal process involves the WrappedTokenGateway contract, where the WETH is unwrapped and withdrawn in a single transaction.'
	},
	{
		id: 6,
		idSection: 'step-5-handling-collateralised-tokens',
		title: 'Step 5: Handling Collateralised Tokens',
		text: 'If your supplied tokens are used as collateral, you may need to repay part of your borrow position or supply additional collateral to maintain a healthy balance before you can withdraw. Regularly monitoring your health factor will help you manage this effectively.'
	},
	{
		id: 7,
		idSection: 'step-6-withdrawing-and-switching-tokens',
		title: 'Step 6: Withdrawing and Switching Tokens',
		text: 'The Aave Labs interface also offers a feature to withdraw and switch to a different token in one action. This requires token approval for both the withdrawal and the switch. Ensure you review the necessary approvals in your wallet before proceeding.'
	}
]

export const faqPageData: IFaqCategoryData[] = [
	{
		id: 'general',
		title: 'General',
		accordionData: [
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
				title: 'How do I interact with LQG?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 4,
				title: 'Do I need a wallet to interact with LQG?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 5,
				title: 'What is the cost of interacting with LQG?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 6,
				title: 'How can I access LQG?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 7,
				title: 'Can funds be frozen?',
				text: 'text text text text text text text text text text'
			}
		]
	},
	{
		id: 'risk',
		title: 'Risk',
		accordionData: [
			{
				id: 1,
				title: 'What are the risks involved in using LQG?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 2,
				title: 'What steps are taken to mitigate risks?',
				text: 'text text text text text text text text text text'
			},
		]
	},
	{
		id: 'supplying',
		title: 'Supplying & Earning',
		accordionData: [
			{
				id: 1,
				title: 'How do I supply?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 2,
				title: 'How much can I earn?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 3,
				title: 'Are there limitations to supply?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 4,
				title: 'Where are supplied tokens stored?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 5,
				title: 'How do I withdraw?',
				text: 'text text text text text text text text text text'
			}
		]
	},
	{
		id: 'liquidations',
		title: 'Liquidations',
		accordionData: [
			{
				id: 1,
				title: 'What is Health Factor?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 2,
				title: 'What happens when my health factor is reduced?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 3,
				title: 'What are liquidations?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 4,
				title: 'How much is the liquidation penalty?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 5,
				title: 'Can you give an example?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 6,
				title: 'What is a good Health Factor?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 7,
				title: 'What is my liquidation price?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 8,
				title: 'How can I avoid getting liquidated?',
				text: 'text text text text text text text text text text'
			},
		]
	},
	{
		id: 'safety-module',
		title: 'Safety Module',
		accordionData: [
			{
				id: 1,
				title: 'What is the Safety Module?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 2,
				title: 'What is staking?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 3,
				title: 'What is the risk of staking?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 4,
				title: 'What is the incentive for staking?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 5,
				title: 'How do I start staking?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 6,
				title: 'How do I stop staking?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 7,
				title: 'What is the cooldown period?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 8,
				title: 'How do I claim my rewards?',
				text: 'text text text text text text text text text text'
			}
		]
	},
	{
		id: 'developers',
		title: 'Developers',
		accordionData: [
			{
				id: 1,
				title: 'How do I integrate LQG functionality?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 2,
				title: 'How do I query LQG data?',
				text: 'text text text text text text text text text text'
			}
		]
	},
	{
		id: 'brand',
		title: 'Brand',
		accordionData: [
			{
				id: 1,
				title: 'How do I use the logo?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 2,
				title: 'Can I use Aave brand elements for my own project?',
				text: 'text text text text text text text text text text'
			},
			{
				id: 3,
				title: 'Can I create my own assets using the LQG brand elements?',
				text: 'text text text text text text text text text text'
			},
		]
	}
]

export const supportCartsData: ISupportCartItem[] = [
	{
		id: 1,
		title: 'FAQs',
		text: 'View answers to frequently asked questions.',
		linkText: 'Learn More',
		link: ''
	},
	{
		id: 2,
		title: 'Developer Docs',
		text: 'Start building on LQG with our comprehensive developer docs.',
		linkText: 'Learn More',
		link: ''
	},
	{
		id: 3,
		title: 'Contact Us',
		text: 'Get help from the LQG Labs team on specific questions.',
		linkText: 'Learn More',
		link: ''
	}
]

export const guidesCartsData: IGuidesCartItem[] = [
	{
		id: 1,
		title: 'Supplying',
		text: 'Supply liquidity to earn and collateralise.',
		link: 'supplying',
		icon: <MoneyIcon />
	},
	{
		id: 2,
		title: 'Borrowing',
		text: 'Open overcollateralised borrow positions.',
		link: 'borrowing',
		icon: <CardTransferIcon />
	},
	{
		id: 3,
		title: 'Legal',
		text: 'Community-driven legal.',
		link: 'legal',
		icon: <LikeIcon />
	},
	{
		id: 4,
		title: 'Safety Module',
		text: 'Securing the Aave Protocol.',
		link: 'safety-module',
		icon: <SecurityIcon />
	},
	{
		id: 5,
		title: 'Web3',
		text: 'Blockchain basics.',
		link: 'web3',
		icon: <ProgrammingIcon />
	}
]

export const articlesCartsData: IArticlesCartItem[] = [
	{
		id: 1,
		title: 'Supply Tokens',
		text: 'Supply tokens to the Aave Protocol. 4 min read',
		link: 'supply-tokens',
	},
	{
		id: 2,
		title: 'Withdraw Tokens',
		text: 'Withdraw tokens from the Aave Protocol. 4 min read',
		link: 'withdraw-tokens',
	},
	{
		id: 3,
		title: 'Toggle Collateral Status',
		text: 'Toggle collateral status of supply positions. 3 min read',
		link: 'toggle-collateral-status',
	},
	{
		id: 4,
		title: 'Isolation Mode',
		text: 'Supply isolated collateral assets. 3 min read',
		link: 'isolation-mode',
	}
]