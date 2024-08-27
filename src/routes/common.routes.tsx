import ProtectedRoute from "@/components/layouts/ProtectedRoute";
import { Booking, Home, PaymentFailPage, PaymentSuccessPage, ServiceDetails, Services } from "@/pages";

export const commonPaths = [
  {
    name: "App",
    children: [
      {
        name: "Home",
        path: "/",
        element: <Home />,
      },
      {
        name: "Services",
        path: "/services",
        element: <Services />,
      },
      {
        name: "Service Details",
        path: "/services/:id",
        element: <ServiceDetails />,
      },
      {
        name: "Bookings",
        path: "/bookings",
        element: (
          <ProtectedRoute role='user'>
            <Booking />,
          </ProtectedRoute>
        ),
      },
      {
        name: "Payment Success",
        path: "/payment-success",
        element: <PaymentSuccessPage />,
      },
      {
        name: "Payment Failure",
        path: "/payment-failure",
        element: <PaymentFailPage />,
      },
    ],
  },
];
