import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import pics from '../../assets/1.jpg'
import pic1 from '../../assets/2.jpg'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Education = () => {
  return (
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}
    speed={4000}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    <SwiperSlide><img src={pics} alt="" /></SwiperSlide>
    <SwiperSlide><img src={pic1} alt="" /></SwiperSlide>
    <SwiperSlide><img src={pics} alt="" /></SwiperSlide>
    <SwiperSlide><img src={pic1} alt="" /></SwiperSlide>
    ...
  </Swiper>
  )
}

export default Education