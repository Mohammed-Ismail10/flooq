import React from 'react'
import FooterPart1 from './part1/page.jsx'
import FooterPart2 from './part2/page.jsx'

export default function Footer() {
  return (
    <>
      <footer className='bg-[#27BBAD]'>
        <FooterPart1 />
        <FooterPart2 />
      </footer>
    </>
  )
}
