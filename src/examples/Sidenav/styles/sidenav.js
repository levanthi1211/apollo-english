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
export default function sidenavLogoLabel(theme, ownerState) {
  const { transitions, breakpoints } = theme;
  const { miniSidenav } = ownerState;

  return {
    ml: 0.5,
    transition: transitions.create("opacity", {
      easing: transitions.easing.easeInOut,
      duration: transitions.duration.standard,
    }),
    width: "100%",

    [breakpoints.up("xl")]: {
      opacity: miniSidenav ? 0 : 1,
    },
  };
}

export function sidenavName(theme, ownerState) {
  const { transitions, typography, breakpoints } = theme;
  const { miniSidenav } = ownerState;

  return {
    transition: transitions.create("opacity", {
      easing: transitions.easing.easeInOut,
      duration: transitions.duration.standard,
    }),

    color: "#1576BC",
    fontFamily: typography.lexend.fontFamily,
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "140%",

    [breakpoints.up("xl")]: {
      opacity: miniSidenav ? 0 : 1,
      display: miniSidenav ? "none" : "block",
    },
  };
}

export function sidenavBottom(theme) {
  const { typography } = theme;

  return {
    color: "#1576BC",
    fontFamily: typography.openSan.fontFamily,
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "140%",
    cursor: "pointer",
  };
}
