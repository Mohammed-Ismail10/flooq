'use client'
import Image from 'next/image.js'
import React from 'react'
import logo from '../../../../images/Group 1693.png'
import { usePathname } from 'next/navigation.js';
import Link from 'next/link.js';
import MainButton from '../../button/page.jsx';

export default function Navbar() {

  const pathName = usePathname();



  return (
    <>
      <nav className='border-b py-4 bg-gradient-to-r from-[#27BBAD0A] '>
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <Image className='w-full' src={logo} alt='flooq logo' />
            </div>
            <div>
              <ul className='flex gap-12'>
                <li><Link className={`${pathName === '/' ? 'text-[#f57568]' : 'text-[#646464]'} hover:text-[#f57568] font-bold`} href='/'>الرئيسية</Link></li>
                <li><Link className='font-bold text-[#646464] hover:text-[#f57568]' href='/'>خدماتنا</Link></li>
                <li><Link className='font-bold text-[#646464] hover:text-[#f57568]' href='/'>عنا</Link></li>
                <li><Link className='font-bold text-[#646464] hover:text-[#f57568]' href='/'>اخر المشاريع</Link></li>
                <li><Link className={`${pathName === '/blog' ? 'text-[#f57568]' : 'text-[#646464]'} hover:text-[#f57568] font-bold`} href='/blog'>مدونة</Link></li>
                <li><Link className='font-bold text-[#646464] hover:text-[#f57568]' href='/'>تواصل معنا</Link></li>
              </ul>
            </div>
            <div>
              <MainButton text='طلب خدمة' style='text-[#f57568] border border-[#f57568] px-6 py-[18px]' />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
