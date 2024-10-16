import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { cn } from "@/lib/utils";
import { Check, Clock, X } from "lucide-react";
import { Button } from "../ui/button";

const ServiceCard = ({
  service,
  index,
  dataLength
}: {
  service: TService;
  index: number;
  dataLength: number;
}) => {
  return (
    <Card
      style={
        index === dataLength - 1
          ? {
              backgroundImage: `url(${service.imgUrl})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }
          : { background: "inherit" }
      }
      className={cn(
        "relative",
        index === dataLength - 1 && "text-white z-10 font-semibold"
      )}
    >
      <div
        className={cn(
          index === dataLength - 1 &&
            "w-full h-full absolute top-0 -z-10 bg-black/40 rounded-md"
        )}
      ></div>
      <CardHeader className="flex flex-col items-center">
        <CardTitle
          className={cn(
            "text-red-700 text-xl",
            index === dataLength - 1 && "text-white"
          )}
        >
          {service.name}
        </CardTitle>
        <p className="text-xl font-bold flex">
          <span>$</span> <span className="text-5xl">{service.price}</span>
        </p>
        <p className="flex items-center gap-3">
          <span
            className={cn(
              "text-red-500",
              index === dataLength - 1 && "text-white"
            )}
          >
            <Clock size={17} />
          </span>{" "}
          <span className="font-semibold">
            {`${service.duration - 15} - ${service.duration}`} Mins
          </span>
        </p>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {service.features.map((feature) => (
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
              <Check size={10} strokeWidth={2} absoluteStrokeWidth />
            </span>{" "}
            <span>{feature}</span>
          </div>
        ))}
        {service?.unavailableFeatures &&
          service.unavailableFeatures.map((feature) => (
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold">
                <X size={10} strokeWidth={2} absoluteStrokeWidth />
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
          <Link to={`/services/${service._id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
