import { MaxWidthWrapper } from "@/components";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <MaxWidthWrapper className="grid place-content-center gap-3 mt-20">
      <h1 className="text-3xl font-semibold text-red-500">
        Oops! Page Not Found: 404
      </h1>
      <p className="text-2xl font-semibold">
        The requested page does not exist.
      </p>
      <p>Let's get you back on track:</p>
      <ul className="text-blue-500 text-xl">
        <li>
          <Link to="/">Go to Home</Link>
        </li>
        <li>
          <Link to="/login">Go to Login</Link>
        </li>
        {/* Add more safe page links */}
      </ul>
    </MaxWidthWrapper>
  );
};

export default NotFoundPage;
