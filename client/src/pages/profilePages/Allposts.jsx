import React from 'react'
import LeftProfile from './LeftProfile'

import { Link } from 'react-router-dom'

const post=[
    {
      id:1,
      genre:'Science',
      title:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perspiciatis repellendus enim nisi asperiores hic maxime cum, quidem rerum doloribus consectetur vero animi? Accusamus nostrum perferendis, nesciunt deleniti doloremque aspernatur!",
      img:"https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg"
    },
    {
      id:2,
      genre:'Technology',
      title:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perspiciatis repellendus enim nisi asperiores hic maxime cum, quidem rerum doloribus consectetur vero animi? Accusamus nostrum perferendis, nesciunt deleniti doloremque aspernatur!",
      img:"https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg"
    },
    {
      id:3,
      genre:'Art',
      title:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perspiciatis repellendus enim nisi asperiores hic maxime cum, quidem rerum doloribus consectetur vero animi? Accusamus nostrum perferendis, nesciunt deleniti doloremque aspernatur!",
      img:"https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg"
    },
    {
      id:4,
      genre:'Cinema',
      title:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perspiciatis repellendus enim nisi asperiores hic maxime cum, quidem rerum doloribus consectetur vero animi? Accusamus nostrum perferendis, nesciunt deleniti doloremque aspernatur!",
      img:"https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg"
    },
    {
      id:5,
      genre:'Art',
      title:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perspiciatis repellendus enim nisi asperiores hic maxime cum, quidem rerum doloribus consectetur vero animi? Accusamus nostrum perferendis, nesciunt deleniti doloremque aspernatur!",
      img:"https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg"
    },
    {
      id:6,
      genre:'Science',
      title:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perspiciatis repellendus enim nisi asperiores hic maxime cum, quidem rerum doloribus consectetur vero animi? Accusamus nostrum perferendis, nesciunt deleniti doloremque aspernatur!",
      img:"https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg"
    },
    {
      id:7,
      genre:'Technology',
      title:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perspiciatis repellendus enim nisi asperiores hic maxime cum, quidem rerum doloribus consectetur vero animi? Accusamus nostrum perferendis, nesciunt deleniti doloremque aspernatur!",
      img:"https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg"
    }
  ]
  
const Allposts = () => {
  return (
    <div className='flex mt-9'>

<div className='fixed mt-4 -left-0 -right-0'>
        <LeftProfile/>
      </div>
   
    

      <div className='grid w-5/6 grid-cols-6 p-4 ml-52'>
      
      <div className='flex flex-col col-span-4 mt-5 mb-5 gap-28'>
        <div className='flex justify-center '>
          <h1 className='font-sans text-3xl font-bold text-teal-600 underline '>All Articles</h1>
        </div>
        {post.map((post)=>(
          <div key={post.id} className={`grid grid-cols-5 gap-24 `}>
          {/* <div key={post.id} className={`flex justify-center`}> */}
            <div className='col-span-2'>
              <img className='mx-h-[400px] rounded-lg shadow-blue-300 shadow-lg' src={post.img} alt=''/>
            </div>
            <div className='col-span-3'>
              <Link className='link' to={`/post/${post.id}`}>
                <h1 className='text-3xl font-semibold'>{post.title}</h1>
                <p>{post.desc}</p>
                <button className='px-2 mt-5 border-2 rounded border-sky-400 hover:bg-blue-400'>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>
  )
}

export default Allposts
