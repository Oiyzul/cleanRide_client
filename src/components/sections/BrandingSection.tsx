import { Link } from "react-router-dom";
import { Button } from "../ui/button";

import { ImageSlider } from "@/components";

const BrandingSection = () => {
  return (
    <div className="relative">
      <ImageSlider />
      <div className="absolute bottom-[15%] left-[7%] flex flex-col gap-7">
        <p className="md:text-4xl font-bold text-white uppercase">
          Exclusive Offer
        </p>
        <h1 className="text-2xl md:text-6xl font-bold text-white uppercase">
          We protect your <br /> investment
        </h1>
        <Button
          asChild
          className="bg-gray-900 hover:bg-gray-700 md:px-20 md:py-7 md:text-2xl uppercase"
        >
          <Link to={"/services"}>Choose your service</Link>
        </Button>
      </div>
      <div className="absolute bottom-0 right-0 w-[300px] md:w-[700px] h-20 bg-white custom-clip"></div>
    </div>
  );
};

export default BrandingSection;
