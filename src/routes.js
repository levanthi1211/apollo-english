/**
=========================================================
* Material Dashboard 2 PRO React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Dashboard 2 PRO React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

import Home from "layouts/home";
import Calendar from "layouts/calendar";

/* Custom Icons */
import MenuHomeIcon from "components/icons/MenuHomeIcon";
import MenuHomeActiveIcon from "components/icons/MenuHomeActiveIcon";
import MenuAsistantIcon from "components/icons/MenuAsistantIcon";
import MenuAsistantActiveIcon from "components/icons/MenuAsistantActiveIcon";
import MenuDevelopmentIcon from "components/icons/MenuDevelopmentIcon";
import MenuDevelopmentActiveIcon from "components/icons/MenuDevelopmentActiveIcon";
import MenuPerformanceIcon from "components/icons/MenuPerformanceIcon";
import MenuPerformanceActiveIcon from "components/icons/MenuPerformanceActiveIcon";
import MenuCalendarIcon from "components/icons/MenuCalendarIcon";
import MenuCalendarActiveIcon from "components/icons/MenuCalendarActiveIcon";
import MenuSelf from "components/icons/MenuSelf";
import MenuSelfActive from "components/icons/MenuSelfActive";

const routes = [
  { type: "divider", key: "divider-0" },
  {
    type: "collapse",
    name: "Home page",
    key: "",
    icon: <MenuHomeIcon />,
    iconActive: <MenuHomeActiveIcon />,
    noCollapse: true,
    component: <Home />,
    route: "/",
  },
  {
    type: "collapse",
    name: "My Assistant",
    key: "assistant",
    icon: <MenuAsistantIcon />,
    iconActive: <MenuAsistantActiveIcon />,
    collapse: [
      {
        name: "Assistant 1",
        key: "assistant-1",
        route: "/assistant/assistant-1",
        component: () => <></>,
      },
      {
        name: "Assistant 2",
        key: "assistant-2",
        route: "/assistant/assistant-2",
        component: () => <></>,
      },
      {
        name: "Assistant 3",
        key: "assistant-3",
        route: "/assistant/assistant-3",
        component: () => <></>,
      },
    ],
  },
  {
    type: "collapse",
    name: "My Development",
    key: "development",
    icon: <MenuDevelopmentIcon />,
    iconActive: <MenuDevelopmentActiveIcon />,
    noCollapse: true,
    component: () => <></>,
    route: "/development",
  },
  {
    type: "collapse",
    name: "My Performance",
    key: "performance",
    icon: <MenuPerformanceIcon />,
    iconActive: <MenuPerformanceActiveIcon />,
    noCollapse: true,
    component: () => <></>,
    route: "/performance",
  },
  {
    type: "collapse",
    name: "Myself",
    key: "myself",
    icon: <MenuSelf />,
    iconActive: <MenuSelfActive />,
    noCollapse: true,
    component: () => <></>,
    route: "/self",
  },
  {
    type: "collapse",
    name: "My Calendar",
    key: "calendar",
    icon: <MenuCalendarIcon />,
    iconActive: <MenuCalendarActiveIcon />,
    noCollapse: true,
    component: <Calendar />,
    route: "/calendar",
  },
];

export default routes;
