import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
const LeftProfile = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="sticky top-0 flex flex-col items-center w-1/6 h-full text-center border-r-2 opacity-50 rounded-xl bg-slate-300 left-0 gap-y-7 justify-evenly">
      <Link
        to={`/user/${currentUser.data.user.username}/profile`}
        className="flex items-center justify-center h-10 text-cente w-28 hover:bg-sky-700"
      >
        Profile
      </Link>
      <Link
        to={`/user/${currentUser.data.user.username}/editprofile`}
        className="flex items-center justify-center h-10 text-cente w-28 hover:bg-sky-700"
      >
        Edit Profile
      </Link>
      <Link
        to={`/user/${currentUser.data.user.username}/createpost`}
        className={`flex items-center justify-center h-10 text-center w-28 hover:bg-sky-700 ${
          currentUser?.data.user.role === "admin" ? "flex" : "hidden"
        }`}
      >
        Create Posts
      </Link>
      <Link
        to={`/user/${currentUser.data.user.username}/allposts`}
        className={`flex items-center justify-center h-10 text-center w-28 hover:bg-sky-700 ${
          currentUser?.data.user.role === "admin" ? "flex" : "hidden"
        }`}
      >
        All Posts
      </Link>
      <Link
        to={`/user/${currentUser.data.user.username}/savedposts`}
        className="flex items-center justify-center h-10 text-cente w-28 hover:bg-sky-700"
      >
        Saved Post
      </Link>
      <Link
        to={`/user/${currentUser.data.user.username}/logout`}
        className="flex items-center justify-center h-10 p-2 text-cente w-28 hover:bg-sky-700"
      >
        Logout
      </Link>
    </div>
  );
};

export default LeftProfile;
