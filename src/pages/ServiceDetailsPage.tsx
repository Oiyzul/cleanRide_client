// ServiceDetails.js
import { MaxWidthWrapper } from "@/components";
import { useGetSingleServiceQuery } from "@/redux/features/services/serviceApi";
import { useGetSlotsQuery } from "@/redux/features/slots/slotApi";
import { getAmPm } from "@/utils/getAmPm";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = ({ service }: { service: TService }) => {
  return (
    <div>
      {!service && <div>No service found.</div>}
      <h1 className="text-3xl font-bold mb-4">{service.name}</h1>
      <p className="mb-4 md:w-2/3 lg:w-full text-lg text-gray-500">{service.description}</p>
      <p className="mb-2 text-xl">Price: <span className="font-semibold">${service.price}</span> </p>
      <p className="mb-4 text-lg">Duration: <span className="font-semibold">{service.duration} mins</span> </p>
      <div>
        <p className="text-xl font-semibold ">Features:</p>
        {service.features.map((feature, index:number) => <p key={feature} className="font-semibold">{index + 1}. {feature}</p>)}
      </div>

      {/* error handling */}
    </div>
  );
};

const ServiceSlots = ({ service }: { service: TService }) => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [selectedSlot, setSelectedSlot] = useState<TSlot>();

  const {
    data = [],
    isLoading,
    refetch,
  } = useGetSlotsQuery([
    { key: "serviceId", value: service._id },
    { key: "date", value: selectedDate },
  ]);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event?.target.value);
    refetch();
  };

  const handleSlotClick = (slot: TSlot) => {
    setSelectedSlot(slot);
    console.log("selected slot", selectedSlot, slot);
  };

  if (isLoading) <div>Loading available slots...</div>;

  return (
    <div className="">
      <div className="mb-4">
        <label className="block mb-2">Select Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="p-2 border rounded-md"
        />
      </div>
      {!data?.data?.length ? (
        <p className="mb-2 font-semibold">No slots available for this date.</p>
      ) : null}

      <div className="mb-4">
        <label className="block mb-2">Available Time Slots:</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-4">
          {data?.data?.length &&
            data?.data?.map((slot: TSlot) => (
              <button
                key={slot._id}
                onClick={() => handleSlotClick(slot)}
                className={`p-2 border rounded-md ${
                  slot.isBooked !== "available"
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-500 text-white"
                } ${selectedSlot?._id === slot._id && "bg-green-500"} `}
                disabled={slot.isBooked !== "available"}
              >
                {`${slot.startTime} ${getAmPm(slot.startTime)}`} -{" "}
                {`${slot.endTime} ${getAmPm(slot.endTime)}`}
              </button>
            ))}
        </div>
      </div>

      {selectedSlot?._id && (
        <Link to={"/bookings"} state={selectedSlot}>
          <button className="mt-4 w-1/3 py-2 bg-green-500 text-white rounded-md">
            Book This Service
          </button>
        </Link>
      )}
    </div>
  );
};

const ServiceDetailsPage = () => {
  const { id } = useParams();
  const { data = [], isLoading } = useGetSingleServiceQuery(id as string);
  return (
    <section className="section">
      <MaxWidthWrapper className="mt-10">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 xl:gap-20">
            <ServiceDetails service={data.data} />
            <ServiceSlots service={data.data} />
          </div>
        )}
      </MaxWidthWrapper>
    </section>
  );
};

export default ServiceDetailsPage;
