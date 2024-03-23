import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='w-full h-20 bg-black text-white flex justify-between items-center md:px-20 flex-row'>
        <div><h2>© 2023 Material Tailwind</h2></div>
        <div className='w-6/12 flex justify-around items-center'>
          <a href='/a'>License</a>
          <a href='/a'>Contribute</a>
          <a href='/contact'>Contact Us</a>
          <a href='/a'>License</a>
          <a href='/a'>Team</a>
        </div>
        {/* <div className='bg-slate-200 grid'>
          <a href='/a'>License</a>
          <a href='/a'>Contribute</a>
          <a href='/a'>Contact Us</a>
          <a href='/a'>License</a>
          <a href='/a'>Team</a>
        </div> */}
      </div>
    </div>
  )
}

export default Footer