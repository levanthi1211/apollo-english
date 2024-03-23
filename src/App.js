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

import { useState, useEffect, useMemo } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";

// Material Dashboard 2 PRO React examples
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

// Material Dashboard 2 PRO React themes
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";

// Material Dashboard 2 PRO React Dark Mode themes
import themeDark from "assets/theme-dark";
import themeDarkRTL from "assets/theme-dark/theme-rtl";

// RTL plugins
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// Material Dashboard 2 PRO React routes
import routes from "routes";
import { AuthWrapper } from "shared/router/authWrapper";

// Material Dashboard 2 PRO React contexts
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "context";

// Images
import brandWhite from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";
import Login from "pages/sign-in";
import ChangePassword from "pages/change-password";
import { useSelector } from "react-redux";
import authSlice from "shared/redux/slices/authSlice";
import { selectAuth } from "shared/redux/slices/authSlice";
import AuthVerify from "shared/router/authVerify";
import { useDispatch } from "react-redux";
import { Backdrop, CircularProgress } from "@mui/material";
import { selectTheme } from "shared/redux/slices/themeSlice";
import { setGlobalLoading } from "shared/redux/slices/themeSlice";

export default function App() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();
  const auth = useSelector(selectAuth);
  const reduxTheme = useSelector(selectTheme);
  const { accessToken, refreshToken } = auth;
  const { globalLoading } = reduxTheme;

  const isAuthenticated = accessToken && refreshToken;

  // Cache for the rtl
  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    // if (miniSidenav && !onMouseEnter) {
    //   setMiniSidenav(dispatch, false);
    //   setOnMouseEnter(true);
    // }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            element={
              route.isPrivate ? (
                <AuthWrapper isAllowed={isAuthenticated} redirectPath={route.redirectPath}>
                  {route.component}
                </AuthWrapper>
              ) : (
                route.component
              )
            }
            key={route.key}
          />
        );
      }

      return null;
    });

  const configsButton = (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="small" color="inherit">
        settings
      </Icon>
    </MDBox>
  );

  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      {isAuthenticated && layout === "dashboard" && (
        <>
          <Sidenav
            avatar="https://s3-alpha-sig.figma.com/img/364f/a00c/2982f2eb08c14e03a610657e49749295?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vdyoqo46yRhPft6zG3Cq7UZfEM9v8S1loLJutO1nh6TYilDZ1kO-cM3aiRcGx~Achw6tyMUmwVwn-NQWcr9oPtNVpfPf6jGHjz18zMrRNkS0RwiN-oVg~K1nAsdNH6jU2EBqPrCLqgnAx13tArO99sz1WzTL0LFU2kHm731~losCMyJ6YbzqQ9Jlo77bHOfD~jnZTSnrgp7AbkMLzuMdC518RilgRNhXpVPmwyGDOO1gLPdP8PyMWxTZrj63mM8nFTG4jRFf7A~JcaP7Mr9AIOa6Cqzn0Qs3aeosVmsHJ8rYb7DAeYZ5kk~raUm4V5Gh2Hgsbpp2xQYwGcYSvVTqPw__"
            color={sidenavColor}
            brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
            brandName="Material Dashboard PRO"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <Configurator />
          {configsButton}
        </>
      )}
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/sign-in" />} />
      </Routes>
      <AuthVerify />
      <Backdrop
        sx={{ color: "#fff", zIndex: 9999 }}
        open={globalLoading}
        onClick={() => {
          dispatch(
            setGlobalLoading({
              isLoading: false,
            })
          );
        }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </ThemeProvider>
  );
}
