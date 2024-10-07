import { Car } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo-clip p-2">
      <Link to="/" className="flex flex-col justify-center gap-0">
      <div className="flex items-center gap-2">

        <h1 className="text-blue-200 text-2xl font-bold flex items-center gap-3 tracking-widest">
          CleanRide 
        </h1>
        <Car className="text-cyan-100" size={34} />
      </div>
        <p className="text-cyan-100 text-[10px] tracking-wide">Ride Clean, Ride Happy</p>
      </Link>
    </div>
  );
};

export default Logo;
