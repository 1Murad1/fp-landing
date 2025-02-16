import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { AboutNewsData } from '@/mockData/mockData';
import AboutSliderNewCart from './AboutSliderNewCart';

export const AboutSliderNews = React.memo(() => {


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
				className="slider-new slider-about"
			>
				{AboutNewsData.map((slide) => (
					<SwiperSlide key={slide.id} className='h-auto'>
						<AboutSliderNewCart cartInfo={slide} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
});

AboutSliderNews.displayName = 'AboutSliderNews';
