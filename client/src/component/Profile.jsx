import React, { useContext } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";


function Profile() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(!isMenuOpen);

  const { currentUser, logout } = useContext(AuthContext);

  const profileMenuItems = [
    {
      label: "My Profile",
      icon: UserCircleIcon,
      link: `/user/${currentUser?.data?.user?.username}/profile`
    },
    {
      label: "Edit Profile",
      icon: Cog6ToothIcon,
      link: `/user/${currentUser?.data?.user?.username}/editprofile`
    },
    {
      label: "Inbox",
      icon: InboxArrowDownIcon,
      link: "/inbox",
    },
    {
      label: "Help",
      icon: LifebuoyIcon,
      link: `/user/${currentUser?.data?.user?.username}/contact`,
    },
    {
      label: "Sign Out",
      icon: PowerIcon,
      link: "/posts",
    },
  ];

  const handleLogout = async () => {
    
    if(currentUser){
      await logout()
      navigate("/posts");
    }
     // Navigate to the desired route after logout
  };

  return (
    <div open={isMenuOpen} handler={setIsMenuOpen} className="">
      <div>
        <button
          onClick={closeMenu}
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto text-xl"
        >
          <img
            className="border border-blue-500 p-0.5 w-10 h-10 rounded-full"
            alt="a"
            src={
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            }
          />
          <MdKeyboardArrowDown
            className={`h-4 w-4 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
      <div
        className={`p-1 absolute bg-slate-300 border-teal-500 border-2 rounded-lg ${
          isMenuOpen ? "flex flex-col" : "hidden"
        }`}
      >
        {profileMenuItems.map(({ label, icon, link }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <div
              key={label}
              className={`flex items-center gap-2 rounded ${
                isLastItem ? "hover:bg-red-300" : "hover:bg-slate-400"
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              {/* <Link to={currentUser && isLastItem? {logout} : `${link}`} className={` ${isLastItem ? "red" : "inherit"}`}>{label}</Link> */}
              {isLastItem ? (
                <button onClick={handleLogout}>{label}</button>
              ) : (
                <Link to={link}>{label}</Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Profile;
