import React from 'react'
import HeaderPart1 from './part1/page.jsx';
import HeaderPart2 from './part2/page.jsx';
import HeaderPart3 from './part3/page.jsx';
import HeaderPart4 from './part4/page.jsx';
import HeaderPart5 from './part5/page.jsx';
import Navbar from './navbar/page.jsx';
import Carousell from './carousel/page.jsx';



export default function Header() {
  return (
    <>
      <header className='bg-gradient-to-r from-[#27BBAD0A]'>
        {/* <Navbar /> */}
        <div className="container mx-auto py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            <div>
              <HeaderPart1 />
              <HeaderPart2 />
              <HeaderPart3 />
              <HeaderPart4 />
              <HeaderPart5 />
            </div>

            <div>
              <Carousell />
            </div>

          </div>
        </div>
      </header>
    </>
  )
}