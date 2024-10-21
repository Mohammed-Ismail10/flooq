'use client'
import { Modal } from 'flowbite-react'
import React, { useState } from 'react'
import { Select, Option } from "@material-tailwind/react";
import SuccessModal from '../successModal/page.jsx';

export default function RequestServerModal({ openModal, setOpenModal }) {


  const [openModal1, setOpenModal1] = useState(false);



  return (
    <>
      <Modal className='[&>div>div]:rounded-[48px]' dir='ltr' size='7xl' dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header
          className='[&>h3]:flex-grow text-center border-none [&>h3]:text-[#27BBAD] [&>h3]:font-bold [&>h3]:text-4xl pr-8 [&>button]:text-[#EC2B2E] [&>button]:hover:text-[#EC2B2E] [&>button]:hover:bg-transparent [&>button>svg]:size-10'>
          طلب خدمة
        </Modal.Header>
        <Modal.Body className='pl-16 pr-10' dir='rtl'>
          <form onSubmit={(event) => { event.preventDefault(); setOpenModal(false); }}>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-x-60 mb-20'>

              <div>
                <label className='text-[#344153] text-xs font-bold' htmlFor="selectService">اختر خدمة</label>
                <Select
                  className='[&>div]:right-[unset] [&>div]:-left-10 text-left [&>div]:bg-lime-30 [&>div]:size-10 [&>div]:border rounded-tl-none rounded-bl-none border-[#27BBAD] border-2 bg-[#F9FAFB] [&>div]:rounded py-3 px-2 [&+label]:hidden [&>span]:left-auto [&>span]:right-3 [&>span]:text-[#9AA3B0]' id='selectService'>
                  <Option>برمجة تطبيقات</Option>
                </Select>
              </div>

              <div>
                <label className='text-[#344153] text-xs font-bold' htmlFor="selectCategory">اختر الفئة</label>
                <Select
                  className='[&>div]:right-[unset] [&>div]:-left-10 text-left [&>div]:bg-lime-30 [&>div]:size-10 [&>div]:border rounded-tl-none rounded-bl-none border-[#27BBAD] border-2 bg-[#F9FAFB] [&>div]:rounded py-3 px-2 [&+label]:hidden [&>span]:left-auto [&>span]:right-3 [&>span]:text-[#9AA3B0]' id='selectCategory'>
                  <Option>تطبيق مطعم</Option>
                </Select>
              </div>

              <div>
                <label className='text-[#344153] text-xs font-bold' htmlFor="sizeProject">ماهو حجم عملك</label>
                <Select
                  className='[&>div]:right-[unset] [&>div]:-left-10 text-left [&>div]:bg-lime-30 [&>div]:size-10 [&>div]:border rounded-tl-none rounded-bl-none border-[#27BBAD] border-2 bg-[#F9FAFB] [&>div]:rounded py-3 px-2 [&+label]:hidden [&>span]:left-auto [&>span]:right-3 [&>span]:text-[#9AA3B0]' id='sizeProject'>
                  <Option>شركة</Option>
                </Select>
              </div>

              <div>
                <label className='text-[#344153] text-xs font-bold' htmlFor="way">طريقة انجاز محددة</label>
                <Select
                  className='[&>div]:right-[unset] [&>div]:-left-10 text-left [&>div]:bg-lime-30 [&>div]:size-10 [&>div]:border rounded-tl-none rounded-bl-none border-[#27BBAD] border-2 bg-[#F9FAFB] [&>div]:rounded py-3 px-2 [&+label]:hidden [&>span]:left-auto [&>span]:right-3 [&>span]:text-[#9AA3B0]' id='way'>
                  <Option>لغة برمجة Flutter</Option>
                </Select>
              </div>

              <div>
                <label className='text-[#344153] text-xs font-bold' htmlFor="link">رابط عمل مشابه <span className='text-[8px] text-[#9AA3B0]'>(اختياري)</span></label>
                <div className=' relative'>
                  <input className='bg-[#F9FAFB] w-[calc(100%-29px)] border-2 border-[#27BBAD] rounded-tr-lg rounded-br-lg py-3 px-2 focus:shadow-none focus:border-[#27BBAD]' type="text" id='link' />
                  <span dir='ltr' className='bg-white text-[#344153] font-semibold text-sm absolute p-3 pl-2 -left-10 top-0 bottom-0 flex items-center border border-[#27BBAD] rounded-tl-lg rounded-bl-lg'>https:// </span>
                </div>
              </div>

              <div>
                <label className='text-[#344153] text-xs font-bold' htmlFor="projectName">اسم العمل</label>
                <input className='w-full bg-[#F9FAFB] border-2 border-[#27BBAD] rounded-lg py-3 px-2 focus:shadow-none focus:border-[#27BBAD] text-[#9AA3B0] text-sm' type="text" id='projectName' />
              </div>

              <div>
                <label className='text-[#344153] text-xs font-bold' htmlFor="email">البريد</label>
                <input className='w-full bg-[#F9FAFB] border-2 border-[#27BBAD] rounded-lg py-3 px-2 focus:shadow-none focus:border-[#27BBAD] text-[#9AA3B0] text-sm placeholder:text-[#9AA3B0] placeholder:text-sm' type="email" id='email' placeholder='ادخل بريدك الالكتروني للمراجعة' />
              </div>

              <div>
                <label className='text-[#344153] text-xs font-bold' htmlFor="details">تفاصيل العمل</label>
                <input className='w-full bg-[#F9FAFB] border-2 border-[#27BBAD] rounded-lg py-3 px-2 focus:shadow-none focus:border-[#27BBAD] text-[#9AA3B0] text-sm' type="text" id='details' />
              </div>

            </div>


            <div className='text-center'>
              <button onClick={() => setOpenModal1(true)} className='py-4 px-8 bg-[#F57568] text-white rounded-3xl font-bold leading-7'>ارسال</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>




      <SuccessModal openModal1={openModal1} setOpenModal1={setOpenModal1} />



    </>
  )
}
