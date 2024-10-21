'use client'
import Image from 'next/image.js'
import React from 'react'
import mobiles from '../../../../images/Group 1 (1) 1.png'
import ourWeb from '../../../../images/Rectangle.png'
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import CarouselModal from './modal/page.jsx'


export default function Carousell() {
  const [openModal, setOpenModal] = useState(false);
  const [activeSlide, setAtiveSlide] = useState(0);


  function handleSlideChange(index) {
    setAtiveSlide(index);
    setOpenModal(true);
  }




  return (
    <>
      <Swiper dir='ltr' pagination={{ clickable: true }} modules={[Pagination]}
        className="mySwiper 
      [&_.swiper-pagination]:flex 
      [&_.swiper-pagination]:justify-center 
      [&_.swiper-pagination]:gap-2 
      [&_.swiper-pagination-bullet]:size-3 
      [&_.swiper-pagination-bullet]:bg-white
      [&_.swiper-pagination-bullet]:border
      [&_.swiper-pagination-bullet]:border-[#27BBAD] 
      [&_.swiper-pagination-bullet]:rounded-full 
      [&_.swiper-pagination-bullet]:cursor-pointer 
      [&_.swiper-pagination-bullet-active]:bg-[#27BBAD!important]">
        <SwiperSlide onClick={() => handleSlideChange(0)}>
          <div>
            <div className='flex justify-center mb-7'>
              <Image src={mobiles} alt='Slide 1' />
            </div>
            <div>
              <p dir='rtl' className='text-center text-[#646464] leading-8 mb-14'>
                من اخر مشاريعنا تطبيق App Gyms الذي وصل لاكثر من مليون مستخدم
                <br />
                وحقق عائدات اكثر من 500 الف ريال سعودي
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={() => handleSlideChange(1)}>
          <div>
            <div className='flex justify-center mb-7'>
              <Image src={ourWeb} alt='Slide 2' />
            </div>
            <div>
              <p className='text-center text-[#646464] leading-8 mb-14'>
                الموقع الخاص بنا يضم اكثر من 1000 عميل حول العالم
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={() => handleSlideChange(2)}>
          <div>
            <div className='flex justify-center mb-7'>
              <Image src={mobiles} alt='Slide 1' />
            </div>
            <div>
              <p dir='rtl' className='text-center text-[#646464] leading-8 mb-14'>
                من اخر مشاريعنا تطبيق App Gyms الذي وصل لاكثر من مليون مستخدم
                <br />
                وحقق عائدات اكثر من 500 الف ريال سعودي
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>




      <CarouselModal openModal={openModal} setOpenModal={setOpenModal} activeSlide={activeSlide} />
    </>
  )
}




