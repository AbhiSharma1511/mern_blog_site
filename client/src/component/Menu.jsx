import React from 'react'
import { Link } from 'react-router-dom'

const post=[
    {
      id:1,
      genre:'science',
      title:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perspiciatis repellendus enim nisi asperiores hic maxime cum, quidem rerum doloribus consectetur vero animi? Accusamus nostrum perferendis, nesciunt deleniti doloremque aspernatur!",
      img:"https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg"
    },
    {
      id:2,
      genre:'Art',
      title:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perspiciatis repellendus enim nisi asperiores hic maxime cum, quidem rerum doloribus consectetur vero animi? Accusamus nostrum perferendis, nesciunt deleniti doloremque aspernatur!",
      img:"https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg"
    },
    {
      id:3,
      genre:'Technology',
      title:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perspiciatis repellendus enim nisi asperiores hic maxime cum, quidem rerum doloribus consectetur vero animi? Accusamus nostrum perferendis, nesciunt deleniti doloremque aspernatur!",
      img:"https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg"
    },
  ]

const Menu = () => {
  return (
    <div>
        <div>
            <h1 className='text-3xl font-semibold mb-5'>Other posts you may like:</h1>
            {post.map((post)=>( 
                <div className='mb-5 justify-center' key={post.id}>
                    <img className='rounded-lg object-cover' src={post.img} alt=''/>
                    <h2>{post.title}</h2>
                    <Link to={`/post/${post.id}`}>
                      <button className='border-sky-400 bg-slate-200 border-2 px-3 mt-1 rounded hover:bg-blue-400'>Read More</button>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Menu