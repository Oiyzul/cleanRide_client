import { useSignupMutation } from "@/redux/features/auth/authApi";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const [signup] = useSignupMutation();
  const defaultValues = {
    name: "user",
    email: "user@example.com",
    password: "user",
    phone: "121121312",
    address: "city state, Dhaka.",
  };

  useEffect(() => {
    setFormData(defaultValues);
    setMessage("");
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //toast message
    try {
      if (formData.email && formData.password) {
        const response = await signup(formData).unwrap();
        console.log("response", response);
        if (response.success) {
          navigate("/login");
        }
      } else {
        // toast message fill up email and password
      }
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="w-screen h-screen bg-black bg-opacity-70">
      <div className="max-w-md mx-auto pt-10 grid place-content-center">
        <h2 className="text-2xl font-bold mb-6 text-white">Sign Up</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow-md"
        >
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full min-w-[350px] p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Sign Up
          </button>
        </form>
        {message && <p className="mt-4 text-red-500">{message}</p>}
        <p className="py-4 text-center text-white">
          Already have an account?{" "}
          <Link to="/login" className="text-white font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
