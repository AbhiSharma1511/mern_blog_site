import "./App.css";
import Footer from "./component/Footer";
import Navbar3 from "./component/Navbar3";

import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Home from "./pages/Home";
import Latest from "./pages/Latest";
import Single from "./pages/Single";
import Write from "./pages/Write";
import ContactUs from "./pages/profilePages/ContactUs";
import Genre from "./pages/Genre";
import MyProfile from "./pages/profilePages/MyProfile";
import EditProfile from "./pages/profilePages/EditProfile";
import Allposts from "./pages/profilePages/Allposts"
import SavedPosts from "./pages/profilePages/SavedPosts";

import {
  createBrowserRouter,
  RouterProvider,
  // Link,
  Outlet,
} from "react-router-dom";
import { AuthContextProvider } from "./context/authContext";
import Logout from "./pages/profilePages/Logout";


const Layout = () => {
  return (
    <div>
      <Navbar3 />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/posts",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/posts/latest",
        element: <Latest />,
      },
      {
        path: "/posts/post",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/user/:username/contact",
        element: <ContactUs />,
      },
      {
        path: "/posts/genres",
        element: <Genre />,
      },
      {
        path: "/user/:username/profile",
        element: <MyProfile/>
      },
      {
        path: "/user/:username/editprofile",
        element: <EditProfile/>
      },
      {
        path: "/user/:username/createpost",
        element: <Write/>
      },
      {
        path: "/user/:username/allposts",
        element: <Allposts/>
      },
      {
        path: "/user/:username/savedposts",
        element: <SavedPosts/>
      },
      {
        path: "/user/:username/logout",
        element: <Logout/>
      }
    ],
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
]);

function App() {
  return (
    <div className="App bg-slate-100">
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </div>
  );
}

export default App;
