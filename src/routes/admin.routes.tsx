import {
  AddService,
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
    title: "Service Management",
    children: [
      {
        name: "Service List",
        path: "service-list",
        element: <ServiceList />,
      },
      {
        name: "Add Service",
        path: "create-service",
        element: <AddService />,
      },
    ],
  },
  {
    title: "Slot Management",
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
    title: "User Management",
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
