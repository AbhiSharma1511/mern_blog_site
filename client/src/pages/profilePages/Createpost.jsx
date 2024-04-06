import React from 'react'
import LeftProfile from './LeftProfile'
const Createpost = () => {
  return (
    <div className='flex mt-9'>
      <LeftProfile/>
      
      {/* <div className='flex flex-col items-center justify-center w-5/6 gap-8'>

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
      <div></div> */}


<div className='grid grid-cols-8 gap-20 mt-10 w-5/6'>
        <div></div>
        <div className='col-span-4'>
            <input type='text' placeholder='Title' className='w-full pl-1 mb-4 text-lg border-2 rounded border-slate-400'/>
            <div className=''>
                <ReactQuill theme="snow" value={value} onChange={setValue} className='overflow-scroll border-2  border-slate-400 h-96'/>
            </div>
        </div>
        <div className='col-span-2'>
            <div className='flex flex-col justify-between gap-2 p-2 border-2 border-slate-200'>
                <h1 className='text-xl font-bold'>Publish</h1>
                <span className='pr-4'>
                    <b>Status:</b> Draft
                </span>
                <span>
                    <b>Visibility:</b> Public
                </span>
                <label htmlFor='file' className='font-bold '>Upload Image:</label>
                <input placeholder='Choose File' type='file' id='file' name=''/>
                <div className='flex justify-between mt-2'>
                    <button className='px-2 mr-1 text-black border-2 border-blue-500 rounded hover:bg-green-400'>Save as a draft</button>
                    <button className='px-2 text-white bg-blue-500 border-2 border-blue-600 rounded hover:bg-green-400'>Update</button>
                </div>
            </div>
            <div className='p-2 mt-5 border-2 border-slate-200'>
                <h1 className='text-xl font-bold'>Category</h1>
                <div className='ml-2'>
                    <div className='flex gap-2'>
                    <input type='radio' name='cat' value='art' id='art'></input><label htmlFor='art'>Art</label>
                    </div>

                    <div className='flex gap-2'>
                    <input type='radio' name='cat' value='science' id='science'></input><label htmlFor='science'>Science</label>
                    </div>

                    <div className='flex gap-2'>
                    <input type='radio' name='cat' value='technology' id='technology'></input><label htmlFor='technology'>Technology</label>
                    </div>

                    <div className='flex gap-2'>
                    <input type='radio' name='cat' value='cinema' id='cinema'></input><label htmlFor='cinema'>Cinema</label>
                    </div>

                    <div className='flex gap-2'>
                    <input type='radio' name='cat' value='design' id='design'></input><label htmlFor='design'>Design</label>
                    </div>

                    <div className='flex gap-2'>
                    <input type='radio' name='cat' value='food' id='food'></input><label htmlFor='food'>Food</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Createpost
