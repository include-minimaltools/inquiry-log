import React from "react";
import { useRoutes } from 'react-router-dom';
import { Interface } from "./shared/interface";
import Login from "./views/auth";
import Events from "./views/events";
import InquiryForm from "./views/inquiry/form";
import { InquiryList, InquiryPendingList, MyInquiryList } from "./views/inquiry/list";
import { InquiryTypeList } from "./views/inquiry/type/list";
import { PermissionList } from "./views/permission";
import Profile from "./views/profile";
import { RoleList } from "./views/role/list";
import { UserList } from "./views/user/list";

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
      path: '/inquiry-pending-list',
      element: <Interface><InquiryPendingList/></Interface>
    },
    {
      path: '/inquiry-list',
      element: <Interface><InquiryList/></Interface>
    },
    {
      path: '/role-list',
      element: <Interface><RoleList/></Interface>
    },
    {
      path: '/permission-list',
      element: <Interface><PermissionList/></Interface>
    },
    {
      path: '/user-list',
      element: <Interface><UserList/></Interface>
    },
    {
      path: '/my-inquiry-list',
      element: <Interface><MyInquiryList/></Interface>
    },
    {
      path: '/inquiry-types',
      element: <Interface><InquiryTypeList/></Interface>
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
