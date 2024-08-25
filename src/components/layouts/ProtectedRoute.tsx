import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
};

const ProtectedRoute = ({ role, children }: TProtectedRoute) => {
  let user = {
      role: "admin",
    },
    token = 'dfhkd';

  if (token) {
    //verify token
    // user = verifyToken(token)
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (role !== undefined && user.role !== role) {
    //logout the user
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
