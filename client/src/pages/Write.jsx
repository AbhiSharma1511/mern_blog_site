import {React, useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {

    const [value, setValue] = useState('');

  return (
    <div className='grid grid-cols-8 mt-10 gap-20'>
        <div></div>
        <div className='col-span-4'>
            <input type='text' placeholder='Title' className='border-2 border-slate-400 rounded pl-1 w-full mb-4 text-lg'/>
            <div className=''>
                <ReactQuill theme="snow" value={value} onChange={setValue} className=' border-slate-400 border-2 h-96 overflow-scroll'/>
            </div>
        </div>
        <div className='col-span-2'>
            <div className='border-2 border-slate-200 p-2 flex flex-col justify-between gap-2'>
                <h1 className='text-xl font-bold'>Publish</h1>
                <span className='pr-4'>
                    <b>Status:</b> Draft
                </span>
                <span>
                    <b>Visibility:</b> Public
                </span>
                <label htmlFor='file' className='font-bold '>Upload Image:</label>
                <input placeholder='Choose File' type='file' id='file' name=''/>
                <div className='mt-2 flex justify-between'>
                    <button className='border-2 border-blue-500 text-black rounded px-2 mr-1 hover:bg-green-400'>Save as a draft</button>
                    <button className='border-2 border-blue-600 bg-blue-500 rounded px-2 text-white hover:bg-green-400'>Update</button>
                </div>
            </div>
            <div className='mt-5 border-2 border-slate-200 p-2'>
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
  )
}

export default Write;