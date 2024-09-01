import { useGetServicesQuery } from "@/redux/features/services/serviceApi";
import { MaxWidthWrapper, ServiceCard } from "@/components";

const FeaturedServicesSection = () => {
  const { data, isLoading } = useGetServicesQuery({});

  // if (isLoading) return <div>Loading...</div>;
  return (
    <MaxWidthWrapper>
      {isLoading ? (
        <div className="h-screen grid place-content-center">Loading...</div>
      ) : (
        <div className="mt-10 space-y-10">
          <h1 className="text-4xl font-semibold">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data?.data?.length > 0 &&
              data.data
                .slice(0, 6)
                .map((service: TService) => <ServiceCard {...service} />)}
          </div>
        </div>
      )}
    </MaxWidthWrapper>
  );
};

export default FeaturedServicesSection;
