import React from 'react'

import LeftProfile from './LeftProfile';
import { useRef,useState } from 'react'
const MyProfile = () => {
  
  const [img,setImg] =useState('');
  const Inputbox = useRef(null);
  const handleImgClick = () => {
Inputbox.current.click()
  }
  const handleImgChange = (e) =>{
    const file = e.target.files[0];
    console.log(file)
    setImg(file)
  }
  return (
    <div className='flex mt-9'>
      <LeftProfile/>
   <div className='flex w-5/6 justify-evenly'>
        
   <div  onClick={handleImgClick} className='flex flex-col items-center justify-center gap-4 cursor-pointer'>
  
  {
    img ?  ( <img src= {URL.createObjectURL(img)} alt="Loading" className='w-40 h-40 border-2 border-gray-300 rounded-full'/> ): (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNfR_96qUfSGBRAufz2OjqyzsPpAeqJ1OViA&s" alt="Loading" className='w-40 h-40 border-2 border-gray-300 rounded-full '/>)
    }
 <input type="file" ref={Inputbox} className='hidden' onChange={handleImgChange}/>
 <p className='text-xl'>username</p>
  </div>
  <div className='flex flex-col items-center justify-center gap-4 '>
    <p className='text-3xl'>Full Name</p>
    <p className='text-2xl'>Amit123@gmail.com</p>
  </div>
   </div>
     </div>
  )
}

export default MyProfile
