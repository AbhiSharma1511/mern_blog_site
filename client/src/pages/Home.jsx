import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// const post = [
//   {
//     id: 1,
//     genre: "Science",
//     title: "1 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perspiciatis repellendus enim nisi asperiores hic maxime cum, quidem rerum doloribus consectetur vero animi? Accusamus nostrum perferendis, nesciunt deleniti doloremque aspernatur!",
//     images: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg",
//   },
//   {
//     id: 2,
//     genre: "Technology",
//     title: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perspiciatis repellendus enim nisi asperiores hic maxime cum, quidem rerum doloribus consectetur vero animi? Accusamus nostrum perferendis, nesciunt deleniti doloremque aspernatur!",
//     images: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg",
//   },
//   {
//     id: 3,
//     genre: "Art",
//     title: "3 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perspiciatis repellendus enim nisi asperiores hic maxime cum, quidem rerum doloribus consectetur vero animi? Accusamus nostrum perferendis, nesciunt deleniti doloremque aspernatur!",
//     images: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg",
//   }
// ];

/************ Data sample loaded from server... */
// {
//   "_id": "66071108827c002924ac7ec9",
//   "title": "abc",
//   "description": "This is only for testing1",
//   "genre": "science",
//   "userId": "6605858f2cb8eb07013ce8a1",
//   "images": [
//       "http://res.cloudinary.com/di75qbwmu/image/upload/v1711739138/pzkwjmzaqg4deskehukt.jpg",
//       "http://res.cloudinary.com/di75qbwmu/image/upload/v1711739140/z4xj9c83kp11yvz0sgxr.jpg",
//       "http://res.cloudinary.com/di75qbwmu/image/upload/v1711739143/taxkmx3upzs0oe0mfm4v.jpg"
//   ],
//   "likes": 0,
//   "comments": [],
//   "createdAt": "2024-03-29T19:05:44.737Z",
//   "updatedAt": "2024-03-29T19:05:44.737Z",
//   "__v": 0
// },


const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const response = await axios.get(`http://localhost:8000/blog_site/posts/getallpost`);
        // const response = await axios.get(`/blog_site/posts/getallpost`);  // does not work prperly, need to debug...
        console.log(response);
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  },[]);

  // useEffect(()=>{
  //     setPosts(post);
  // });

  return (
    <div className="grid grid-cols-6 justify-center">
      <div></div>
      <div className="col-span-4 mt-5 flex flex-col gap-28 mb-3">
        <div className="flex justify-center">
          <h1 className="text-3xl font-sans font-bold underline text-teal-600">
            Top Articles
          </h1>
        </div>
        {loading ? ( // Show progress bar if loading is true
          <div className="w-full h-2 bg-gray-200 rounded-md">
            <div className="h-full bg-blue-500 rounded-md" style={{ width: "50%" }}></div>
          </div>
        ) : (posts.map((post) => (
          <div key={post._id} className={`grid grid-cols-5 gap-24`}>
            {/* <div key={post.id} className={`flex justify-center`}> */}
            <div className="col-span-2">
              <img
                className="mx-h-[400px] rounded-lg shadow-blue-300 shadow-lg "
                src={post.images[0]}
                alt="Error in loading images!!"
                style={{ width: "400px", height: "220px" }}
              />
            </div>
            <div className="col-span-3">
              <Link className="link" to={`/post/${post._id}`}>
                <h1 className="text-3xl font-semibold">{post.title}</h1>
                <p className="overflow-hidden h-20">{post.description}</p>
                <button className="border-sky-400 border-2 px-2 mt-5 rounded hover:bg-blue-400">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        )))}
      </div>
    </div>
  );
};

export default Home;
