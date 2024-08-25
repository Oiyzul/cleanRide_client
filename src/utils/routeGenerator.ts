import { TRoute, TRouteItem } from "@/types";

export const routeGenerator = (items:TRouteItem[]) => {
    const routes = items.reduce((acc:TRoute[], item:TRouteItem) => {
      if (item.path && item.element) {
        acc.push({
          path: item.path,
          element: item.element,
        });
      }
  
      if (item.children) {
        acc = [...acc, ...routeGenerator(item.children)];
      }
  
      return acc;
    }, []);
  
    return routes;
  };
  