import React from 'react'
import LeftProfile from './LeftProfile'
const Createpost = () => {
  return (
    <div className='flex mt-9'>
      <LeftProfile/>
      
      <div className='flex flex-col items-center justify-center w-5/6 gap-8'>

   <div className='flex justify-between gap-8'>
    <h2>Title :</h2>
    <input type="text" placeholder='Write your blog title here'className='p-1 border-2 border-gray-300 rounded-md outline-none w-60'/>
   </div>
<div  className='flex justify-around gap-8'>
 <h2>Images :</h2>
 <div className='flex gap-2'>
<input type="file" />
<input type="file" />
<input type="file" />
</div>
</div>
<div className='flex justify-around gap-8'>
  <h2>Description : </h2>
  <textarea name="" id="" cols="50" rows="3" className='outline-none '></textarea>
</div>
      </div>
      <div></div>
    </div>
  )
}

export default Createpost
