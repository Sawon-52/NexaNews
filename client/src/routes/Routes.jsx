import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../dashboard/layout/MainLayout";
import AdminIndex from "../dashboard/pages/AdminIndex";
import AdminNews from "../dashboard/pages/AdminNews";
import AddWriters from "../dashboard/pages/AddWriters";
import AllWriters from "../dashboard/pages/AllWriters";
import Settings from "../dashboard/pages/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/admin/dashboard",
        element: <AdminIndex></AdminIndex>,
      },
      {
        path: "/admin/news",
        element: <AdminNews></AdminNews>,
      },
      {
        path: "/admin/addWriter",
        element: <AddWriters></AddWriters>,
      },
      {
        path: "/admin/Writers",
        element: <AllWriters></AllWriters>,
      },
      {
        path: "/admin/settings",
        element: <Settings></Settings>,
      },
    ],
  },
]);

export default router;
