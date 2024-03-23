import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(inputs)
  // const [inputs, setInputs] = useState({
  //   username: "",
  //   password: "",
  // });
  // const [err, setError] = useState(null);

  // const navigate = useNavigate();

  // const { login } = useContext(AuthContext);


  // const handleChange = (e) => {
  //   setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await login(inputs)
  //     navigate("/");
  //   } catch (err) {
  //     setError(err.response.data);
  //   }
  // };
  return (
    
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img
          className="h-full w-full object-cover"
          src="https://t4.ftcdn.net/jpg/04/60/71/01/360_F_460710131_YkD6NsivdyYsHupNvO3Y8MPEwxTAhORh.jpg"
          alt=""
        />
      </div>
      <div className="bg-emerald-100 flex flex-col justify-center">
        <form
          action=""
          className="max-w-[600px] mx-auto bg-gray-500 p-8 px-8 rounded-lg"
        >
          <h2 className="text-4xl dark:text-white font-bold text-center pb-4 font-serif">
            Sign In
          </h2>
          <div className="flex flex-col text-gray-400 pu-2">
            <label typeof="text" className="text-xl">
              Username:{" "}
            </label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800  foucs:outline-none"
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col text-gray-400 pu-2">
            <label typeof="password" className="text-xl">
              Password:{" "}
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800  foucs:outline-none"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between text-gray-400 py-2 ">
            <p className="px-4 flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </p>
            <p className="px-4">Forgot Password</p>
          </div>
          <button
            className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
            onClick={handleSubmit}
          >
            Sign In
          </button>
          <div className="flex justify-center">
            <a href="/register" className="text-stone-400">
              Don't have accout? <i className="text-sky-400">Sign Up</i>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;





// <div className='bg-blue-400 grid place-content-center h-screen'>
    //   <div className='border-2 border-black rounded-md  h-56 bg-white grid'>
    //     <div className='text-2xl font-semibold p-3 m-2'>Login</div>
    //     <div className='bg-zinc-400 grid'>
    //       <label typeof='email' className='text-xl'>Email: </label>
    //       <input name='email'  placeholder='Email' className=''/>
    //     </div>
    //     <div className='border-black border-1 grid'>
    //       <label typeof='text'>Password: </label>
    //       <input name='password' placeholder='Password' className=''/>
    //     </div>
    //     <div className='grid'>
    //       <button className='border-2 border-black bg-green-600 w-12'>Login</button>
    //       <a href='/register'>Don't have account? SignUp</a>
    //     </div>
    //   </div>
    // </div>
