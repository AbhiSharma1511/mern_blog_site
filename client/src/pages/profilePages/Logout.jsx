import React from 'react'
import LeftProfile from './LeftProfile'
const Logout = () => {
  return (
    <div className='flex mt-9'>
    <LeftProfile/>

    <div className='flex flex-col items-center justify-center w-5/6 gap-6'>
        <p className='text-3xl'>You are logging out...</p>
        <h2 className='text-5xl text-blue-600'>Thanks</h2>
    </div>
    </div>
  )
}

export default Logout
