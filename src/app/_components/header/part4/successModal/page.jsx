import { Modal } from 'flowbite-react'
import React from 'react'
import { FaCheck } from "react-icons/fa6";

export default function SuccessModal({ openModal1, setOpenModal1 }) {


  return (
    <>
      <Modal dir='ltr' className='[&>div>div]:rounded-[48px]' size='7xl' dismissible show={openModal1} onClose={() => setOpenModal1(false)}>
        <Modal.Header
          className='[&>h3]:flex-grow text-center border-none [&>h3]:text-[#12B76A] [&>h3]:text-4xl pr-8 [&>button]:text-[#EC2B2E] [&>button]:hover:text-[#EC2B2E] [&>button]:hover:bg-transparent [&>button>svg]:size-10 mb-14'>
          نجح الارسال
        </Modal.Header>
        <Modal.Body className='flex justify-center' dir='rtl'>
          <div className='text-center flex flex-col items-center'>
            <div className='size-[200px] bg-[#DCFFEF] rounded-full flex justify-center items-center mb-16'>
              <FaCheck size={93.3} color='#12B76A' />
            </div>
            <div className='mb-20'>
              <p className='text-[#646464] leading-8'>تم ارسال طلبك سوف نقوم بالرد باقرب وقت على بريدك الالكتروني</p>
            </div>
            <div>
              <button onClick={() => setOpenModal1(false)} className='py-4 px-8 bg-[#12B76A] text-white rounded-3xl'>موافق</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
