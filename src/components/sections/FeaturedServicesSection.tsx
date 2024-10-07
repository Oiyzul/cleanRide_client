import { MaxWidthWrapper } from "@/components";
import { cn } from "@/lib/utils";
import { useGetServicesQuery } from "@/redux/features/services/serviceApi";
import { Check, Clock, X } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Link } from "react-router-dom";

const FeaturedServicesSection = () => {
  const { data = [], isLoading } = useGetServicesQuery({});

  if (isLoading) return <div>Loading...</div>;
  return (
    <section className="min-h-screen">
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
                  <Card
                    className={cn(
                      "p-2 lg:p-4",
                      index === data.data.length - 1 && "bg-black/70 text-white"
                    )}
                  >
                    <CardHeader className="flex flex-col items-center">
                      <CardTitle
                        className={cn(
                          "text-red-700 text-xl",
                          index === data.data.length - 1 && "text-white"
                        )}
                      >
                        {service.name}
                      </CardTitle>
                      <p className="text-xl font-bold flex">
                        <span>$</span>{" "}
                        <span className="text-5xl">{service.price}</span>
                      </p>
                      <p className="flex items-center gap-3">
                        <span
                          className={cn(
                            "text-red-500",
                            index === data.data.length - 1 && "text-white"
                          )}
                        >
                          <Clock size={17} />
                        </span>{" "}
                        <span className="font-semibold">
                          {`${service.duration - 15} - ${service.duration}`}{" "}
                          Mins
                        </span>
                      </p>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2">
                      {service.features.map((feature) => (
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                            <Check
                              size={10}
                              strokeWidth={2}
                              absoluteStrokeWidth
                            />
                          </span>{" "}
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service?.unavailableFeatures &&
                        service.unavailableFeatures.map((feature) => (
                          <div className="flex items-center gap-2">
                            <span className="w-4 h-4 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold">
                              <X
                                size={10}
                                strokeWidth={2}
                                absoluteStrokeWidth
                              />
                            </span>{" "}
                            <span>{feature}</span>
                          </div>
                        ))}
                    </CardContent>
                    <CardFooter>
                      <Button
                        asChild
                        className="uppercase bg-red-700 hover:bg-red-900 w-full"
                      >
                        <Link to={`/services/${service._id}`}>
                          View Details
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>
        )}
      </MaxWidthWrapper>
    </section>
  );
};

export default FeaturedServicesSection;
