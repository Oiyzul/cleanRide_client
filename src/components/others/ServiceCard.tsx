import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type TProps = {
  service: TService;
  onSelect: (service: TService) => void;
  selected: boolean;
};
const ServiceCard = ({ service, onSelect, selected }: TProps) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{service?.name}</h2>
      <p>{service?.description.substring(0, 100)}...</p>
      <p>Price: ${service?.price}</p>
      <p>Duration: {service?.duration} mins</p>
      {/* <p>Features: {service?.features?.join(", ")}</p> */}
      <div className="flex justify-between">
        <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded">
          <Link to={`/services/${service?._id}`}>View Details</Link>
        </button>
        <button
          className={cn(
            selected ? "bg-gray-900" : "bg-gray-500",
            "mt-2 text-white py-1 px-4 rounded"
          )}
          onClick={() => onSelect(service)}
        >
          Compare
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
