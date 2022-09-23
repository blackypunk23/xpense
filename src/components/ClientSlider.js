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
      slidesPerView={4}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='mySwiper'
    >
      {clients.map((client, index) => {
        return (
          <SwiperSlide>
            <div className='w-[350px] bg-red-100'>{client.name}</div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ClientSlider;
