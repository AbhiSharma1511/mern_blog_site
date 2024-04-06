import React from 'react'
import LeftProfile from './LeftProfile'

import {posts} from "./data"


const SavedPosts = () => {
  return (
    <div className='flex mt-9'>
    <LeftProfile/>
   
{
  posts.map((post)=>{
  return <div key={post.title} className=''>
    <div className='border-2 border-gray-300 '>

<div>{post.title}</div>
<div>{post.genre}</div>
<div>{post.description}</div>
    </div>

 </div>
  })
}
    </div>
  )
}

export default SavedPosts
