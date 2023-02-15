// !MAIN PART
import MainRoot from "../pages/Main/MainRoot";
import NotFoundMain from "../pages/Main/NotFound";
import Home from "../pages/Main/Home";
import Programs from "../pages/Main/Programs";
import Campaign from "../pages/Main/Campaign";
import Vip from "../pages/Main/Vip";
import Booking from './../pages/Main/Booking';

//! CINEMAS PART
import CinemasRoot from "../pages/Main/Cinemas/CinemasRoot"
import Cinemas from "../pages/Main/Cinemas/Cinemas"
import AygunMall from "../pages/Main/Cinemas/AygunMall"
import FlameTowers from "../pages/Main/Cinemas/FlameTowers"
import ParkBulvar from "../pages/Main/Cinemas/ParkBulvar"
import MetroPark from "../pages/Main/Cinemas/MetroPark"
import Shahdag from "../pages/Main/Cinemas/Shahdag"
import Zaqulba from "../pages/Main/Cinemas/Zaqulba"


//! TECHNOLOGIES PART
import TechRoot from "../pages/Main/Technologies/TechRoot";
import Technologies from "../pages/Main/Technologies/Technologies";
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
        path: "cinemas/",
        element: <CinemasRoot />,
        children: [
          {
            path: "",
            element: <Cinemas />
          },
          {
            path: "aygunmall",
            element: <AygunMall />
          },
          {
            path: "flametowers",
            element: <FlameTowers />
          },
          {
            path: "parkbulvar",
            element: <ParkBulvar />
          },
          {
            path: "metropark",
            element: <MetroPark />
          },
          {
            path: "shahdag",
            element: <Shahdag />
          },
          {
            path: "zaqulba",
            element: <Zaqulba />
          }
        ]
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
            path: "",
            element: <Technologies />
          },
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
    path: "/booking",
    element: <Booking />
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
