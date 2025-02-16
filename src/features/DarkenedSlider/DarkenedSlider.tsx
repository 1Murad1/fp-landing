import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import { useIsMobile } from '@/hooks/useMobile';
import { DarkenedSliderData } from '@/mockData/mockData';
import { styles } from '@/styles/styles';
import TabCart from './TabCart';

interface IDarkenedSliderData {
	customStyle?: string;
}

export const DarkenedSwiper: React.FC<IDarkenedSliderData> = React.memo(({ customStyle }) => {
	const [middleIndex] = useState(0);
	const [activeTab, setActiveTab] = useState(0);
	const swiperRef = useRef<any>(null);
	const tabsSwiperRef = useRef<any>(null);
	const isMobile = useIsMobile(549);

	// useEffect(() => {
	// 	const bullets = document.querySelectorAll('.darkened-swiper .swiper-pagination-bullet');
	// 	const totalBullets = bullets.length;
	// 	const calculatedMiddleIndex = Math.floor(totalBullets / 2);

	// 	setMiddleIndex(calculatedMiddleIndex);

	// 	if (swiperRef.current) {
	// 		swiperRef.current.swiper.slideTo(calculatedMiddleIndex);
	// 	}
	// }, []);

	const handleTabClick = (index: number) => {
		setActiveTab(index);
		if (swiperRef.current) {
			swiperRef.current.swiper.slideTo(index);
		}
	};

	const handleSlideChange = () => {
		if (swiperRef.current) {
			setActiveTab(swiperRef.current.swiper.activeIndex);
		}
	};

	const handleTabsSlideChange = () => {
		if (tabsSwiperRef.current) {
			const newIndex = tabsSwiperRef.current.swiper.activeIndex;
			setActiveTab(newIndex);
			if (swiperRef.current) {
				swiperRef.current.swiper.slideTo(newIndex);
			}
		}
	};

	return (
		<div className={`swiper-container ${customStyle}`}>
			<div className={`${styles.container}`}>
				{/* Swipeable Tabs */}
				<div className={`flex justify-center mb-8`}>
					<Swiper
						ref={tabsSwiperRef}
						breakpoints={{
							320: { slidesPerView: 1.7 },
							640: { slidesPerView: 2 },
							1024: { slidesPerView: 3 },
							1440: { slidesPerView: 4 },
						}}
						spaceBetween={12}
						className="tabs-swiper w-full"
						onSlideChange={handleTabsSlideChange}
						slideToClickedSlide={true}
						preventClicksPropagation={true}
						watchSlidesProgress={true}
					>
						{DarkenedSliderData.map((tab, index) => (
							<SwiperSlide key={`tab-${tab.id}`} className="">
								<TabCart tab={tab} index={index} activeTab={activeTab} handleTabClick={handleTabClick} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				{/* Slider */}
				<Swiper
					data-aos="zoom-in"
					data-aos-delay="0"
					ref={swiperRef}
					effect={'coverflow'}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={isMobile ? 1.3 : 1}
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
					onSlideChange={handleSlideChange}
				>
					{DarkenedSliderData.map((slide) => (
						<SwiperSlide key={slide.id}>
							<div className="darkened-slide animation-border rounded-[1.25rem] border-4 border-transparent transition-all duration-500">
								<div className="relative w-full h-full overflow-hidden rounded-[1.25rem]">
									<img
										src={isMobile ? slide.imageMobile : slide.imageDesktop}
										alt="slider image"
										className="w-full h-full object-cover"
									/>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>


		</div>
	);
});

DarkenedSwiper.displayName = 'DarkenedSwiper';