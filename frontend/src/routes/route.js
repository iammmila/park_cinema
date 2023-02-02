// !MAIN PART
import MainRoot from "../pages/Main/MainRoot";
import NotFoundMain from "../pages/Main/NotFound";
import Home from "../pages/Main/Home";

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
