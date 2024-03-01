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
import MDInput from "components/MDInput";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Header from "examples/Header";

// Home components
import Card from "./components/Card";
import SpecialCard from "./components/SpecialCard";
import Leaderboard from "./components/Leaderboard";
import Table from "./components/TableContent";

// Data
import { cards } from "./data/card";
import leaderboards from "./data/leaderboar";
import Advertise from "./components/Advertise";
import categories from "./data/categories";

//Icons
import CategoryArrowIcon from "components/icons/CategoryArrowIcon";

//Images
import SearchImage from "assets/images/apollo-english/search.jpg";

function Home() {
  return (
    <DashboardLayout>
      <Header />
      <MDBox
        sx={({ functions: { pxToRem } }) => ({
          width: pxToRem(1580),
          margin: "0 auto",
          top: "-20px",
          position: "relative",
        })}
      >
        <MDBox sx={{ display: "flex", justifyContent: "space-between" }}>
          <SpecialCard />
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </MDBox>

        <MDBox
          sx={({ functions: { pxToRem } }) => ({
            display: "flex",
            marginTop: pxToRem(24),
            justifyContent: "space-between",
          })}
        >
          {leaderboards.map((leaderboard, index) => (
            <Leaderboard key={index} {...leaderboard} />
          ))}
          <Advertise />
        </MDBox>

        <MDBox
          sx={({ functions: { pxToRem } }) => ({
            display: "flex",
            marginTop: pxToRem(29),
            justifyContent: "space-between",
          })}
        >
          <MDBox sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            {categories.map((category, index) => (
              <MDBox
                key={index}
                sx={({ palette, functions: { pxToRem } }) => ({
                  borderRadius: pxToRem(15),
                  border: "1px solid #e2e2e2",
                  background: palette.white.main,
                  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                  padding: `${pxToRem(16)} 0`,
                  width: `${pxToRem(295)}`,
                })}
              >
                <MDTypography
                  variant="h5"
                  sx={({ typography, functions: { pxToRem } }) => ({
                    color: "#161616",
                    fontFamily: typography.openSan.fontFamily,
                    fontSize: 20,
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "135%",
                    letterSpacing: pxToRem(-0.8),
                    marginBottom: pxToRem(16),
                    padding: `0 ${pxToRem(24)}`,
                  })}
                >
                  {category.header}
                </MDTypography>
                <MDBox>
                  {category.items.map((item, index) => (
                    <MDBox
                      key={`category-${index}`}
                      sx={({ functions: { pxToRem } }) => ({
                        padding: `${pxToRem(8)} ${pxToRem(24)}`,
                        display: "flex",
                        alignItems: "center",
                        gap: pxToRem(16),
                      })}
                    >
                      <MDBox
                        sx={({ functions: { pxToRem } }) => ({
                          width: pxToRem(36),
                          height: pxToRem(36),
                          background: "#212229",
                          borderRadius: pxToRem(12),
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        })}
                      >
                        {item.logo}
                      </MDBox>

                      <MDBox sx={{ flexGrow: 1, flexBasis: 0 }}>
                        <MDTypography
                          sx={({ typography, functions: { pxToRem } }) => ({
                            color: "#172b4d",
                            fontFamily: typography.lexend.fontFamily,
                            fontSize: 16,
                            fontStyle: "normal",
                            fontWeight: 600,
                            lineHeight: "162.5%",
                            letterSpacing: pxToRem(-0.8),
                            marginBottom: 0,
                          })}
                        >
                          {item.title}
                        </MDTypography>
                        <MDTypography
                          paragraph
                          sx={({ typography, functions: { pxToRem } }) => ({
                            color: "#8392ab",
                            fontFamily: typography.lexend.fontFamily,
                            fontFeatureSettings: `"clig" off, "liga" off`,
                            fontSize: 12,
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "125%",
                            marginBottom: 0,
                          })}
                        >
                          {item.subtitle}
                        </MDTypography>
                      </MDBox>

                      <MDBox sx={{ cursor: "pointer" }}>
                        <Icon component={CategoryArrowIcon} />
                      </MDBox>
                    </MDBox>
                  ))}
                </MDBox>
              </MDBox>
            ))}
          </MDBox>

          <MDBox
            sx={({ palette, functions: { pxToRem } }) => ({
              width: pxToRem(1248),
              height: pxToRem(687),
              borderRadius: pxToRem(12),
              boxShadow: "0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.02)",
              filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25))",
              backgroundColor: palette.white.main,
            })}
          >
            <MDTypography
              variant="h3"
              sx={({ typography, functions: { pxToRem } }) => ({
                color: "#161616",
                fontFamily: typography.lexend.fontFamily,
                fontSize: 20,
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "137%",
                letterSpacing: pxToRem(-0.8),
                paddingLeft: pxToRem(27),
                paddingTop: pxToRem(24.75),
              })}
            >
              STUDENTS AT RISK
            </MDTypography>

            <MDBox
              sx={({ functions: { pxToRem } }) => ({
                width: pxToRem(454),
                paddingTop: pxToRem(27.25),
                paddingLeft: pxToRem(27),
              })}
            >
              <MDInput
                placeholder="Search student or class"
                sx={({ typography, functions: { pxToRem } }) => ({
                  width: "100%",

                  "& > div": {
                    overflow: pxToRem(4),
                  },

                  "& input": {
                    borderRadius: pxToRem(4),
                    border: `1px solid #d0d0d0`,
                    background: "#fff",
                    width: "100%",
                    height: pxToRem(48),
                    padding: `0 ${pxToRem(16)} 0px ${pxToRem(14)}`,
                    alignItems: "center",
                    fontFamily: typography.lato.fontFamily,
                    outline: "none",

                    background: `url(${SearchImage}) no-repeat scroll`,
                    backgroundPosition: `right ${pxToRem(13)} center`,
                  },

                  "& input::-ms-input-placeholder, & input::placeholder": {
                    color: "#8a8a8a",
                    fontSize: 14,
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "140%",
                    letterSpacing: pxToRem(0.175),
                  },
                })}
              />
            </MDBox>

            <Table />
          </MDBox>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Home;
