import carbg from "/car-bg.png";
import carbg2 from "/car-bg-2.png";
import MaxWidthWrapper from "../others/MaxWidthWrapper";

const CarCleaning = () => {
  return (
    <MaxWidthWrapper className="mt-5 hidden lg:block">
      <h1 className="text-5xl font-bold text-center mb-10">We Make It Clean</h1>
      <div className="flex h-full">
        <div className="w-full h-full flex flex-col items-center">
          <div>
            <img src={carbg2} />
          </div>
          <p className="text-xl font-semibold">Before</p>
        </div>
        <div className="w-full h-full flex flex-col items-center">
          <div>
            <img src={carbg} className="" />
          </div>
          <p className="text-xl font-semibold">After</p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default CarCleaning;
