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

import { useEffect, useState } from "react";

// react-router-dom components
import { useLocation, NavLink, useNavigate } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React examples
import SidenavCollapse from "examples/Sidenav/SidenavCollapse";
import SidenavList from "examples/Sidenav/SidenavList";
import SidenavItem from "examples/Sidenav/SidenavItem";

// Custom styles for the Sidenav
import SidenavRoot from "examples/Sidenav/SidenavRoot";
import sidenavLogoLabel, { sidenavName } from "examples/Sidenav/styles/sidenav";
import { sidenavAvatar } from "examples/Sidenav/styles/sidenavAvatar";

// Material Dashboard 2 PRO React context
import {
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
} from "context";
import { IconButton, Popover, Popper, Typography } from "@mui/material";
import { sidenavBottom } from "./styles/sidenav";

import RightButton from "assets/images/apollo-english/right-button.svg";
import LogoutIcon from "components/icons/LogoutIcon";

function Sidenav({ color, brand, brandName, routes, avatar, ...rest }) {
  const [openCollapse, setOpenCollapse] = useState(false);
  const [openNestedCollapse, setOpenNestedCollapse] = useState(false);
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode } = controller;
  const location = useLocation();
  const { pathname } = location;
  const collapseName = pathname.split("/").slice(1)[0];
  const items = pathname.split("/").slice(1);
  const itemParentName = items[1];
  const itemName = items[items.length - 1];

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "popover-profile" : undefined;

  let textColor = "white";

  if (transparentSidenav || (whiteSidenav && !darkMode)) {
    textColor = "dark";
  } else if (whiteSidenav && darkMode) {
    textColor = "inherit";
  }

  const closeSidenav = () => setMiniSidenav(dispatch, true);

  useEffect(() => {
    setOpenCollapse(collapseName);
    setOpenNestedCollapse(itemParentName);
  }, []);

  useEffect(() => {
    // A function that sets the mini state of the sidenav.
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 1200);
      setTransparentSidenav(dispatch, window.innerWidth < 1200 ? false : transparentSidenav);
      setWhiteSidenav(dispatch, window.innerWidth < 1200 ? false : whiteSidenav);
    }

    /** 
     The event listener that's calling the handleMiniSidenav function when resizing the window.
    */
    window.addEventListener("resize", handleMiniSidenav);

    // Call the handleMiniSidenav function to set the state with the initial value.
    handleMiniSidenav();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch, location]);

  // Render all the nested collapse items from the routes.js
  const renderNestedCollapse = (collapse) => {
    const template = collapse.map(({ name, route, key, href }) =>
      href ? (
        <Link
          key={key}
          href={href}
          target="_blank"
          rel="noreferrer"
          sx={{ textDecoration: "none" }}
        >
          <SidenavItem name={name} nested />
        </Link>
      ) : (
        <NavLink to={route} key={key} sx={{ textDecoration: "none" }}>
          <SidenavItem name={name} active={route === pathname} nested />
        </NavLink>
      )
    );

    return template;
  };
  // Render the all the collpases from the routes.js
  const renderCollapse = (collapses) =>
    collapses.map(({ name, collapse, route, href, key }) => {
      let returnValue;

      if (collapse) {
        returnValue = (
          <SidenavItem
            key={key}
            color={color}
            name={name}
            active={key === itemParentName ? "isParent" : false}
            open={openNestedCollapse === key}
            onClick={({ currentTarget }) =>
              openNestedCollapse === key && currentTarget.classList.contains("MuiListItem-root")
                ? setOpenNestedCollapse(false)
                : setOpenNestedCollapse(key)
            }
          >
            {renderNestedCollapse(collapse)}
          </SidenavItem>
        );
      } else {
        returnValue = href ? (
          <Link
            href={href}
            key={key}
            target="_blank"
            rel="noreferrer"
            sx={{ textDecoration: "none" }}
          >
            <SidenavItem color={color} name={name} active={key === itemName} />
          </Link>
        ) : (
          <NavLink to={route} key={key} sx={{ textDecoration: "none" }}>
            <SidenavItem color={color} name={name} active={key === itemName} />
          </NavLink>
        );
      }
      return <SidenavList key={key}>{returnValue}</SidenavList>;
    });

  // Render all the routes from the routes.js (All the visible items on the Sidenav)
  const renderRoutes = routes.map(
    ({ type, name, icon, iconActive, title, collapse, noCollapse, key, href, route }) => {
      let returnValue;

      if (type === "collapse") {
        if (href) {
          returnValue = (
            <Link
              href={href}
              key={key}
              target="_blank"
              rel="noreferrer"
              sx={{ textDecoration: "none" }}
            >
              <SidenavCollapse
                name={name}
                icon={icon}
                iconActive={iconActive}
                active={key === collapseName}
                noCollapse={noCollapse}
              />
            </Link>
          );
        } else if (noCollapse && route) {
          returnValue = (
            <NavLink to={route} key={key}>
              <SidenavCollapse
                name={name}
                icon={icon}
                iconActive={iconActive}
                noCollapse={noCollapse}
                active={key === collapseName}
              >
                {collapse ? renderCollapse(collapse) : null}
              </SidenavCollapse>
            </NavLink>
          );
        } else {
          returnValue = (
            <SidenavCollapse
              key={key}
              name={name}
              icon={icon}
              iconActive={iconActive}
              active={key === collapseName}
              open={openCollapse === key}
              onClick={() => (openCollapse === key ? setOpenCollapse(false) : setOpenCollapse(key))}
            >
              {collapse ? renderCollapse(collapse) : null}
            </SidenavCollapse>
          );
        }
      } else if (type === "title") {
        returnValue = (
          <MDTypography
            key={key}
            color={textColor}
            display="block"
            variant="caption"
            fontWeight="bold"
            textTransform="uppercase"
            pl={3}
            mt={2}
            mb={1}
            ml={1}
          >
            {title}
          </MDTypography>
        );
      } else if (type === "divider") {
        returnValue = (
          <Divider
            key={key}
            light={
              (!darkMode && !whiteSidenav && !transparentSidenav) ||
              (darkMode && !transparentSidenav && whiteSidenav)
            }
            sx={{ marginBottom: 1 }}
          />
        );
      }

      return returnValue;
    }
  );

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <SidenavRoot
      {...rest}
      variant="permanent"
      ownerState={{ transparentSidenav, whiteSidenav, miniSidenav, darkMode }}
      sx={{ display: "flex", flexDirection: "columns" }}
    >
      <MDBox sx={{ flexGrow: 1, flexBais: 0 }}>
        <MDBox p={3} textAlign="center">
          <MDBox
            display={{ xs: "block", xl: "none" }}
            position="absolute"
            top={0}
            right={0}
            p={1.625}
            onClick={closeSidenav}
            sx={{ cursor: "pointer" }}
          >
            <MDTypography variant="h6" color="secondary">
              <Icon sx={{ fontWeight: "bold" }}>close</Icon>
            </MDTypography>
          </MDBox>
          <MDBox
            sx={{
              flexDirection: "column",
              display: miniSidenav ? "block" : "flex",
              alignItems: miniSidenav ? "unset" : "center",
              cursor: "pointer",
            }}
            aria-describedby={id}
            variant="contained"
            onClick={handleClick}
          >
            {avatar && (
              <MDBox
                component="img"
                src={avatar}
                alt="Avatar"
                width="2rem"
                borderRadius="50%"
                sx={(theme) => sidenavAvatar(theme, { miniSidenav })}
              />
            )}
            <MDBox
              width={!avatar && "100%"}
              sx={(theme) => sidenavLogoLabel(theme, { miniSidenav })}
            >
              <MDTypography
                component="h6"
                variant="button"
                fontWeight="medium"
                color={textColor}
                sx={(theme) => sidenavName(theme, { miniSidenav })}
              >
                Teacher - U0212
              </MDTypography>
            </MDBox>
          </MDBox>

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            sx={{
              top: 0,

              "& .MuiPopover-paper": {
                overflowY: "hidden",
                padding: "0 !important",
              },
            }}
          >
            <MDBox
              sx={{
                width: "375px",
                borderRadius: "15px",
                background: "#fff",
                height: "322px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 0,
                boxShadow: 3,
              }}
            >
              <MDBox sx={{ width: "100%", height: "322px", padding: "24px" }}>
                <MDTypography
                  sx={{
                    color: "#1f2024",
                    fontFamily: "Lexend",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "normal",
                    letterSpacing: "0.2px",
                    marginBottom: "16px",
                  }}
                >
                  Quick profile management
                </MDTypography>
                <MDTypography
                  sx={{
                    color: "#71727a",
                    fontFamily: "Lexend",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "20px",
                    marginBottom: "41px",
                  }}
                >
                  Choose your interests.
                </MDTypography>

                <MDBox sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {[
                    "Change your password",
                    "Set up your login pin",
                    "Change your profile password",
                  ].map((item, index) => (
                    <MDBox
                      key={index}
                      sx={{
                        width: "100%",
                        height: "52px",
                        padding: "16px",
                        textAlign: "left",
                        borderRadius: "12px",
                        border: "0.5px solid #c5c6cc",
                        cursor: "pointer",

                        "&:hover": {
                          background: "#eaf2ff",
                          borderColor: "#eaf2ff",
                          backgroundImage: `url(${RightButton})`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 16px center",
                        },
                      }}
                    >
                      <MDTypography
                        sx={{
                          color: "#1f2024",
                          fontFamily: "Lexend",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "20px",
                        }}
                      >
                        {item}
                      </MDTypography>
                    </MDBox>
                  ))}
                </MDBox>
              </MDBox>
            </MDBox>
          </Popover>
        </MDBox>
        <List sx={{ display: "flex", flexDirection: "column", gap: 2 }}>{renderRoutes}</List>
      </MDBox>

      <MDBox sx={{ padding: "20px 5px", display: "flex", alignItems: "center" }}>
        <MDBox mr={1} sx={{ display: "flex", height: 16 }}>
          <Icon component={LogoutIcon} sx={{ height: 16 }} />
        </MDBox>
        <Typography variant="span" sx={(theme) => sidenavBottom(theme)} onClick={handleLogout}>
          {miniSidenav ? "L" : "Logout"}
        </Typography>
        <Typography variant="span" sx={(theme) => sidenavBottom(theme)}>
          &nbsp;|&nbsp;
        </Typography>
        <Typography variant="span" sx={(theme) => sidenavBottom(theme)}>
          {miniSidenav ? "C" : "Change password"}
        </Typography>
      </MDBox>
    </SidenavRoot>
  );
}

// Setting default values for the props of Sidenav
Sidenav.defaultProps = {
  color: "info",
  brand: "",
};

// Typechecking props for the Sidenav
Sidenav.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  avatar: PropTypes.string,
};

export default Sidenav;
