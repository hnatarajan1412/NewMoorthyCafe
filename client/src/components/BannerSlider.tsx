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
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          }
        }}
        spaceBetween={0}
        className="py-0"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-[50vh] bg-center bg-cover relative"
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 border-r-2 border-[#FFB800]/50"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-[#FFB800] z-30"></div>
    </div>
  );
}