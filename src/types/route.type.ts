import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TRouteItem = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TRouteItem[];
};
