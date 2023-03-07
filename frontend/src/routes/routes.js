// !MAIN PART
import MainRoot from "../pages/Main/MainRoot";
import NotFoundMain from "../pages/Main/NotFound";
import Home from "../pages/Main/Home";
import Schedule from "../pages/Main/Schedule";
import Vip from "../pages/Main/Vip";
import Booking from '../pages/Main/Booking';
import FilmDetail from '../pages/Main/FilmDetail';
import Payment from './../pages/Main/Payment';

//! CINEMAS PART
import CinemasRoot from "../pages/Main/Cinemas/CinemasRoot"
import Cinemas from "../pages/Main/Cinemas/Cinemas"
import CinemaDetail from "../pages/Main/Cinemas/CinemaDetail"

//!CAMPAIGNS PART
import CampaignRoute from '../pages/Main/Campaigns/CampaignRoute';
import Campaign from "../pages/Main/Campaigns/Campaign";
import CampaignDetail from "../pages/Main/Campaigns/CampaignDetail";

//! TECHNOLOGIES PART
import TechRoot from "../pages/Main/Technologies/TechRoot";
import Imax from "../pages/Main/Technologies/Imax";
import LaseR from "../pages/Main/Technologies/LaseR";

//! ABOUT PART
import AboutRoot from "../pages/Main/About/AboutRoot";
import AboutUs from "../pages/Main/About/AboutUs";
import Privacy from "../pages/Main/About/Privacy";
import Contact from "../pages/Main/About/Contact";
import AdvertisingOffer from "../pages/Main/About/AdvertisingOffer";

//!ADMIN PART
import AdminRoot from "../pages/Admin/AdminRoot";
import Dashboard from "../pages/Admin/Dashboard";
import Login from "../components/Admin/Login/Login";
import Users from './../pages/Admin/Users';
import GeneralCinemas from './../pages/Admin/GeneralCinemas';
import GeneralFilms from './../pages/Admin/GeneralFilms';
import GeneralCampaigns from './../pages/Admin/GeneralCampaigns';
import Languages from './../pages/Admin/Languages';
import Subtitles from './../pages/Admin/Subtitles';
import Formats from './../pages/Admin/Formats';

export const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      //! CINEMAS
      {
        path: "cinemas/",
        element: <CinemasRoot />,
        children: [
          {
            path: "",
            element: <Cinemas />
          },
          {
            path: ":_id",
            element: <CinemaDetail />
          }
        ]
      },
      {
        path: "schedule",
        element: <Schedule />,
      },
      //!film's detail
      {
        path: "film/:id",
        element: <FilmDetail />
      },

      //! VIP
      {
        path: "vip",
        element: <Vip />,
      },
      //! CAMPAIGNS
      {
        path: "campaigns/",
        element: <CampaignRoute />,
        children: [
          {
            path: "",
            element: <Campaign />
          },
          {
            path: ":_id",
            element: <CampaignDetail />
          }
        ]
      },
      //! TECHNOLOGIES
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
          }
        ],
      },

      //! ABOUT  PART
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
            path: "advertising",
            element: <AdvertisingOffer />,
          },
        ],
      }
    ],
  },

  //! BOOKING TICKET
  {
    path: "/booking",
    element: <Booking />
  },
  {
    path: "/payment",
    element: <Payment />
  },

  //! 404 NOT FOUND 
  {
    path: "*",
    element: <NotFoundMain />,
  },

  //! =====================A D M I N=======================
  {
    path: "/admin/",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "cinemas",
        element: <GeneralCinemas />,
      },
      {
        path: "films",
        element: <GeneralFilms />,
      },
      {
        path: "campaigns",
        element: <GeneralCampaigns />,
      },
      {
        path: "languages",
        element: <Languages />,
      },
      {
        path: "subtitles",
        element: <Subtitles />,
      },
      {
        path: "formats",
        element: <Formats />,
      },
      {
        path: "contact",
        element: <Dashboard />,
      },
      {
        path: "*",
        element: <NotFoundMain />,
      },
    ],
  },
];
