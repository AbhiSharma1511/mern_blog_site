import React from 'react'
import { Link } from 'react-router-dom';
const LeftProfile = () => {
  return (
    <div className='flex flex-col items-center w-1/6 border-r-2 gap-y-7 justify-evenly'>

   <Link to='/profile' className='flex items-center justify-center h-10 text-cente w-28 hover:bg-sky-700'>
          Profile
        </Link>
   <Link to='/editprofile' className='flex items-center justify-center h-10 text-cente w-28 hover:bg-sky-700'>
          Edit Profile
        </Link>
    <Link to='/createpost' className='flex items-center justify-center h-10 text-cente w-28 hover:bg-sky-700'>
          Create Posts
        </Link>
        <Link to='/allposts'className='flex items-center justify-center h-10 text-cente w-28 hover:bg-sky-700'>
          All Posts
        </Link>
        <Link to='/all-posts'className='flex items-center justify-center h-10 text-cente w-28 hover:bg-sky-700'>
          Saved Post
        </Link>
        <Link to='/all-posts' className='flex items-center justify-center h-10 p-2 text-cente w-28 hover:bg-sky-700'>
          Logout
        </Link>
   </div>
  )
}

export default LeftProfile
