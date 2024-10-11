import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../dashboard/layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
]);

export default router;
