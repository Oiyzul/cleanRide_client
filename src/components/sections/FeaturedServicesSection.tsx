import { MaxWidthWrapper, ServiceCard } from "@/components";
import { useGetServicesQuery } from "@/redux/features/services/serviceApi";

const FeaturedServicesSection = () => {
  const { data = [], isLoading } = useGetServicesQuery({});

  if (isLoading) return <div>Loading...</div>;
  return (
    <section className="py-5">
      <MaxWidthWrapper>
        {isLoading ? (
          <div className="h-screen grid place-content-center">Loading...</div>
        ) : (
          <div className="mt-10 space-y-10">
            <div className="text-center">
              <p className="text-red-700 font-semibold mb-3">What We Offer</p>
              <h1 className="text-3xl md:text-5xl font-semibold">
                Premium Washing Services
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {data?.data?.length > 0 &&
                data.data.map((service: TService, index: number) => (
                  <ServiceCard
                    service={service}
                    index={index}
                    dataLength={data.data.length}
                  />
                ))}
            </div>
          </div>
        )}
      </MaxWidthWrapper>
    </section>
  );
};

export default FeaturedServicesSection;
