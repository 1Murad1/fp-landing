import { useHoverGradient } from '@/hooks/useHoverGradient';
import { IBaseCartItem } from '@/types/types';
import { PropsWithChildren } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';



interface IAccordionDataProps<T extends IBaseCartItem> {
	customStyle?: string;
	containerStyle?: string;
	related?: boolean
	item: T;
}

const CartLink = <T extends IBaseCartItem>({
	customStyle,
	containerStyle,
	related,
	children,
	item
}: PropsWithChildren<IAccordionDataProps<T>>) => {
	const navigate = useNavigate()
	const location = useLocation();
	const pathnames = location.pathname.split('/').filter((x) => x);

	const urlWithoutLast = `/${pathnames.slice(0, -1).join('/')}/${item.link}`;

	const { cardRef, isHovered, handleMouseMove, handleMouseEnter, handleMouseLeave, gradientStyle, mousePosition } = useHoverGradient({
		defaultGradient:
			'linear-gradient(#090909, #090909) padding-box, radial-gradient(42.82% 77.08% at 50% 29.17%, #A972B3 0%, #2F0F35 27.5%, #111111 100%) border-box',
		hoverGradient:
			'radial-gradient(circle at 50% 50%, rgba(169, 114, 179, 0.8) 0%, rgba(47, 15, 53, 0.4) 30%, transparent 70%)',
	})
	return (
		<div className={`relative ${containerStyle}`}>
			<div
				className={`absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}
				style={{
					background: `radial-gradient(circle at ${mousePosition.x} ${mousePosition.y}, #BE55D1 0%, #090909 30%, transparent 70%)`,
				}}
			/>
			<div onClick={() => related ? navigate(urlWithoutLast) : navigate(item.link)} ref={cardRef}
				onMouseMove={handleMouseMove}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave} style={gradientStyle} data-aos='flip-left' data-aos-delay={`${300 + item.id * 100}`} key={item.id} className={`security-cart-border cursor-pointer ${item.id === 1 && 'security-cart-border1'} ${item.id === 2 && 'security-cart-border2'} ${item.id === 3 && 'security-cart-border3'} ${customStyle} sm:p-7 lg:p-10 rounded-2xl border-2 border-transparent h-full flex flex-col gap-4`}>
				{children}
			</div>
		</div>
	)
}

export default CartLink