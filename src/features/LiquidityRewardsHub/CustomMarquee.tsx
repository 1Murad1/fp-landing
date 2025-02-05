import Marquee from "react-fast-marquee";
import MarqueeComponent from './MarqueeComponent';
import { BreakpointConfig } from "@/types/types";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { MarqueeData } from "@/mockData/mockData";

interface CustomMarqueeProps {
	customStyle?: string
	breakpoints?: BreakpointConfig;
}
const DEFAULT_BREAKPOINTS: BreakpointConfig = {
	mobile: { width: 500, gradientWidth: 100 },
	tablet: { width: 1023, gradientWidth: 200 },
	desktop: { width: Infinity, gradientWidth: 500 }
};
const CustomMarquee: React.FC<CustomMarqueeProps> = ({ customStyle, breakpoints = DEFAULT_BREAKPOINTS }) => {
	const gradientWidth = useBreakpoint(breakpoints);
	return (
		<div className={`${customStyle}`}>
			<Marquee autoFill gradient={true} speed={50} pauseOnHover={true} gradientColor="#000" gradientWidth={gradientWidth} >
				{
					MarqueeData?.map((item) => (
						<MarqueeComponent key={item.id} item={item} />
					))
				}
			</Marquee>
		</div>
	)
}

export default CustomMarquee
