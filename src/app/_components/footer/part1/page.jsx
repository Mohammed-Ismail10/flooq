import Image from 'next/image.js'
import React from 'react'
import logo from '../../../../images/Group 1693 (1).png'
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function FooterPart1() {
  return (
    <>
      <div className='border-b pt-14'>
        <div className="container mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-60 mb-10">
            <div className='lg:pr-16'>
              <div className='mb-4'>
                <Image src={logo} alt='flooq logo' />
              </div>
              <div>
                <p className='text-white font-bold leading-[30px]'>نحن نحب مساعدتك
                  <br />
                  في بناء المستقبل
                  <br />
                  بذكاء وابتكار</p>
              </div>
            </div>
            <div className='lg:pr-20'>
              <div className='mb-5'>
                <h5 className='text-white font-bold'>حول</h5>
              </div>
              <div>
                <ul>
                  <li className='text-[#F4F4F4] text-sm font-bold mb-6'>الخدمات</li>
                  <li className='text-[#F4F4F4] text-sm font-bold'>الاعمال</li>
                </ul>
              </div>
            </div>
            <div className=' lg:pr-0'>
              <div className='mb-5'>
                <h5 className='text-white font-bold'>تواصل</h5>
              </div>
              <div>
                <p className='text-[#F4F4F4] text-sm font-bold leading-6'>المملكة العربية السعودية</p>
                <p className='text-[#F4F4F4] text-sm font-bold leading-6'>جوال: 9666666666+</p>
                <p className='text-[#F4F4F4] text-sm font-bold leading-6'>جوال:96666666666</p>
              </div>
            </div>
          </div>



          <div className='flex justify-center gap-5 mb-5'>
            <div className='size-8 rounded-full bg-[#5bcbc1] flex justify-center items-center'>
              <FaYoutube color='#DADADA' />
            </div>
            <div className='size-8 rounded-full bg-[#5bcbc1] flex justify-center items-center'>
              <FaTwitter color='#DADADA' />
            </div>
            <div className='size-8 rounded-full bg-[#5bcbc1] flex justify-center items-center'>
              <FaInstagram color='#DADADA'/>
            </div>
            <div className='size-8 rounded-full bg-[#5bcbc1] flex justify-center items-center'>
              <FaFacebookF color='#DADADA' />
            </div>
          </div>






        </div>
      </div>
    </>
  )
}
