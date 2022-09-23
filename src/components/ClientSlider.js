import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper';

const ClientSlider = ({ clients }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      breakpoints={{
        // sm: '640px',
        // md: '768px',
        // lg: '1024px',
        // xl: '1170px',
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        1170: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='mySwiper'
    >
      {clients.map((client, index) => {
        // destructure clients
        const { message, image, name, position } = client;
        return (
          // slide
          <SwiperSlide key={index}>
            {/* card */}
            <div className='w-full mx-auto lg:max-w-[300px] xl:max-w-[350px] h-[250px] rounded-[12px] border-t-8 border-accent/10 bg-[#FFF8F5] p-6'>
              {/* message */}
              <div className='mb-6 text-[#B68167]/90'>{message}</div>
              {/* name, image & position */}
              <div className='flex gap-x-[10px]'>
                <img src={image} alt='' />
                <div>{name},</div>
                <div>{position}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ClientSlider;
