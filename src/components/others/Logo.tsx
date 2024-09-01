import { Car } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo-clip w-[180px] cursor-pointer bg-sky-900 p-2">
      <Link to="/" className="flex flex-col justify-center gap-0">
        <h1 className="text-2xl font-[700] flex items-center gap-3 ">
          CleanRide <Car />
        </h1>
        <p className="text-[10px]">Ride Clean, Ride Happy</p>
      </Link>
    </div>
  );
};

export default Logo;
