import React from 'react'
import { FiPhone } from "react-icons/fi";
export default function HeaderPart5() {
  return (
    <>
      <div className='flex gap-4'>
        <div>
          <div className='size-12 bg-[#EDFAF8] rounded-full flex justify-center items-center'>
            <FiPhone color='#27BBAD' />
          </div>
        </div>
        <div>
          <p className='text-[#27BBAD] font-bold text-sm'>تواصل معنا الان :</p>
          <p dir='ltr' className='text-[#969696] font-bold'>+96666666666</p>
        </div>
      </div>
    </>
  )
}
