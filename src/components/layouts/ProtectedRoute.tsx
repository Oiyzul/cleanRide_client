import { selectUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

type TProtectedRoute = {
  children: ReactNode;
  role: string[] | undefined;
};

const ProtectedRoute = ({ role, children }: TProtectedRoute) => {
  const location = useLocation();
  const user = useAppSelector(selectUser);
  // const token = useAppSelector(selectToken)
  // if (token) {
  //   //verify token
  //   // user = verifyToken(token)
  // }

  // if (!token) {
  //   return <Navigate to="/login" replace />;
  // }

  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;

  if (role !== undefined && !role.includes(user.role)) {
    //logout the user
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
