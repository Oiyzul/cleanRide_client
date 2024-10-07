import { Anvil, Gem, Medal } from "lucide-react";
import MaxWidthWrapper from "../others/MaxWidthWrapper";

const AboutUs = () => {
  return (
    <section className="min-h-screen grid place-content-center">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="relative">
            <img src="https://ik.imagekit.io/waizul/car-detailing.jpg" alt="" className="max-h-[500px] w-full object-cover" />
            <div className="absolute top-5 -left-5 w-10 h-56 bg-gray-700"></div>
            <div className="absolute -bottom-5 right-5 w-40 h-10 bg-cyan-700"></div>
          </div>

          <div className="flex flex-col gap-7">
            <p className="uppercase text-gray-500 text-xl font-bold">Car Detailing</p>
            <h2 className="uppercase text-4xl font-bold">Specialized in high-end car grooming</h2>
            <p className="text-xl font-semibold text-gray-500">
            Our team of experts is here to help you with all your car needs. We offer a wide range of services, including detailing, painting, and car wash. From basic car maintenance to more advanced features, we have got you covered.
            </p>

            <div className="flex justify-between bg-gray-400 text-white py-2 px-10 font-semibold text-2xl rounded-md">
              <div className="flex items-center gap-2">
              <Gem className="text-cyan-900" /> QUALITY
              </div>
              <div className="flex items-center gap-2">
              <Medal className="text-cyan-900" /> SERVICE
              </div>
              <div className="flex items-center gap-2">
              <Anvil className="text-cyan-900" /> PASSION
              </div>
            </div>
            <p className="text-2xl font-bold uppercase">Benefit from over 25 years experience when you book your vehicle in cleanride.</p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default AboutUs;
