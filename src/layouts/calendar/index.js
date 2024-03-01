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

//Icons

//Images

function Calendar() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <DashboardLayout>
      <Header />
      <MDBox
        sx={({ functions: { pxToRem } }) => ({
          width: pxToRem(1580),
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: pxToRem(18),
          top: pxToRem(-45),
          position: "relative",
        })}
      >
        <MDBox
          sx={({ functions: { pxToRem } }) => ({
            width: "100%",
            height: pxToRem(200),
            borderRadius: pxToRem(16),
            background: "#fff",
            borderTop: "1px solid #e0e0e0",
            boxShadow: "0px 7px 23px 0px #0000000d",
            display: "flex",
            flexDirection: "column",
          })}
        >
          <MDBox
            sx={({ functions: { pxToRem } }) => ({
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              height: pxToRem(135),
              borderBottom: "1px solid #e0e0e0",
            })}
          >
            <MDBox
              sx={{
                flexGrow: 1,
                flexBasis: "0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                borderRight: "1px solid #e0e0e0",
              }}
            >
              <MDTypography
                sx={({ typography: { lexend }, functions: { pxToRem } }) => ({
                  fontFamily: lexend.fontFamily,
                  fontSize: 40,
                  fontWeight: 900,
                  lineHeight: pxToRem(50),
                  letterSpacing: 0,
                  textAlign: "center",
                  color: "#EC4162",
                })}
              >
                12
              </MDTypography>
              <MDTypography
                sx={({ typography: { lexend }, functions: { pxToRem } }) => ({
                  fontFamily: lexend.fontFamily,
                  fontSize: 16,
                  fontWeight: 700,
                  lineHeight: pxToRem(26),
                  letterSpacing: 0,
                  textAlign: "center",
                  color: "#4F4F4F",
                })}
              >
                LESSONS THIS WEEK
              </MDTypography>
            </MDBox>
            <MDBox
              sx={{
                flexGrow: 1,
                flexBasis: "0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                borderRight: "1px solid #e0e0e0",
              }}
            >
              <MDTypography
                sx={({ typography: { lexend }, functions: { pxToRem } }) => ({
                  fontFamily: lexend.fontFamily,
                  fontSize: 40,
                  fontWeight: 900,
                  lineHeight: pxToRem(50),
                  letterSpacing: 0,
                  textAlign: "center",
                  color: "#0ACF83",
                })}
              >
                12
              </MDTypography>
              <MDTypography
                sx={({ typography: { lexend }, functions: { pxToRem } }) => ({
                  fontFamily: lexend.fontFamily,
                  fontSize: 16,
                  fontWeight: 700,
                  lineHeight: pxToRem(26),
                  letterSpacing: 0,
                  textAlign: "center",
                  color: "#4F4F4F",
                })}
              >
                LESSONS THIS WEEK
              </MDTypography>
            </MDBox>
            <MDBox
              sx={{
                flexGrow: 1,
                flexBasis: "0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <MDTypography
                sx={({ typography: { lexend }, functions: { pxToRem } }) => ({
                  fontFamily: lexend.fontFamily,
                  fontSize: 40,
                  fontWeight: 900,
                  lineHeight: pxToRem(50),
                  letterSpacing: 0,
                  textAlign: "center",
                  color: "#0ACF83",
                })}
              >
                12
              </MDTypography>
              <MDTypography
                sx={({ typography: { lexend }, functions: { pxToRem } }) => ({
                  fontFamily: lexend.fontFamily,
                  fontSize: 16,
                  fontWeight: 700,
                  lineHeight: pxToRem(26),
                  letterSpacing: 0,
                  textAlign: "center",
                  color: "#4F4F4F",
                })}
              >
                LESSONS THIS WEEK
              </MDTypography>
            </MDBox>
          </MDBox>
          <MDBox
            sx={({ functions: { pxToRem } }) => ({
              height: pxToRem(65),
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            })}
          >
            <MDBox sx={({ functions: { pxToRem } }) => ({ display: "flex", gap: pxToRem(25) })}>
              {tabs.map((tab, index) => {
                const TabIcon = tab.icon;
                return (
                  <MDBox
                    key={index}
                    sx={({ functions: { pxToRem } }) => ({
                      cursor: "pointer",
                      borderRadius: "8px",
                      height: pxToRem(35),
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: pxToRem(4),
                      width: tab.width,

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
                        component={() => <TabIcon fill={tabIndex === index ? "#fff" : "#4f4f4f"} />}
                      />
                    </MDBox>

                    <MDTypography
                      variant="span"
                      sx={({ typography, functions: { pxToRem } }) => ({
                        fontFamily: typography.lexend.fontFamily,
                        fontSize: "15px",
                        fontWeight: 500,
                        lineHeight: pxToRem(23),
                        letterSpacing: "0em",
                        textAlign: "center",
                        color: tabIndex === index ? "#fff" : "#828282",
                      })}
                    >
                      {tab.title}
                    </MDTypography>
                  </MDBox>
                );
              })}
            </MDBox>
          </MDBox>
        </MDBox>

        <MDBox
          sx={({ functions: { pxToRem } }) => ({
            display: "flex",
            height: pxToRem(814),
            width: "100%",
            gap: pxToRem(22),
          })}
        >
          <WeeklyCalendar />
          <MonthCalendar />
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Calendar;
