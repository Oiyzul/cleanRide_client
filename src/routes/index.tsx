import App from "@/App";
import ProtectedRoute from "@/components/layouts/ProtectedRoute";
import { routeGenerator } from "@/utils/routeGenerator";
import { createBrowserRouter } from "react-router-dom";
import { adminPaths } from "./admin.routes";
import { userPaths } from "./user.routes";
import { LoginPage, NotFoundPage, RegisterPage } from "@/pages";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { commonPaths } from "./common.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routeGenerator(commonPaths),
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute role={["admin"]}>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: routeGenerator(adminPaths),
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute role={["user"]}>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    //@ts-ignore
    children: routeGenerator(userPaths),
  },
  {
    path: "/signup",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
