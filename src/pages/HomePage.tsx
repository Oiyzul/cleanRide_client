import {
  AboutUs,
  BrandingSection,
  CarCleaning,
  FeaturedServicesSection,
  Process,
  ReviewSection,
  Statistics,
} from "@/components";
import { selectUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";

const Home = () => {
  const user = useAppSelector(selectUser);
  console.log(user);
  return (
    <div>
      <BrandingSection />
      <AboutUs />
      <Process />
      <FeaturedServicesSection />
      <CarCleaning />
      <Statistics />
      <ReviewSection />
    </div>
  );
};

export default Home;
