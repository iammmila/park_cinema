// !MAIN PART
import MainRoot from "../pages/Main/MainRoot";
import NotFoundMain from "../pages/Main/NotFound";
import Home from "../pages/Main/Home";
import Cinemas from "../pages/Main/Cinemas";
import Programs from "../pages/Main/Programs";
import Campaign from "../pages/Main/Campaign";
import Vip from "../pages/Main/Vip";

//! Technologies PART
import TechRoot from "../pages/Main/Technologies/TechRoot";
import Imax from "../pages/Main/Technologies/Imax";
import LaseR from "../pages/Main/Technologies/LaseR";

//! ABOUT PART
import AboutRoot from "../pages/Main/About/AboutRoot";
import AboutUs from "../pages/Main/About/AboutUs";
import Privacy from "../pages/Main/About/Privacy";
import Contact from "../pages/Main/About/Contact";
import Cookies from "../pages/Main/About/Cookies";
//!ADMIN PART
import AdminRoot from "../pages/Admin/AdminRoot";
import NotFoundAdmin from "../pages/Admin/NotFound";
import Dashboard from "../pages/Admin/Dashboard";
import Login from "../components/Admin/Login/Login";

export const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "cinemas",
        element: <Cinemas />,
      },
      {
        path: "programs",
        element: <Programs />,
      },
      {
        path: "vip",
        element: <Vip />,
      },
      {
        path: "campaign",
        element: <Campaign />,
      },
      {
        path: "technologies/",
        element: <TechRoot />,
        children: [
          {
            path: "imax",
            element: <Imax />,
          },
          {
            path: "laser",
            element: <LaseR />,
          },
        ],
      },
      {
        path: "about/",
        element: <AboutRoot />,
        children: [
          {
            path: "",
            element: <AboutUs />,
          },
          {
            path: "privacy",
            element: <Privacy />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
          {
            path: "cookies",
            element: <Cookies />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFoundMain />,
      },
    ],
  },
  {
    path: "/admin/",
    element: <AdminRoot />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "*",
        element: <NotFoundAdmin />,
      },
    ],
  },
];
