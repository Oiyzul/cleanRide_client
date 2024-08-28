import { TRouteItem, TSidebarItem } from "@/types";
import { NavLink } from "react-router-dom";

export const sidebarItemGenerator = (items: TRouteItem[], role: string) => {
  const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        label: item.name,
        path: <NavLink to={`/${role}/${item.path}`}>{item.path}</NavLink>,
      });
    }

    if (item.children) {
      acc = [...acc, ...sidebarItemGenerator(item.children, role)];
    }

    return acc;
  }, []);

  return sidebarItems;
};
