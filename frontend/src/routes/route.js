// !MAIN PART
import MainRoot from "../pages/Main/MainRoot";
import NotFoundMain from "../pages/Main/NotFound";
import Home from "../pages/Main/Home";
import Cinemas from "../pages/Main/Cinemas";
import Actions from "../pages/Main/Actions";

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
        path: "actions",
        element: <Actions />,
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
