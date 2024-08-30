import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { MaxWidthWrapper, ScrollToTop } from "@/components";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <MaxWidthWrapper className="">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">CarWash</h2>
            <p className="mb-4">1234 Street Name, City, State, 12345</p>
            <p>Email: info@carwash.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/bookings" className="hover:underline">
                  Bookings
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/reviews" className="hover:underline">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                <Facebook />
              </a>
              <a href="#" className="hover:text-gray-400">
                <Twitter />
              </a>
              <a href="#" className="hover:text-gray-400">
                <Instagram />
              </a>
              <a href="#" className="hover:text-gray-400">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          © {new Date().getFullYear()} CarWash. All rights reserved.
        </div>

        <ScrollToTop />
      </MaxWidthWrapper>
    </footer>
  );
};

export default FooterSection;
