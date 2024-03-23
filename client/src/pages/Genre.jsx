import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'

const post1=[
      {
        id:1,
        title:'There is no any post for this genre till now.',
        desc:"",
        img:"https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg"
      },
    ]

const Genre = () => {

  const [posts, setPosts] = useState([]);

  const genre = useLocation();

  console.log(genre);

  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const res = await axios.get(`/posts${genre}`);
        if(res.data != 0)
            setPosts(res.data);
        else 
            setPosts(res.post1)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  },[genre]);

  return (
    <div className='grid grid-cols-6 justify-center'>
      <div></div>
      <div className='col-span-4 mt-5 flex flex-col gap-28 mb-5'>
        <div className='flex justify-center'>
          <h1 className='text-3xl font-sans font-bold underline text-teal-600'>{genre}</h1>
        </div>
        {posts.map((posts)=>(
          <div key={posts.id} className={`grid grid-cols-5 gap-24`}>
          {/* <div key={post.id} className={`flex justify-center`}> */}
            <div className='col-span-2'>
              <img className='mx-h-[400px] rounded-lg shadow-blue-300 shadow-lg' src={posts.img} alt=''/>
            </div>
            <div className='col-span-3'>
              <Link className='link' to={`/post/${posts.id}`}>
                <h1 className='text-3xl font-semibold'>{posts.title}</h1>
                <p>{posts.description}</p>
                <button className='border-sky-400 border-2 px-2 mt-5 rounded hover:bg-blue-400'>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Genre;