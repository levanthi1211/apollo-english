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

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";

// Material Dashboard 2 PRO React Context Provider
import { MaterialUIControllerProvider } from "context";

// Redux Provider
import { Providers } from "shared/redux/provider";

// Toasts
import { ToastContainer } from "react-toastify";

// CSS Libraries
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <Providers>
    <BrowserRouter>
      <MaterialUIControllerProvider>
        <App />
        <ToastContainer />
      </MaterialUIControllerProvider>
    </BrowserRouter>
  </Providers>
);
