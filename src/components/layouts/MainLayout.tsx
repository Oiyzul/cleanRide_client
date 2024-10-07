import { Outlet } from "react-router-dom";
import Navbar from "../navbars/Navbar";
import FooterSection from "../sections/FooterSection";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <FooterSection />
    </>
  );
};

export default MainLayout;
