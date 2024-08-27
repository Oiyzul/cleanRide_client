import { useState } from "react";
import { useLocation } from "react-router-dom";

const BookingPage = () => {
  const location = useLocation();
  const {
    startTime,
    endTime,
    date,
    service: { name, description, price, duration },
  } = location.state || {};
  console.log("data router");

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const handlePayment = () => {
    // Redirect to AAMARPAY and mark slot as booked
    window.location.href = "https://sandbox.aamarpay.com";
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
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
