import React, { useEffect, useState } from 'react'
import bin from '../component/images/bin.png'
import edit from '../component/images/edit.png'
import Menu from '../component/Menu'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

const Single = () => {

    const [post, setPost] = useState([]);

  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const res = await axios.get("/posts");
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  },[]);

  return (
    <div>
        <div className='grid grid-cols-8 gap-10'>
            <div></div>
            <div className='col-span-4 mt-10'>
                <img className='rounded-xl w-full h-96' src='https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg' alt=''/>
                
                <div className='flex mt-2 items-center'>
                    <img className='w-12 h-12 rounded-full mr-2' src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fHww&w=1000&q=80' alt=''/>
                    <div>
                        <h2 className='font-bold text-blue-600'>Name</h2>
                        <p>Posted {moment(post.date).fromNow()}</p>
                    </div>
                    <div className='flex ml-5'>
                        <Link to={'/write'}>
                            <img className='w-9 h-9' src={edit} alt=''/>
                        </Link>
                        <Link to={'/'}>
                            <img className='w-8 h-8' src={bin} alt=''/>
                        </Link>
                    </div>
                </div>
                <hr className='mt-5'/>
                <div className='text-lg mt-5'>
                    <h1 className='text-4xl font-semibold mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quas rem quos, explicabo deserunt repellendus vero perferendis quae assumenda aperiam incidunt id itaque fugiat numquam iure harum exercitationem. Id distinctio amet sed. Incidunt eius fugiat atque odio neque ea natus, dolores voluptate eligendi id explicabo quo. Nihil aliquid nulla beatae corporis, nostrum deserunt porro odit nemo! Eligendi molestiae culpa reiciendis quis, quas suscipit accusantium recusandae. Quae numquam iure eveniet, labore hic vero quod aspernatur maxime rem et repellat eligendi eius! Sint, obcaecati officia sequi sunt, voluptatum inventore in hic excepturi rem dolores nam earum voluptas quo vitae alias. Illo velit praesentium commodi tempore at eum facilis exercitationem possimus alias culpa aliquid nihil labore, doloremque ea perspiciatis corrupti nam. Debitis magni ipsam inventore laudantium quasi nobis minima dolores libero ad nemo. Veniam distinctio ratione corrupti nostrum labore. Quas quis laborum blanditiis totam minima libero quo optio quasi facere reiciendis ea, numquam a quam, quisquam illum alias. Pariatur explicabo sint earum. Maxime saepe vel nostrum dolor maiores dolore sunt? Et nihil cumque magni quisquam harum libero ipsa, sint odio, nam vitae repellendus ad consequuntur. Accusamus ullam velit fugit quo commodi totam! Deserunt, molestias doloribus ipsam libero assumenda repudiandae corrupti quas aperiam mollitia?</p>
                </div>
            </div>
            <div className='col-span-2 flex justify-center mt-10'>
               <Menu/>
            </div>
        </div>
    </div>
  )
}

export default Single