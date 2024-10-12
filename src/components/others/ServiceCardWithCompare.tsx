import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Check, Clock, X } from "lucide-react";
import { Button } from "../ui/button";

type TProps = {
  service: TService;
  onSelect: (service: TService) => void;
  selected: boolean;
};
const ServiceCardWithCompare = ({ service, onSelect, selected }: TProps) => {
  return (
    <Card className={cn("relative")}>
      <CardHeader className="flex flex-col items-center pb-2">
        <CardTitle className={cn("text-red-700 text-xl")}>
          {service.name}
        </CardTitle>
        <p className="text-xl font-bold flex">
          <span>$</span> <span className="text-4xl">{service.price}</span>
        </p>
        <p className="flex items-center gap-3">
          <span className={cn("text-red-700")}>
            <Clock size={17} />
          </span>{" "}
          <span className="font-semibold">
            {`${service.duration - 15} - ${service.duration}`} Mins
          </span>
        </p>
      </CardHeader>
      <CardContent className="flex flex-col gap-1">
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
      <CardFooter className="flex flex-col items-center justify-between">
        <Button
          asChild
          className="uppercase bg-red-700 hover:bg-red-900 w-full"
        >
          <Link to={`/services/${service._id}`}>View Details</Link>
        </Button>
        <Button
          className={cn(
            selected ? "bg-gray-800" : "",
            "mt-2 text-white py-1 px-4 rounded w-full"
          )}
          onClick={() => onSelect(service)}
        >
          Compare
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCardWithCompare;
