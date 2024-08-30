import App from "@/App";
import ProtectedRoute from "@/components/layouts/ProtectedRoute";
import {
  BookingPage,
  HomePage,
  ServiceDetailsPage,
  ServicesPage,
} from "@/pages";

export const commonPaths = [
  {
    name: "App",
    children: [
      {
        name: "Home",
        path: "/",
        element: <HomePage />,
      },
      {
        name: "Services",
        path: "/services",
        element: <ServicesPage />,
      },
      {
        name: "Service Details",
        path: "/services/:id",
        element: <ServiceDetailsPage />,
      },
      {
        name: "Bookings",
        path: "/bookings",
        element: (
          <ProtectedRoute role="user">
            <BookingPage />,
          </ProtectedRoute>
        ),
      },
    ],
  },
];
