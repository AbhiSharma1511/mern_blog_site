import React from 'react'
import {MdDensityMedium, MdKeyboardArrowDown, MdKeyboardArrowRight} from "react-icons/md";
import { HiChevronDown } from "react-icons/hi";
import { Link } from 'react-router-dom';

const navListMenuItems = [
    {
      id:1,
      genre: "Art",
    },
    {
      id:2,
      genre: "Science",
      
    },
    {
      id:3,
      genre: "Technology",
    },
    {
      id:4,
      genre: "Cineme",
    },
    {
      id:5,
      genre: "Design",
    },
    {
      id:6,
      genre: "Food",
    },
  ];

function SubNavbar() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const triggers = {
      onMouseEnter: () => setIsMenuOpen(true),
      onMouseLeave: () => setIsMenuOpen(false),
    };

    const position =(id)=>{
      // const [isPosition, setIsPosition] = React.useState(false);
      if(id%2===0){
        return true;
      }
      else{
        return false;
      }
    }

    const renderItems = navListMenuItems.map(({id, genre }) => (
      // <a href={`/post/:${id}`} key={id}>
        <div className='flex' key={id}>
          <div className={`mb-1 font-serif grid w-full ${position(id) ? "":""}`}>
            <Link to={`/post/:${genre}`} className='hover:bg-slate-400 rounded px-1 flex items-center'><MdKeyboardArrowRight className='mr-1'/>{genre}</Link>
          </div>
        </div>
      // </a>
    ));
    return (
      <React.Fragment>
        <div open={isMenuOpen} handler={setIsMenuOpen} {...triggers}>
          <div  className="">
            <div className="flex justify-between items-center ">
              <h2 className='pr-1'>Genre</h2>
              <HiChevronDown strokeWidth={2} className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}/>
            </div>
          </div>
          <div className={`hidden gap-3 absolute bg-blue-300 border-l-2 border-r-2 border-b-2 border-blue-500 rounded-lg ${isMenuOpen ? "lg:grid" : "hidden"}`}>
            <ul className="col-span-4 flex flex-col mb-1">
              {renderItems}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  };

const Navbar2 = () => {
  return (
    <div className=''>
        <div className='w-full h-auto bg-blue-300 flex justify-between items-center lg:px-20 p-1 rounded-b-xl md:px-15 pl-10'>
            <div className='text-blue-700 text-xl md:text-4xl py-2 font-serif font-semibold'>Page Of Wonder</div>
            <div className='w-4/12 hidden md:flex text-lg' >
                <ul className='w-full flex justify-around items-center'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/latest'>Latest</a></li>
                    {/* <li><a href='/genre' className='flex items-center'>Genres<MdKeyboardArrowDown/></a></li> */}
                    <li><a href='#' className='flex items-center' >{SubNavbar()}</a></li>
                    <li><a href='/about'>About Us</a></li>
                </ul>
            </div>
            <div>
                <a href='/login' className='hidden md:flex border rounded-2xl bg-blue-600 px-3 py-1'>Login/SignUp</a>
            </div>
            <div className='md:hidden text-2xl pr-10'>
                <a href='/menu'><MdDensityMedium/></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar2;