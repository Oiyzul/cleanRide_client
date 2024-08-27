import { selectToken, selectUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
};

const ProtectedRoute = ({ role, children }: TProtectedRoute) => {
  const user = useAppSelector(selectUser)
  // const token = useAppSelector(selectToken)
  // if (token) {
  //   //verify token
  //   // user = verifyToken(token)
  // }

  // if (!token) {
  //   return <Navigate to="/login" replace />;
  // }

  if(!user) return <Navigate to="/login" replace />;

  if (role !== undefined && user.role !== role) {
    //logout the user
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
