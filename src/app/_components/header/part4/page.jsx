'use client'
import React, { useState } from 'react'
import MainButton from '../../button/page.jsx'
import RequestServerModal from './modal/page.jsx';

export default function HeaderPart4() {


  const [openModal, setOpenModal] = useState(false);


function handleModal(){
  setOpenModal(true);
}


  return (
    <>
      <div className='mb-12'>
        <MainButton click={() => handleModal()} text='طلب خدمة' style='bg-[#f57568] text-white py-4 px-8' />
        <MainButton text='خدماتنا' style={'text-[#f57578] mr-5 py-4 px-8 border border-[#f57578]'} />
      </div>

      <RequestServerModal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  )
}
