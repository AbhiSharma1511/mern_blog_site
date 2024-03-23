import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

// const position=(id)=>{
//   console.log(false);
//   if(id%2===0) return true;
//   else return false;

// };

// const post = [
//   {
//     id: 1,
//     genre: "Science",
//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perspiciatis repellendus enim nisi asperiores hic maxime cum, quidem rerum doloribus consectetur vero animi? Accusamus nostrum perferendis, nesciunt deleniti doloremque aspernatur!",
//     img: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg",
//   },
//   {
//     id: 2,
//     genre: "Technology",
//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perspiciatis repellendus enim nisi asperiores hic maxime cum, quidem rerum doloribus consectetur vero animi? Accusamus nostrum perferendis, nesciunt deleniti doloremque aspernatur!",
//     img: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg",
//   },
//   {
//     id: 3,
//     genre: "Art",
//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perspiciatis repellendus enim nisi asperiores hic maxime cum, quidem rerum doloribus consectetur vero animi? Accusamus nostrum perferendis, nesciunt deleniti doloremque aspernatur!",
//     img: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg",
//   },
//   {
//     id: 4,
//     genre: "Cinema",
//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perspiciatis repellendus enim nisi asperiores hic maxime cum, quidem rerum doloribus consectetur vero animi? Accusamus nostrum perferendis, nesciunt deleniti doloremque aspernatur!",
//     img: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg",
//   },
//   {
//     id: 5,
//     genre: "Art",
//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perspiciatis repellendus enim nisi asperiores hic maxime cum, quidem rerum doloribus consectetur vero animi? Accusamus nostrum perferendis, nesciunt deleniti doloremque aspernatur!",
//     img: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg",
//   },
//   {
//     id: 6,
//     genre: "Science",
//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perspiciatis repellendus enim nisi asperiores hic maxime cum, quidem rerum doloribus consectetur vero animi? Accusamus nostrum perferendis, nesciunt deleniti doloremque aspernatur!",
//     img: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg",
//   },
//   {
//     id: 7,
//     genre: "Technology",
//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perspiciatis repellendus enim nisi asperiores hic maxime cum, quidem rerum doloribus consectetur vero animi? Accusamus nostrum perferendis, nesciunt deleniti doloremque aspernatur!",
//     img: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg",
//   },
// ];

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const res = await axios.get(`/posts`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  },[]);
  // setPosts[posts];

  return (
    <div className="grid grid-cols-6 justify-center">
      <div></div>
      <div className="col-span-4 mt-5 flex flex-col gap-28 mb-5">
        <div className="flex justify-center">
          <h1 className="text-3xl font-sans font-bold underline text-teal-600">
            Top Articles
          </h1>
        </div>
        {posts.map((posts) => (
          <div key={posts.id} className={`grid grid-cols-5 gap-24`}>
            {/* <div key={post.id} className={`flex justify-center`}> */}
            <div className="col-span-2">
              <img
                className="mx-h-[400px] rounded-lg shadow-blue-300 shadow-lg"
                src={posts.img}
                alt=""
              />
            </div>
            <div className="col-span-3">
              <Link className="link" to={`/post/${posts.id}`}>
                <h1 className="text-3xl font-semibold">{posts.title}</h1>
                <p>{posts.description}</p>
                <button className="border-sky-400 border-2 px-2 mt-5 rounded hover:bg-blue-400">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
