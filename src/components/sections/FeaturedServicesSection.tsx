import { useGetServicesQuery } from "@/redux/features/services/serviceApi";
import MaxWidthWrapper from "../MaxWidthWrapper";
import ServiceCard from "../ServiceCard";

const FeaturedServicesSection = () => {
  const { data, isLoading, error } = useGetServicesQuery({});

  return (
    <MaxWidthWrapper>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="mt-10 space-y-10">
          <h1 className="text-4xl font-semibold">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.data.length &&
              data.data.map((service) => <ServiceCard {...service} />)}
          </div>
        </div>
      )}
      {error && <div>Error: {error.message}</div>}
    </MaxWidthWrapper>
  );
};

export default FeaturedServicesSection;
