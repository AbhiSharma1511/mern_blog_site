import React from 'react'
import LeftProfile from './LeftProfile'

import {posts} from "./data"


const SavedPosts = () => {
  return (
    <div className='flex mt-9'>
      
      
      <div className='fixed mt-4 -left-0 -right-0 sm:w-auto'>
        <LeftProfile/>
      </div>
   

      
    
        <div className='w-full ml-4 text-center sm:w-5/6 sm:ml-0'>
        <div className='grid grid-cols-1 gap-4 mr-10 ml-80 sm:grid-cols-2 lg:grid-cols-3'>
          {posts.map((post) => (
            <div key={post.title} className='p-4 border border-gray-300 rounded-lg'>
              <img src={post.image_url} alt="" />
              <h1 className='mb-2 text-xl font-semibold'>{post.title}</h1>
              <p className='mb-2'>{post.genre}</p>
              <p className='mb-2'>{post.description}</p>
              {/* Add more content as needed */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SavedPosts
