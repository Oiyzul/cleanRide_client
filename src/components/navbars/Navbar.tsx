import { Logo, MaxWidthWrapper } from "@/components";
import { cn } from "@/lib/utils";
import { logout, selectUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  // const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  const user = useAppSelector(selectUser);

  const dispatch = useAppDispatch();

  // const handleScroll = () => {
  //   if (window.scrollY > 200) {
  //     setVisible(true);
  //   } else {
  //     setVisible(false);
  //   }
  // }
  // useEffect(()=>{
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // },[])
  const onToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className={cn("sticky top-0 z-50 text-white bg-black")}>
      <nav className="h-[80px] md:h-[80px] px-4 flex items-center p-2 md:p-4 xl:p-8">
        <MaxWidthWrapper>
          <div className="w-full flex items-center justify-between relative">
            <Logo />
            <div>
              <ul className="hidden md:flex items-center gap-5 font-semibold text-white">
                <li className="">
                  <Link to="/services">Services</Link>
                </li>

                {user?.role ? (
                  <>
                    <li className="">
                      <Link to={`/${user.role}/dashboard`}>Dashboard</Link>
                    </li>
                    <li>
                      <Button asChild onClick={handleLogout}>
                        <Link to="/">Logout</Link>
                      </Button>
                    </li>
                  </>
                ) : (
                  <li>
                    <Button asChild>
                      <Link to="/login">Login</Link>
                    </Button>
                  </li>
                )}
                {/* dark light theme */}
                {/* <ModeToggle /> */}
              </ul>
            </div>

            <div className="md:hidden">
              <button
                id="menu-btn"
                className="text-gray-200 hover:text-white focus:outline-none"
                onClick={onToggle}
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>

            {open && (
              <div className="md:hidden absolute -right-4 top-14 z-30 p-20 bg-gray-800">
                <ul className="flex flex-col items-center gap-10 text-lg">
                  <li
                    className="text-gray-200 hover:text-white"
                    onClick={onToggle}
                  >
                    <Link to="/services">Services</Link>
                  </li>
                  {user ? (
                    <>
                      <li
                        className="text-gray-200 hover:text-white"
                        onClick={onToggle}
                      >
                        <Link to={`/${user.role}/dashboard`}>Dashboard</Link>
                      </li>
                      <li>
                        <Button asChild onClick={handleLogout}>
                          <Link to="/">Logout</Link>
                        </Button>
                      </li>
                    </>
                  ) : (
                    <li>
                      <Button asChild>
                        <Link to="/login">Login</Link>
                      </Button>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </MaxWidthWrapper>
      </nav>
    </header>
  );
};

export default Navbar;
