import { Outlet } from "react-router-dom";
import Navbar from "../navbars/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
