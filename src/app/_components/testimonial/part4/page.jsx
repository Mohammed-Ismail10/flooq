'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/free-mode';
import { Pagination } from 'swiper/modules';
import man from '../../../../images/Ellipse 70.png';
import Slide from './slide/page.jsx';

export default function TestimonialPart4() {
  const swiperRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [width, setWidth] = useState(0);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      const swiper = swiperRef.current;
      setIsAtStart(swiper.isBeginning);
      setIsAtEnd(swiper.isEnd);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);


  return (
    <>
      <div>
        <div className=' flex justify-end ml-[7.5%] gap-5 mb-14'>
          <button
            disabled={isAtStart}
            onClick={() => swiperRef.current?.slidePrev()}
            className={`${isAtStart ? 'bg-[#F4F4F4] text-[#D8D8D8]' : 'bg-[#F57568] text-white'} size-[50px] rounded-full  flex justify-center items-center`}>
            <IoIosArrowForward size={25} />
          </button>
          <button
            disabled={isAtEnd}
            onClick={() => swiperRef.current?.slideNext()}
            className={`${isAtEnd ? 'bg-[#F4F4F4] text-[#D8D8D8]' : 'bg-[#F57568] text-white'} size-[50px] rounded-full flex justify-center items-center`}>
            <IoIosArrowBack size={25} />
          </button>
        </div>

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            handleSlideChange();
          }}
          onSlideChange={handleSlideChange}
          slidesPerView={width < 960 ? 1.5 : 3.5}
          spaceBetween={70}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper 
          [&_.swiper-pagination]:flex 
          [&_.swiper-pagination]:justify-center 
          [&_.swiper-pagination]:gap-2 
          [&_.swiper-pagination]:mt-12  
          [&_.swiper-pagination-bullet]:size-2 
          [&_.swiper-pagination-bullet]:bg-[#D8D8D8] 
          [&_.swiper-pagination-bullet]:rounded-full 
          [&_.swiper-pagination-bullet]:cursor-pointer 
          [&_.swiper-pagination-bullet-active]:bg-[#27BBAD!important] "
        >

          <SwiperSlide className='pt-8'>
            <Slide image={man} altImage='سامي أحمد' comment='"العمل مع فريق البرمجة كان رائعًا. تمكنوا من تحويل فكرتي إلى موقع تفاعلي متميز."' name='سامي أحمد' job='طالب في علوم الحاسوب' rating={'5.0'} />
          </SwiperSlide>
          <SwiperSlide className='pt-8'>
            <Slide image={man} altImage='سامي أحمد' comment='"العمل مع فريق البرمجة كان رائعًا. تمكنوا من تحويل فكرتي إلى موقع تفاعلي متميز."' name='سامي أحمد' job='طالب في علوم الحاسوب' rating={'5.0'} />
          </SwiperSlide>
          <SwiperSlide className='pt-8'>
            <Slide image={man} altImage='سامي أحمد' comment='"العمل مع فريق البرمجة كان رائعًا. تمكنوا من تحويل فكرتي إلى موقع تفاعلي متميز."' name='سامي أحمد' job='طالب في علوم الحاسوب' rating={'5.0'} />
          </SwiperSlide>
          <SwiperSlide className='pt-8'>
            <Slide image={man} altImage='سامي أحمد' comment='"العمل مع فريق البرمجة كان رائعًا. تمكنوا من تحويل فكرتي إلى موقع تفاعلي متميز."' name='سامي أحمد' job='طالب في علوم الحاسوب' rating={'5.0'} />
          </SwiperSlide>
          <SwiperSlide className='pt-8'>
            <Slide image={man} altImage='سامي أحمد' comment='"العمل مع فريق البرمجة كان رائعًا. تمكنوا من تحويل فكرتي إلى موقع تفاعلي متميز."' name='سامي أحمد' job='طالب في علوم الحاسوب' rating={'5.0'} />
          </SwiperSlide>


        </Swiper>
      </div>
    </>
  );
}
