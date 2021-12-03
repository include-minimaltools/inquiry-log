import React from "react";
import { useRoutes } from 'react-router-dom';
import { Interface } from "./shared/interface";
import Login from "./views/auth";
import Events from "./views/events";
import InquiryForm from "./views/inquiry/form";
import InquiryList from "./views/inquiry/list";
import Profile from "./views/profile";

function Routes() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Interface><Events/></Interface>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/inquiry',
      element: <Interface><InquiryForm action='new'/></Interface>
    },
    {
      path: '/inquiry-list',
      element: <Interface><InquiryList/></Interface>
    },
    {
      path: '/profile',
      element: <Interface><Profile/></Interface>
    },
    {
      path: '*',
      element: <Interface/>
    },
  ]);

  return routes;
}

export default Routes;
