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
export function sidenavAvatar(theme, { miniSidenav }) {
  const { functions, transitions, breakpoints } = theme;

  const { pxToRem } = functions;

  return {
    marginBottom: pxToRem(miniSidenav ? 0 : 12),

    transition: transitions.create("opacity", {
      easing: transitions.easing.easeInOut,
      duration: transitions.duration.standard,
    }),

    width: miniSidenav ? 48 : 80,
    height: miniSidenav ? 48 : 80,
  };
}
