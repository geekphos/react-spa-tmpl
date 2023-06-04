import React from "react";
import { RouteObject } from "react-router-dom";
import Home from "../pages/home";

export const router: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
];
