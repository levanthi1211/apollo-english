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

// @mui material components
import Icon from "@mui/material/Icon";
import { Grid } from "@mui/material";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Header from "examples/Header";

// Calendar components

// Data
import tabs from "./data/tabs";
import { useState, useRef } from "react";

import WeeklyCalendar from "./components/WeeklCalendar";
import MonthCalendar from "./components/MonthCalendar";
import calendarStyles from "./styles/calendar";

//Icons

//Images

function Calendar() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <DashboardLayout>
      <Header />
      <MDBox sx={(theme) => calendarStyles(theme)}>
        <MDBox
          sx={({ functions: { pxToRem } }) => ({
            width: "100%",
            borderRadius: pxToRem(16),
            background: "#fff",
            borderTop: "1px solid #e0e0e0",
            boxShadow: "0px 7px 23px 0px #0000000d",
            display: "flex",
            flexDirection: "column",
          })}
        >
          <MDBox
            sx={() => ({
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #e0e0e0",
            })}
          >
            {[1, 2, 3].map((value) => {
              return (
                <MDBox
                  key={value}
                  sx={({ functions: { pxToRem } }) => ({
                    flexGrow: 1,
                    flexBasis: "0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    padding: `${pxToRem(27)} 0`,
                    "&:not(:last-child)": {
                      borderRight: "1px solid #e0e0e0",
                    },
                  })}
                >
                  <MDTypography
                    sx={({ breakpoints, typography: { lexend }, functions: { pxToRem } }) => ({
                      fontFamily: lexend.fontFamily,
                      fontSize: 40,
                      fontWeight: 900,
                      lineHeight: pxToRem(50),
                      textAlign: "center",
                      color: "#EC4162",

                      [breakpoints.down("xl")]: {
                        fontSize: 34,
                        lineHeight: pxToRem(42.5),
                      },

                      [breakpoints.down("lg")]: {
                        fontSize: 28,
                        lineHeight: pxToRem(35),
                      },

                      [breakpoints.down("md")]: {
                        fontSize: 22,
                        lineHeight: pxToRem(27.5),
                      },
                    })}
                  >
                    12
                  </MDTypography>
                  <MDTypography
                    sx={({ breakpoints, typography: { lexend }, functions: { pxToRem } }) => ({
                      fontFamily: lexend.fontFamily,
                      fontSize: 16,
                      fontWeight: 700,
                      lineHeight: pxToRem(26),
                      textAlign: "center",
                      color: "#4F4F4F",

                      [breakpoints.down("xl")]: {
                        fontSize: 14,
                        lineHeight: pxToRem(23),
                      },

                      [breakpoints.down("lg")]: {
                        fontSize: 12,
                        lineHeight: pxToRem(20),
                      },

                      [breakpoints.down("md")]: {
                        fontSize: 10,
                        lineHeight: pxToRem(17),
                      },
                    })}
                  >
                    LESSONS THIS WEEK
                  </MDTypography>
                </MDBox>
              );
            })}
          </MDBox>
          <MDBox
            sx={({ functions: { pxToRem } }) => ({
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: `${pxToRem(14)}`,
            })}
          >
            <Grid container columnSpacing="25px" justifyContent="center">
              {tabs.map((tab, index) => {
                const TabIcon = tab.icon;
                return (
                  <Grid item xs={6} sm="auto" key={index}>
                    <MDBox
                      sx={({ functions: { pxToRem } }) => ({
                        cursor: "pointer",
                        borderRadius: "8px",
                        height: pxToRem(35),
                        padding: `0 ${pxToRem(18)}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: pxToRem(4),

                        ...(tabIndex === index ? { background: "#3b6ef8" } : {}),
                      })}
                      onClick={() => setTabIndex(index)}
                    >
                      <MDBox
                        sx={({ functions: { pxToRem } }) => ({
                          width: pxToRem(18),
                          height: pxToRem(18),
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        })}
                      >
                        <Icon
                          component={() => (
                            <TabIcon fill={tabIndex === index ? "#fff" : "#4f4f4f"} />
                          )}
                        />
                      </MDBox>

                      <MDTypography
                        variant="span"
                        sx={({ typography, breakpoints, functions: { pxToRem } }) => ({
                          fontFamily: typography.lexend.fontFamily,
                          fontSize: 15,
                          fontWeight: 500,
                          lineHeight: pxToRem(23),
                          letterSpacing: "0em",
                          textAlign: "center",
                          color: tabIndex === index ? "#fff" : "#828282",

                          [breakpoints.down("md")]: {
                            display: "none",
                          },
                        })}
                      >
                        {tab.title}
                      </MDTypography>
                    </MDBox>
                  </Grid>
                );
              })}
            </Grid>
          </MDBox>
        </MDBox>

        <MDBox
          sx={({ functions: { pxToRem } }) => ({
            height: pxToRem(814),
            width: "100%",
          })}
        >
          <Grid container columnSpacing="22px" rowGap="22px">
            <Grid item xs={12} xl>
              <WeeklyCalendar />
            </Grid>
            <Grid
              item
              xs={12}
              xl="auto"
              sx={({ breakpoints }) => ({
                [breakpoints.down("xl")]: {
                  marginBottom: "22px",
                },
              })}
            >
              <MonthCalendar />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Calendar;
