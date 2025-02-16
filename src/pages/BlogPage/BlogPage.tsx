import React from 'react'
import { styles } from '@/styles/styles';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import { SubscribeUs } from '@/features/SubscribeUs/SubscribeUs';
import { SliderNews } from '@/features/BrowseOurLatestNews/SliderNews';
import { Button } from '@/ui/Button';
import BlogImage from '@/assets/blog-image.png'

export const BlogPage: React.FC = React.memo(() => (
	<div className='sm:pt-28 md:pt-52'>
		<div className={`${styles.container} flex justify-center`}>
			<div className='max-w-[54.75rem] w-full sm:mb-14 md:mb-40'>
				<Breadcrumbs />
				<h1 className={`${styles.titleH3} sm:mb-5 md:mb-10`}>Grass 101: What is Grass?</h1>
				<img className='w-full rounded-xl sm:mb-10 md:mb-20' src={BlogImage} alt="blog image" />
				<div className='flex flex-col sm:gap-y-5 md:gap-y-10'>
					<p className={`${styles.baseText} text-white`}>Before we get into Grass 101, let’s start with an analogy to understand what ‘unused internet’ means. Think of your home internet like a big highway with multiple lanes. Most of the time, many of those lanes are empty—this is your unused internet bandwidth, or what we call ‘unused internet’, for short. Grass acts like a digital tollbooth, an effortless way to earn rewards for sharing those unused lanes with verified institutions. So don’t worry, this has nothing to do with your personal data; it’s just your unused internet.</p>
					<h2 className='text-white text-3xl font-semibold'>What is Grass?</h2>
					<p className={`${styles.baseText} text-white`}>Grass rewards you for your unused internet.</p>
					<p className={`${styles.baseText} text-white`}>Our goal at Grass is to make the internet a place where everyone benefits — companies and users alike. It achieves this by allowing verified institutions and research institutions to reward you directly for supplying the bandwidth they need to enhance their products and services. Rest assured, your personal data is never shared.</p>
					<p className={`${styles.baseText} text-white`}>Installing Grass takes just a few clicks, and once installed, you will be rewarded in network ownership for contributing your unused internet to the Grass network.</p>
					<p className={`${styles.baseText} text-white`}>What makes Grass so important is that, for the first time ever, network ownership is in the hands of individual users like you. By building a user-owned network, Grass gives you real influence in the internet economy. This is a shift from existing tech giants, where users do not have direct ownership in the products they use.</p>
					<p className={`${styles.baseText} text-white`}>The Grass network makes it possible for companies to reward you for supplying the bandwidth they need to make better products and services. The tasks companies perform with your unused bandwidth might include checking local prices, viewing regional ads, or academic research. Unlike the existing software on your devices that automatically shares your bandwidth, Grass lets you pause sharing whenever you want.</p>
					<p className={`${styles.baseText} text-white`}>And don’t worry, Grass will never interrupt your Internet experience. If you’re wondering whether this is safe, the answer is yes. We wrote a whole blog about how seriously we take your security and privacy here.</p>
					<h2 className='text-white text-3xl font-semibold'>Why Should You Care?</h2>
					<p className={`${styles.baseText} text-white`}>Large corporations are already using your network without rewarding you.</p>
					<p className={`${styles.baseText} text-white`}>Did you know your internet bandwidth is being used by large corporations every day? Without you ever noticing, large companies use your idle internet to read information from public websites from your network’s perspective. Companies use your internet connection to access websites and gather information as if they were regular users, helping them check prices, monitor ads, and research content in different regions. It allows them to see websites the same way you would from your home.
					</p>
					<p className={`${styles.baseText} text-white`}>In the tech world, the product of allowing businesses to access the public web from the perspective of millions of internet connections such as yours is referred to as a “residential proxy network”.</p>
					<p className={`${styles.baseText} text-white`}>The catch? While corporations benefit from your network, you don’t see a dime.</p>
					<p className={`${styles.baseText} text-white`}>Most of us don’t read the Terms and Conditions for popular apps on our phones, computers, or Smart TVs, and companies take advantage of this by including specific language that allow them to use your devices "unused network resources." Companies profit from most of us not reading these long and boring legal documents. We believe that’s unfair.</p>
					<h2 className='text-white text-3xl font-semibold'>Why Didn’t a Solution like Grass Exist Sooner?</h2>
					<p className={`${styles.baseText} text-white`}>Two reasons: the technology is new, and large corporations had no way of building it.</p>
					<p className={`${styles.baseText} text-white`}>The Internet as we know it prioritizes the interests of large corporations over you, the everyday internet user.</p>
					<p className={`${styles.baseText} text-white`}>Large corporations are using our resources to make money, not because they’re bad, but because the technology that makes Grass possible didn’t exist when they started decades ago.</p>
					<p className={`${styles.baseText} text-white`}>And that’s exactly why Grass was created - to give users a way to benefit directly from the network and ensure the value of the Internet goes back to where it belongs: in your hands.</p>
				</div>

			</div>
		</div>
		<div>
			<div className={`${styles.container}`}>
				<div className='flex items-start justify-between gap-x-3 sm:mb-7 lg:mb-10'>
					<h3 data-aos="fade-right" data-aos-delay="500" className={`${styles.titleH3}`}>Featured</h3>
					<Button customStyle={`${styles.buttonStyleBase} sm:hidden xs:flex group px-6 py-4 flex items-center gap-x-3 whitespace-nowrap`} variant='primary' link={true} path={'/blogs'} type="button">View all articles <svg className='group-hover:rotate-45 group-hover:translate-x-1 transition-all' width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M8.6 1.5C8.6 1.16863 8.33137 0.9 8 0.9L2.6 0.9C2.26863 0.9 2 1.16863 2 1.5C2 1.83137 2.26863 2.1 2.6 2.1L7.4 2.1L7.4 6.9C7.4 7.23137 7.66863 7.5 8 7.5C8.33137 7.5 8.6 7.23137 8.6 6.9L8.6 1.5ZM1.42426 8.92426L8.42426 1.92426L7.57574 1.07574L0.575736 8.07574L1.42426 8.92426Z" fill="white" />
					</svg>
					</Button>
				</div>
				<SliderNews />
				<Button customStyle={`${styles.buttonStyleBase} mt-8 xs:hidden group px-6 py-4 flex items-center gap-x-3 whitespace-nowrap`} variant='primary' link={false} type="button">View all articles <svg className='group-hover:rotate-45 group-hover:translate-x-1 transition-all' width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M8.6 1.5C8.6 1.16863 8.33137 0.9 8 0.9L2.6 0.9C2.26863 0.9 2 1.16863 2 1.5C2 1.83137 2.26863 2.1 2.6 2.1L7.4 2.1L7.4 6.9C7.4 7.23137 7.66863 7.5 8 7.5C8.33137 7.5 8.6 7.23137 8.6 6.9L8.6 1.5ZM1.42426 8.92426L8.42426 1.92426L7.57574 1.07574L0.575736 8.07574L1.42426 8.92426Z" fill="white" />
				</svg>
				</Button>
			</div>
		</div>
		<SubscribeUs customStyle='sm:my-20 md:my-40' />
	</div>
))

BlogPage.displayName = 'BlogPage';