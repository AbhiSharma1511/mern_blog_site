import React from 'react'
import {MdDensityMedium, MdKeyboardArrowDown} from "react-icons/md";

const Navbar = () => {
  return (
    <div className=''>
        <div className='w-full h-auto bg-blue-300 flex justify-between items-center lg:px-20 p-1 rounded-b-xl md:px-15 pl-10'>
            <div className='text-blue-700 text-xl md:text-4xl py-2 font-serif font-semibold'>Page Of Wonder</div>
            <div className='w-4/12 hidden md:flex text-lg' >
                <ul className='w-full flex justify-around items-center'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/latest'>Latest</a></li>
                    <li><a href='/genre' className='flex items-center'>Genres<MdKeyboardArrowDown/></a></li>
                    <li><a href='/about'>About Us</a></li>
                </ul>
            </div>
            <div>
                <a href='/login' className='hidden md:flex border rounded-2xl bg-blue-600 px-3 py-1'>Login/SignUp</a>
            </div>
            <div className='md:hidden text-2xl pr-10'>
                <a href='/menu'><MdDensityMedium/></a>
            </div>
        </div>
    </div>
  )
}

{/* <a href='/home'>Home</a>
                <a href='/latest'>Latest</a>
                <a href='/genre' className='flex items-center'>Genre <MdKeyboardArrowDown/></a>
                <a href='about'>About Us</a> */}
export default Navbar