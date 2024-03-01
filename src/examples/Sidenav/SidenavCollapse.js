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

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";

// Custom styles for the SidenavCollapse
import {
  collapseItem,
  collapseIconBox,
  collapseIcon,
  collapseText,
  collapseArrow,
  collapseBagde,
  collapseBadgeText,
} from "examples/Sidenav/styles/sidenavCollapse";

// Material Dashboard 2 PRO React context
import { useMaterialUIController } from "context";
import { SvgIcon, Typography } from "@mui/material";

function SidenavCollapse({ icon, iconActive, name, children, active, noCollapse, open, ...rest }) {
  const [controller] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode } = controller;
  console.log(icon);
  return (
    <>
      <ListItem component="li">
        <MDBox
          {...rest}
          sx={(theme) =>
            collapseItem(theme, { active, transparentSidenav, whiteSidenav, darkMode, miniSidenav })
          }
        >
          <MDBox
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              flexBasis: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ListItemIcon
              sx={(theme) => collapseIconBox(theme, { transparentSidenav, whiteSidenav, darkMode })}
            >
              {typeof icon === "string" ? (
                <Icon sx={(theme) => collapseIcon(theme, { active })}>{icon}</Icon>
              ) : active ? (
                iconActive ?? icon
              ) : (
                icon
              )}
            </ListItemIcon>

            <ListItemText
              primary={name}
              sx={(theme) =>
                collapseText(theme, {
                  miniSidenav,
                  transparentSidenav,
                  whiteSidenav,
                  active,
                })
              }
            />
          </MDBox>

          <Icon
            sx={(theme) =>
              collapseArrow(theme, {
                noCollapse,
                transparentSidenav,
                whiteSidenav,
                miniSidenav,
                open,
                active,
                darkMode,
              })
            }
          >
            expand_less
          </Icon>
          {(name === "Home page" || name === "My Assistant") && (
            <MDBox
              sx={(theme) =>
                collapseBagde(theme, {
                  noCollapse,
                  transparentSidenav,
                  whiteSidenav,
                  miniSidenav,
                  open,
                  active,
                  darkMode,
                })
              }
            >
              <Typography variant="span" sx={(theme) => collapseBadgeText(theme)}>
                1
              </Typography>
            </MDBox>
          )}
        </MDBox>
      </ListItem>
      {children && (
        <Collapse in={open} unmountOnExit>
          {children}
        </Collapse>
      )}
    </>
  );
}

// Setting default values for the props of SidenavCollapse
SidenavCollapse.defaultProps = {
  active: false,
  noCollapse: false,
  children: false,
  open: false,
};

// Typechecking props for the SidenavCollapse
SidenavCollapse.propTypes = {
  icon: PropTypes.node.isRequired,
  iconActive: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  active: PropTypes.bool,
  noCollapse: PropTypes.bool,
  open: PropTypes.bool,
};

export default SidenavCollapse;
