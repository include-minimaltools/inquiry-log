import React from "react";
import { useRoutes } from 'react-router-dom';
import { Interface } from "./shared/interface";
import Login from "./views/auth";

function Routes() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Interface>Home</Interface>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/inquiry/:id',
      element: <Interface>Home</Interface>
    },
    {
      path: '/inquiry-list',
      element: <Interface>Home</Interface>
    },
    {
      path: '/profile',
      element: <Interface>Home</Interface>
    },
    {
      path: '*',
      element: <Interface/>
    },
  ]);

  return routes;
}

export default Routes;
