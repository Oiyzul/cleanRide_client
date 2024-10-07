import { selectUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import {
  BookCheck,
  CalendarPlus,
  ClipboardList,
  LayoutDashboard,
  ListTodo,
  PlusCircle,
  UserRoundCheck
} from "lucide-react";
import { Link } from "react-router-dom";

const DashboardSidebar = () => {
  const user = useAppSelector(selectUser);

  // return (
  //   <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
  //     <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
  //       <Link
  //         to="#"
  //         className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
  //       >
  //         <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
  //         <span className="sr-only">Acme Inc</span>
  //       </Link>
  //       <TooltipProvider>
  //         <Tooltip>
  //           <TooltipTrigger asChild>
  //             <Link
  //               to="#"
  //               className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
  //             >
  //               <Home className="h-5 w-5" />
  //               <span className="sr-only">Dashboard</span>
  //             </Link>
  //           </TooltipTrigger>
  //           <TooltipContent side="right">Dashboard</TooltipContent>
  //         </Tooltip>
  //         <Tooltip>
  //           <TooltipTrigger asChild>
  //             <Link
  //               to="#"
  //               className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
  //             >
  //               <ShoppingCart className="h-5 w-5" />
  //               <span className="sr-only">Orders</span>
  //             </Link>
  //           </TooltipTrigger>
  //           <TooltipContent side="right">Orders</TooltipContent>
  //         </Tooltip>
  //         <Tooltip>
  //           <TooltipTrigger asChild>
  //             <Link
  //               to="#"
  //               className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
  //             >
  //               <Package className="h-5 w-5" />
  //               <span className="sr-only">Products</span>
  //             </Link>
  //           </TooltipTrigger>
  //           <TooltipContent side="right">Products</TooltipContent>
  //         </Tooltip>
  //         <Tooltip>
  //           <TooltipTrigger asChild>
  //             <Link
  //               to="#"
  //               className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
  //             >
  //               <Users2 className="h-5 w-5" />
  //               <span className="sr-only">Customers</span>
  //             </Link>
  //           </TooltipTrigger>
  //           <TooltipContent side="right">Customers</TooltipContent>
  //         </Tooltip>
  //         <Tooltip>
  //           <TooltipTrigger asChild>
  //             <Link
  //               to="#"
  //               className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
  //             >
  //               <LineChart className="h-5 w-5" />
  //               <span className="sr-only">Analytics</span>
  //             </Link>
  //           </TooltipTrigger>
  //           <TooltipContent side="right">Analytics</TooltipContent>
  //         </Tooltip>
  //       </TooltipProvider>
  //     </nav>
  //     <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
  //       <TooltipProvider>
  //         <Tooltip>
  //           <TooltipTrigger asChild>
  //             <Link
  //               to="#"
  //               className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
  //             >
  //               <Settings className="h-5 w-5" />
  //               <span className="sr-only">Settings</span>
  //             </Link>
  //           </TooltipTrigger>
  //           <TooltipContent side="right">Settings</TooltipContent>
  //         </Tooltip>
  //       </TooltipProvider>
  //     </nav>
  //   </aside>
  // );

  return (
    <div className="sticky top-10 mt-4 text-sm">
      <Link to="/">CarWash</Link>
      {(user?.role === "admin" ? adminSidebar : userSidebar)?.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-500 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            return (
              <Link
                to={item.href}
                key={item.label}
                className="flex items-center justify-center lg:justify-start gap-4 text-gray-900 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
              >
                {item.icon}
                <span className="hidden lg:block">{item.label}</span>
              </Link>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default DashboardSidebar;

const adminSidebar = [
  {
    title: "Dashboard",
    items: [
      {
        icon: <LayoutDashboard />,
        label: "Dashboard",
        href: "/admin/dashboard",
      },
    ],
  },
  {
    title: "Service Management",
    items: [
      {
        icon: <ClipboardList />,
        label: "Service List",
        href: "service-list",
      },
      {
        icon: <PlusCircle />,
        label: "Add Service",
        href: "add-service",
      },
    ],
  },
  {
    title: "Slot Management",
    items: [
      {
        icon: <ListTodo />,
        label: "Slot List",
        href: "slot-list",
      },
      {
        icon: <CalendarPlus />,
        label: "Create Slot",
        href: "create-slot",
      },
    ],
  },
  {
    title: "User Management",
    items: [
      {
        icon: <UserRoundCheck />,
        label: "User List",
        href: "users",
      },
      {
        icon: <BookCheck />,
        label: "All Bookings",
        href: "bookings",
      },
    ],
  },
];

const userSidebar = [
  {
    title: "Dashboard",
    items: [
      {
        icon: <LayoutDashboard />,
        label: "Dashboard",
        href: "/user/dashboard",
      },
      {
        icon: <BookCheck />,
        label: "Past Bookings",
        href: "past-bookings",
      },
      {
        icon: <BookCheck />,
        label: "Upcoming Bookings",
        href: "upcoming-bookings",
      },
      {
        icon: <BookCheck />,
        label: "Profile",
        href: "profile",
      },
    ],
  },
];
