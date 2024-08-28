import { selectUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import {
  BookCheck,
  CalendarPlus,
  ClipboardList,
  CopyPlus,
  LayoutDashboard,
  ListTodo,
  UserRoundCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const DashboardSidebar = () => {
  const user = useAppSelector(selectUser);

  const sidebarItems = [
    {
      title: "Dashboard",
      items: [
        {
          icon: <LayoutDashboard />,
          label: "Dashboard",
          href: `/${user?.role}/dashboard`,
          visible: ["admin", "user"],
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
          visible: ["admin"],
        },
        {
          icon: <CopyPlus />,
          label: "Add Service",
          href: "create-service",
          visible: ["admin"],
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
          visible: ["admin"],
        },
        {
          icon: <CalendarPlus />,
          label: "Create Slot",
          href: "create-slot",
          visible: ["admin"],
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
          visible: ["admin"],
        },
        {
          icon: <BookCheck />,
          label: "Bookings",
          href: "bookings",
          visible: ["admin"],
        },
        {
          icon: <BookCheck />,
          label: "Profile",
          href: "me",
          visible: ["user"],
        },
        {
          icon: <BookCheck />,
          label: "Bookings",
          href: "my-bookings",
          visible: ["user"],
        },
        {
          icon: <BookCheck />,
          label: "Upcoming Bookings",
          href: "my-bookings",
          visible: ["user"],
        },
      ],
    },
  ];
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
      {sidebarItems?.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-500 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes(user?.role)) {
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
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default DashboardSidebar;
