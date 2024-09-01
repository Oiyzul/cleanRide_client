import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
// import { tokenDecode } from "@/utils/tokenDecode";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  
  const from = (location.state?.from?.pathname || '/')

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await login(formData).unwrap();
      console.log("res", res);
      // const user = tokenDecode(res.token);

      dispatch(setUser({ user: res.data, token: res.token }));

      //display success message

      navigate(from, {replace:true});
    } catch (error: any) {
      console.log(error);
      setError(error.message);
      //display error message
    }
  };

  return (
    <div className="w-screen h-screen bg-black bg-opacity-70">
      <div className="max-w-md mx-auto pt-10 grid place-content-center h-full">
        <h2 className="text-2xl font-bold mb-6 text-white">Login</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow-md"
        >
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full min-w-[350px] p-2 border border-gray-300 rounded mt-1"
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
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Login
          </button>
        </form>
        {error && <p className="mt-4 text-red-500">{error}</p>}
        <p className="mt-6 text-center text-white">
          Don't have an account?{" "}
          <Link to="/signup" className="text-white font-semibold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
