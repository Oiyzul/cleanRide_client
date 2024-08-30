
import { UserDashboard } from "@/pages/user-dashboard";
import PastBookings from "@/pages/user-dashboard/PastBookings";
import UpcomingBookings from "@/pages/user-dashboard/UpcomingBookings";

export const userPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <UserDashboard />,
  },
  {
    title: 'User Bookins',
    children: [
      {
        name: "Past Bookings",
        path: "past-bookings",
        element: <PastBookings />
      },
      {
        name: "Upcoming Bookings",
        path: "upcoming-bookings",
        element: <UpcomingBookings />
      }
    ]
  }
];
