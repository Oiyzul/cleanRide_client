
import { PastBookings, Profile, UpcomingBookings, UserDashboard } from "@/pages/user-dashboard";


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
      },
      {
        name: "Profile",
        path: "profile",
        element: <Profile />
      }
    ]
  }
];
