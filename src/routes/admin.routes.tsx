import {
  AdminDashboard,
  CreateSlot,
  ServiceList,
  SlotList,
  UserBookings,
  UserList,
} from "@/pages/admin";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Service Management",
    children: [
      {
        name: "Service List",
        path: "service-list",
        element: <ServiceList />,
      },
      {
        name: "Add Service",
        path: "create-service",
        element: <ServiceList />,
      },
    ],
  },
  {
    name: "Slot Management",
    children: [
      {
        name: "Slot List",
        path: "slot-list",
        element: <SlotList />,
      },
      {
        name: "Create Slot",
        path: "create-slot",
        element: <CreateSlot />,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "User List",
        path: "users",
        element: <UserList />,
      },
      {
        name: "User Bookings",
        path: "bookings",
        element: <UserBookings />,
      },
    ],
  },
];
