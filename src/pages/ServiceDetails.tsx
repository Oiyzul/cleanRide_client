// ServiceDetails.js
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useGetSingleServiceQuery } from "@/redux/features/services/serviceApi";
import { useGetSlotsQuery } from "@/redux/features/slots/slotApi";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = ({ service }) => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [selectedSlot, setSelectedSlot] = useState({});

  const {
    data = [],
    isLoading,
    refetch,
  } = useGetSlotsQuery([
    { key: "serviceId", value: service._id },
    { key: "date", value: selectedDate },
  ]);
  // console.log(data?.data?.length);

  const bookedSlots = ["10:00 AM", "01:00 PM"]; // Example of booked slots

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    refetch();
  };

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
    console.log('selected slot', selectedSlot);
  };

  // if (isLoading) return <div>Loading available slots...</div>;
  // if (!service) return <div>No service found.</div>;
  // if (!data.data?.length) return <div>No slots available for this date.</div>;
  // console.log(service);

  return (
    <div className="p-6">
      {/* make seperate components for service details and time slots */}
      <h1 className="text-3xl font-bold mb-4">{service.name}</h1>
      <p className="mb-4">{service.description}</p>
      <p className="mb-4">Price: ${service.price}</p>
      <p className="mb-4">Duration: {service.duration} mins</p>

      {/* error handling */}
      {!service ? (
        <div>No service found.</div>
      ) : isLoading ? (
        <div>Loading available slots...</div>
      ) : !data?.data?.length ? (
        <div>No slots available for this date.</div>
      ) : null}

      <div className="mb-4">
        <label className="block mb-2">Select Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="p-2 border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Available Time Slots:</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-4">
          {data?.data?.length &&
            data?.data?.map((slot) => (
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
                {slot.startTime} | {slot.endTime}
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
  const { data = [], isLoading } = useGetSingleServiceQuery(id);
  return (
    <MaxWidthWrapper className="p-6">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ServiceDetails service={data.data} />
      )}
    </MaxWidthWrapper>
  );
};

export default ServiceDetailsPage;
