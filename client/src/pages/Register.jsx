// import React, { useState} from 'react'
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';

// const Register = () => {

//   const [inputs, setInputs] = useState({
//     email:"",
//     fullName:"",
//     password:""
//   })

//   const navigate = useNavigate();

//   const handleChange = e =>{
//     setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
//   }

//   const handleSubmit = async e=>{
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:8000/blog_site/auth/register",inputs)
//       console.log(res);
//       navigate("/auth/login");
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   console.log(inputs)

//   return (
//     <div className='grid grid-cols-1 md:grid-cols-2 h-screen w-full'>
//       <div className='hidden sm:block'><img className='h-full w-full object-cover' src='https://t4.ftcdn.net/jpg/04/60/71/01/360_F_460710131_YkD6NsivdyYsHupNvO3Y8MPEwxTAhORh.jpg' alt=''/>
//       </div>
//       <div className='bg-emerald-100 flex flex-col justify-center'>
//         <form action='' className='max-w-[600px] mx-auto bg-gray-500 p-8 px-8 rounded-lg'>
//           <h2 className='text-4xl dark:text-white font-bold text-center pb-4 font-serif'>Create Your Account</h2>
// {/* ************ email ******************* */}
// <div className='flex flex-col text-gray-400 pu-2'>
// <label typeof='email' className='text-xl'>Email: </label>
//  <input required type='email' name='email'  placeholder='Email' className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800  foucs:outline-none' onChange={handleChange} />
// </div>
// {/* ************ Username ******************* */}
// {/* <div className='flex flex-col text-gray-400 pu-2'>
// <label typeof='text' className='text-xl'>Username: </label>
//  <input required type='text' name='username'  placeholder='Username' className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800  foucs:outline-none' onChange={handleChange}/>
// </div> */}
// {/* ************ fullName ******************* */}
// <div className='flex flex-col text-gray-400 pu-2'>
// <label typeof='text' className='text-xl'>FullName: </label>
//  <input required type='text' name='fullName'  placeholder='Fullname' className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800  foucs:outline-none' onChange={handleChange}/>
// </div>
// {/* ************ Password ******************* */}
// <div className='flex flex-col text-gray-400 pu-2'>
// <label typeof='password' className='text-xl'>Password: </label>
//  <input required type='password' name='password'  placeholder='Password' className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800  foucs:outline-none' onChange={handleChange}/>
// </div>
// <div className='flex justify-between text-gray-400 py-2 '>
//   <p className='px-4 flex items-center'><input type='checkbox' className='mr-2'/>Remember Me</p>
//   {/* <p className='px-4'>Forgot Password</p> */}
// </div>
// <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' onClick={handleSubmit}>Sign Up</button>
// <div className='flex justify-center'>
//   <a href='/auth/login' className='text-stone-400'>Already have accout? <i className='text-sky-400'>Login</i></a>
// </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Register;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const Register = () => {
  const [inputs, setInputs] = useState({
    email: "",
    fullName: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); // State variable for loading indicator
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true); // Start loading indicator
      const res = await axios.post(
        "http://localhost:8000/blog_site/auth/register",
        inputs
      );
      console.log(res);
      navigate("/auth/login");
    } catch (err) {
      console.log(err.response.data.message);
      setErrorMessage(err.response.data.message); // Set error message received from backend
      setTimeout(() => {
        setErrorMessage(""); // Clear error message after 5 seconds
      }, 5000);
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  console.log(inputs);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-full">
      {/* Progress bar */}
      {loading && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <CircularProgress className="text-blue-500" />
        </div>
      )}
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
            Create Your Account
          </h2>
          {errorMessage && (
            <div className="bg-red-200 text-red-800 p-2 mb-4 rounded">
              {errorMessage}
            </div>
          )}
          {/* ************ email ******************* */}
          <div className="flex flex-col text-gray-400 pu-2">
            <label typeof="email" className="text-xl">
              Email:{" "}
            </label>
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800  foucs:outline-none"
              onChange={handleChange}
            />
          </div>
          {/* ************ Username ******************* */}
          {/* <div className='flex flex-col text-gray-400 pu-2'>
          <label typeof='text' className='text-xl'>Username: </label>
           <input required type='text' name='username'  placeholder='Username' className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800  foucs:outline-none' onChange={handleChange}/>
          </div> */}
          {/* ************ fullName ******************* */}
          <div className="flex flex-col text-gray-400 pu-2">
            <label typeof="text" className="text-xl" htmlFor="email">
              FullName:{" "}
            </label>
            <input
              required
              type="text"
              name="fullName"
              placeholder="Fullname"
              className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800  foucs:outline-none"
              onChange={handleChange}
            />
          </div>
          {/* ************ Password ******************* */}
          <div className="flex flex-col text-gray-400 pu-2">
            <label typeof="password" className="text-xl">
              Password:{" "}
            </label>
            <input
              required
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
            {/* <p className='px-4'>Forgot Password</p> */}
          </div>
          <button
            className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
          <div className="flex justify-center">
            <a href="/auth/login" className="text-stone-400">
              Already have accout? <i className="text-sky-400">Login</i>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
