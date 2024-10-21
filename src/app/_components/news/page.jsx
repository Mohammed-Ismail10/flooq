import React from 'react'
import NewsPart1 from './part1/page.jsx'
import NewsPart2 from './part2/page.jsx'
import NewsPart3 from './part3/page.jsx'
import NewsPart4 from './part4/page.jsx'

export default function News() {
  return (
    <>
      <section className='bg-gradient-to-l from-[#27BBAD0A] py-36'>
        <div className="container mx-auto text-center">
          <NewsPart1 />
          <NewsPart2 />
          <NewsPart3 />
          <NewsPart4 />
        </div>
      </section>
    </>
  )
}
