import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
// import { tokenDecode } from "@/utils/tokenDecode";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

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

      navigate(from, { replace: true });
    } catch (error: any) {
      console.log(error);
      setError(error.message);
      //display error message
    }
  };

  return (
    <div className="w-screen h-screen relative">
      <img
        src="https://ik.imagekit.io/waizul/carwash2.jpg"
        alt="backgound"
        className="absolute top-0 w-screen h-screen object-cover"
      />
      <div className="h-full grid place-content-center bg-black/90 relative z-50 text-white">
        <div className="bg-transparent max-w-md mx-auto pt-10 shadow-xl shadow-white p-5">
          <h2 className="text-2xl font-bold mb-10">Login</h2>
          <form onSubmit={handleSubmit} className="rounded shadow-md">
            <div className="mb-4">
              <label className="block ">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full min-w-[350px] p-2 border-b-2 border-gray-50 rounded mt-1 bg-gray-50/10 focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border-b-2 border-gray-50 rounded mt-1 bg-gray-50/10 focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full hover:bg-gray-200 hover:text-black p-2 rounded bg-transparent text-white 
              border hover:border-gray-200 border-white"
            >
              Login
            </button>
          </form>
          <div>
            <button
              type="button"
              className="mt-5 w-full flex items-center justify-center gap-2 hover:bg-gray-200 hover:text-black p-2 rounded bg-transparent text-white 
              border hover:border-gray-200 border-white"
            >
              <svg
                width="20px"
                height="20px"
                viewBox="-0.5 0 48 48"
                version="1.1"
              >
                <g
                  id="Icons"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="Color-"
                    transform="translate(-401.000000, -860.000000)"
                  >
                    <g
                      id="Google"
                      transform="translate(401.000000, 860.000000)"
                    >
                      <path
                        d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                        id="Fill-1"
                        fill="#FBBC05"
                      ></path>
                      <path
                        d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                        id="Fill-2"
                        fill="#EB4335"
                      ></path>
                      <path
                        d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                        id="Fill-3"
                        fill="#34A853"
                      ></path>
                      <path
                        d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                        id="Fill-4"
                        fill="#4285F4"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>{" "}
              Login with Google
            </button>
          </div>
          {error && <p className="mt-4 text-red-500">{error}</p>}
          <p className="mt-6 text-center text-white">
            Don't have an account?{" "}
            <Link to="/signup" className="text-white font-semibold">
              Sign up
            </Link>
          </p>

          <div className="flex justify-between gap-5">
            <button
              type="submit"
              className="mt-5 w-full flex items-center justify-center gap-2 hover:bg-gray-200 hover:text-black p-2 rounded bg-transparent text-white 
              border hover:border-gray-200 border-white"
              onClick={() =>
                setFormData({ email: "user@example.com", password: "user" })
              }
            >
              Demo User
            </button>
            <button
              type="button"
              className="mt-5 w-full flex items-center justify-center gap-2 hover:bg-gray-200 hover:text-black p-2 rounded bg-transparent text-white 
              border hover:border-gray-200 border-white"
              onClick={() =>
                setFormData({ email: "admin@example.com", password: "admin" })
              }
            >
              Demo Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
