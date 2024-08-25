import { Booking, Home, ServiceDetails, Services } from "@/pages";

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
        element: <Booking />,
      },
    ],
  },
];
