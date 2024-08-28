import { Outlet } from "react-router-dom";
import DashboardNavbar from "../DashboardNavbar";
import Sidebar from "../DashboardSidebar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex">
      {/* left */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] p-4">
        <Sidebar />
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[84%] bg-[#F7F8FA] overflow-scroll flex flex-col">
        <DashboardNavbar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
