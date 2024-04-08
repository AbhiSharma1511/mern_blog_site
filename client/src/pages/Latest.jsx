import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// const post = [
//   {
//     id: 1,
//     genre: "Science",
//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perspiciatis repellendus enim nisi asperiores hic maxime cum, quidem rerum doloribus consectetur vero animi? Accusamus nostrum perferendis, nesciunt deleniti doloremque aspernatur!",
//     images: [
//       "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg",
//     ],
//   },
// ];

const Latest = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/blog_site/posts/getlatest`
        );
        console.log(response);
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message || "Error fetching post data");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="font-bold text-4xl text-blue-500">
            Loading the content...
          </h1>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="font-bold text-4xl text-blue-500">
            Error in loading data error:{error}
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-6 justify-center">
      <div></div>
      <div className="col-span-4 mt-5 flex flex-col gap-10 mb-5">
        <div className="flex justify-center">
          <h1 className="text-3xl font-sans font-bold underline text-teal-600">
            Latest Articles
          </h1>
        </div>
        {posts.map((post) => (
          <div key={post._id} className={`grid grid-cols-5 gap-24`}>
            {/* <div key={post.id} className={`flex justify-center`}> */}
            <div className="col-span-2">
              <img
                className="mx-h-[400px] rounded-lg shadow-blue-300 shadow-lg "
                src={post.images[0]}
                alt="Error in loading images!!"
                style={{ width: "400px", height: "220px" }}
              />
              <div className="flex justify-center items-center mt-2 ">
                <h2 className="font-sans text-lg">
                  Genre:{" "}
                  {post.genre.charAt(0).toUpperCase() + post.genre.slice(1)}
                </h2>
              </div>
            </div>
            <div className="col-span-3">
              <Link className="link" to={`/posts/post?_id=${post._id}`}>
                <h1 className="text-3xl font-semibold">{post.title}</h1>
                <p>
                  {post.description.length > 50
                    ? post.description.substring(0, 200) + "..."
                    : post.description}
                </p>
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

export default Latest;
