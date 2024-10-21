import React from 'react'
import ArticlesPart1 from './part1/page.jsx'
import ArticlesPart2 from './part2/page.jsx'
import ArticlesPart3 from './part3/page.jsx'
import ArticlesPart4 from './part4/page.jsx'
import ArticlesPart5 from './part5/page.jsx'

export default function Articles() {
  return (
    <>
      <section className='bg-gradient-to-l from-[#27BBAD0A] pt-36'>
        <div className="container mx-auto">
          <ArticlesPart1 />
          <ArticlesPart2 />
          <ArticlesPart3 />
          <ArticlesPart4 />
          <ArticlesPart5 />
        </div>
      </section>
    </>
  )
}
