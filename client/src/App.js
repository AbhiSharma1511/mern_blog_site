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
        path: "/",
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
        path: "/post/:id",
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
    <div className="App">
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </div>
  );
}

export default App;
