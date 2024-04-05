import "./App.css";
import Footer from "./component/Footer";
// import Navbar from './component/Navbar';
// import Navbar2 from './component/Navbar2';
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
import Createpost from "./pages/profilePages/Createpost";
import Allposts from "./pages/profilePages/Allposts"
import {
  createBrowserRouter,
  RouterProvider,
  // Link,
  Outlet,
} from "react-router-dom";
import { AuthContextProvider } from "./context/authContext";


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
        path: "/latest",
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
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/post/",
        element: <Genre />,
      },
      {
        path: "/profile",
        element: <MyProfile/>
      },
      {
        path: "/editprofile",
        element: <EditProfile/>
      },
      {
        path: "/createpost",
        element: <Createpost/>
      },
      {
        path: "/allPosts",
        element: <Allposts/>
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
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
