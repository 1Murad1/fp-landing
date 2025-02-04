import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { LatestNewsData } from '@/mockData/mockData';
import SliderNewCart from './SliderNewCart';

export const SliderNews = React.memo(() => {


	return (
		<div className={`swiper-container`}>
			<Swiper
				breakpoints={{
					320: { slidesPerView: 1.3 },
					640: { slidesPerView: 2 },
					1024: { slidesPerView: 3 },
					1440: { slidesPerView: 3 },
				}}
				spaceBetween={12}
				className="slider-new"
			>
				{LatestNewsData.map((slide) => (
					<SwiperSlide key={slide.id}>
						<SliderNewCart cartInfo={slide} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
});

SliderNews.displayName = 'DarkenedSwiper';
