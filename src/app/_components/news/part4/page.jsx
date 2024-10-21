import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
export default function NewsPart4() {
  return (
    <>
      <div>
        <div className='w-full md:w-2/3 lg:w-2/5 mx-auto flex justify-between items-center bg-white rounded-[14px] p-2'>
          <div className='pr-4'>
            <MdOutlineEmail color='#969696' size={24}/>
          </div>
          <input className='w-full border-none placeholder:text-[#969696] focus:shadow-none' type="email" placeholder="ادخل بريدك الالكتروني" />
          <button className='bg-[#F57568] text-white px-10 py-4 rounded-[14px]'>اشتراك</button>
        </div>
      </div>
    </>
  )
}
