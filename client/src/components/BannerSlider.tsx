// components/BannerSlider.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

export function BannerSlider({ images }: { images: string[] }) {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 16,
          }
        }}
        spaceBetween={16}
        className="py-8"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-48 md:h-64 bg-center bg-cover"
              style={{
                backgroundImage: `url(${src})`,
                clipPath: 'polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%)'
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}