import React from 'react'
import BlogContent from './(parts)/content/page.jsx'
import BlogSidebar from './(parts)/sidebar/page.jsx'

export default function Blog() {
  return (
    <>
      <section className='bg-gradient-to-r from-[#27BBAD0A] pt-2'>
        <div className="w-11/12 mx-auto">
          <div className="grid grid-cols-3 gap-4">

            <div className='col-span-2'>
              <BlogContent />
            </div>



            <div>
              <BlogSidebar />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
