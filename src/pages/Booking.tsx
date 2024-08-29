import BookingForm from "@/components/forms/BookingForm";
import { createBookingValidationSchema } from "@/components/modals/schemas";
import { selectUser } from "@/redux/features/auth/authSlice";
import { useCreateBookingMutation } from "@/redux/features/bookings/bookingApi";
import { useAppSelector } from "@/redux/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { z } from "zod";

const BookingPage = () => {
  const location = useLocation();
  const user = useAppSelector(selectUser);
  const [createBooking] = useCreateBookingMutation();
  const [error, setError] = useState("");

  const {
    _id: slotId,
    startTime,
    endTime,
    date,
    service: { _id: serviceId, name, description, price, duration },
  } = location.state || {};

  const form = useForm<z.infer<typeof createBookingValidationSchema>>({
    resolver: zodResolver(createBookingValidationSchema),
    defaultValues: {
      customerName: user?.name || "",
      email: user?.email || "",
      serviceId: serviceId || "",
      slotId: slotId || "",
      vehicleType: "car",
      vehicleBrand: "",
      vehicleModel: "",
      manufacturingYear: 0,
      registrationPlate: "",
    },
  });
  const onSubmit = async (data: any) => {
    try {
      const res = await createBooking(data).unwrap();
      console.log("res", res);
      if (res.success) {
        console.log("res", res, "Booking created successfully.");

        window.location.href = res.data.payment_url;
      } else if (!res.success) {
        console.log("Failed to create booking.");
        setError(res?.message);
      }
    } catch (err: any) {
      console.log(err);
      setError(err?.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="flex flex-col md:flex-row gap-5">
          {/* Left Side */}
          <div className="w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">Selected Service</h2>
            <p className="mb-2">
              <strong>Service:</strong> {name}
            </p>
            <p className="mb-2">
              <strong>Description:</strong> {description}
            </p>
            <p className="mb-2">
              <strong>Date:</strong> {date}
            </p>
            <p className="mb-2">
              <strong>Time Slot:</strong> {startTime} | {endTime}
            </p>
            <p className="mb-2">
              <strong>Duration:</strong> {duration} minutes
            </p>
            <p className="mb-2">
              <strong>Price:</strong> {price} BDT
            </p>
          </div>
          {/* Right Side */}
          <div className="w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">Booking Information</h2>
            <BookingForm form={form} onSubmit={onSubmit} />
            {error ? (
              <p className="text-red-500 font-semibold mt-5">{error}</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
