import { selectUser } from "@/redux/features/auth/authSlice";
import { useUpdateSlotMutation } from "@/redux/features/slots/slotApi";
import { useAppSelector } from "@/redux/hooks";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    _id,
    startTime,
    endTime,
    date,
    service: { name, description, price, duration },
  } = location.state || {};

  const user = useAppSelector(selectUser);

  const [updateSlot] = useUpdateSlotMutation();

  const paymentFormData = new FormData();

  const handlePayment = async () => {
    const paymentData = {
      store_id: "aamarpaytest",
      signature_key: "dbb74894e82415a2f7ff0ec3a97e4183",
      tran_id: Math.random() * 10000,
      amount: price * 100,
      currency: "BDT",
      desc: name + " " + startTime,
      cus_name: user?.name,
      cus_email: user?.email,
      cus_phone: user?.phone,
      success_url: "http://localhost:5173/payment-succeess",
      fail_url: "http://localhost:5173/payment-failure",
      cancel_url: "http://localhost:5173/services",
      order_description: "Booking Slot",
      payment_method: "online",
      type: "json",
    };

    for (const x in paymentData) {
      paymentFormData.append(x, paymentData[x]);
    }
    // Make a request to Aamarpay API to initiate payment
    try {
      const response = await axios.post(
        "https://sandbox.aamarpay.com",
        paymentFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const data = await response.data;

      console.log("data from aamarpay", data);
      await updateSlot(_id);

      navigate("/payment-success");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="flex">
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
              <strong>Price:</strong> ${price}
            </p>
          </div>
          {/* Right Side */}
          <div className="w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">User Information</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">User Name</label>
                <input
                  type="text"
                  value={user?.name}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  value={user?.email}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Selected Time</label>
                <input
                  type="text"
                  value={startTime}
                  readOnly
                  className="w-full px-3 py-2 border rounded-lg bg-gray-100"
                />
              </div>
              <button
                type="button"
                onClick={handlePayment}
                className="w-full bg-blue-500 text-white py-2 rounded-lg"
              >
                Pay Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
