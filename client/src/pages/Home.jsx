import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/authContext.js";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentUser = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/blog_site/posts/getallpost`
        );
        // const response = await axios.get(`/blog_site/posts/getallpost`);  // does not work prperly, need to debug...
        console.log(response);
        console.log("At Home page current user is: ", currentUser);
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [currentUser]);

  // useEffect(()=>{
  //     setPosts(post);
  // });

  return (
    <div className="grid grid-cols-6 justify-center">
      <div></div>
      <div className="col-span-4 mt-5 flex flex-col gap-10 mb-2">
        <div className="flex justify-center">
          <h1 className="text-3xl font-sans font-bold underline text-teal-600">
            Top Articles
          </h1>
        </div>
        {loading ? ( // Show progress bar if loading is true
          <div className="w-full h-2 bg-gray-200 rounded-md">
            <div
              className="h-full bg-blue-500 rounded-md"
              style={{ width: "50%" }}
            ></div>
          </div>
        ) : (
          posts.map((post) => (
            <div key={post._id} className={`grid grid-cols-5 gap-20`}>
              {/* <div key={post.id} className={`flex justify-center`}> */}
              <div className="col-span-2">
                <img
                  className="mx-h-[400px] rounded-lg shadow-blue-300 shadow-lg "
                  src={post.images[0]}
                  alt="Error in loading images!!"
                  style={{ width: "400px", height: "220px" }}
                />
                <div className="flex justify-center items-center mt-2 ">
                  <h2 className="font-sans text-lg">Genre: {post.genre.charAt(0).toUpperCase() + post.genre.slice(1)}</h2>
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
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
