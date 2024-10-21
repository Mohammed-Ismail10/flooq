import React from 'react'
import { Modal } from "flowbite-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import mobiles from '../../../../../images/Group 1 (1) 1.png'
import ourWeb from '../../../../../images/Rectangle.png'
import Image from 'next/image.js';






export default function CarouselModal({ openModal, setOpenModal, activeSlide }) {
  return (
    <>
      <Modal className='[&>div>div]:rounded-[48px]' size='7xl' dismissible dir='ltr' show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className='border-none pr-8 [&>button]:text-[#EC2B2E] [&>button]:hover:text-[#EC2B2E] [&>button]:hover:bg-transparent [&>button>svg]:size-10'></Modal.Header>
        <Modal.Body>
          <Swiper dir='ltr' pagination={{ clickable: true }} modules={[Pagination]} initialSlide={activeSlide}
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
            <SwiperSlide>
              <div >
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
            <SwiperSlide>
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
            <SwiperSlide>
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
        </Modal.Body>

      </Modal>
    </>
  )
}
