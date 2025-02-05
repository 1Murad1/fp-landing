import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import { useIsMobile } from '@/hooks/useMobile';
import { DarkenedSliderData } from '@/mockData/mockData';

interface IDarkenedSliderData {
	customStyle?: string;
}

export const DarkenedSwiper: React.FC<IDarkenedSliderData> = React.memo(({ customStyle }) => {
	const [middleIndex, setMiddleIndex] = useState(0);

	const isTablet = useIsMobile(1023);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const swiperRef = useRef<any>(null);

	useEffect(() => {
		const bullets = document.querySelectorAll('.darkened-swiper .swiper-pagination-bullet');
		const totalBullets = bullets.length;
		const calculatedMiddleIndex = Math.floor(totalBullets / 2);

		setMiddleIndex(calculatedMiddleIndex);

		if (swiperRef.current) {
			swiperRef.current.swiper.slideTo(calculatedMiddleIndex);
		}
	}, []);

	return (
		<div className={`swiper-container ${customStyle}`}>
			<Swiper
				data-aos="zoom-in"
				data-aos-delay="600"
				ref={swiperRef}
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={isTablet ? 1.3 : 1.7}
				initialSlide={middleIndex}
				autoplay={{
					delay: 20000,
					disableOnInteraction: false,
				}}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 100,
					modifier: 3.5,
					slideShadows: false,
				}}
				pagination={{
					clickable: true,
					dynamicBullets: true,
				}}
				modules={[EffectCoverflow, Pagination, Autoplay]}
				className="darkened-swiper"
			>
				{DarkenedSliderData.map((slide) => (
					<SwiperSlide key={slide.id}>
						<div className="darkened-slide animation-border rounded-[1.25rem] border-4 border-transparent transition-all duration-500">
							<div className="relative w-full h-full overflow-hidden rounded-[1.25rem]">
								<img
									src={slide.url}
									alt="slider image"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
});

DarkenedSwiper.displayName = 'DarkenedSwiper';
