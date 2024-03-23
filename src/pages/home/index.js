// React
import { useEffect } from "react";

// @mui material components
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid";

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

// context
import { useMaterialUIController } from "context";

//Styles
import homeStyles from "./styles/home";

// Redux
import { useGetPerformanceQuery } from "shared/redux/endpoints/teacher";
import { Skeleton } from "@mui/material";

function Home() {
  const [controller] = useMaterialUIController();
  const { miniSidenav } = controller;

  const { data, isLoading } = useGetPerformanceQuery();

  return (
    <DashboardLayout>
      <Header />
      <MDBox sx={(theme) => homeStyles(theme, { miniSidenav })}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          columnSpacing={3}
          sx={({ breakpoints }) => ({
            [breakpoints.down("xxxl")]: {
              rowGap: 3,
              justifyContent: "flex-start",
            },

            [breakpoints.down("xxl")]: {
              rowGap: 2.5,
            },

            [breakpoints.down("md")]: {
              rowGap: 2,
            },
          })}
        >
          {!isLoading ? (
            <>
              {" "}
              <Grid item xs={12} md={6} xxl={4} xxxl={2.4}>
                <SpecialCard progress={0} diff={0} />
              </Grid>
              {cards.map((card, index) => {
                let progress = 0,
                  diff = 0;
                switch (index) {
                  case 0:
                    progress = data?.renewalRate?.currentMonthRate || 0;
                    diff = data?.renewalRate?.lastMonthRate || 0;
                    break;
                  case 1:
                    progress = data?.weLearnCourseProgress?.currentWeekCompleteRate || 0;
                    diff = data?.weLearnCourseProgress?.lastWeekCompleteRate;
                    break;
                  case 2:
                    progress = data?.teachingHour?.currentMonthTeachingHours || 0;
                    diff = data?.teachingHour?.lastMonthTeachingHours || 0;
                    break;
                  default:
                    break;
                }
                return (
                  <Grid key={index} item xs={12} md={6} xxl={4} xxxl={2.4}>
                    <Card {...card} progress={progress} diff={diff} />
                  </Grid>
                );
              })}
            </>
          ) : (
            <>
              {Array.from(new Array(5)).map((item) => (
                <Grid key={item} item xs={12} md={6} xxl={4} xxxl={2.4}>
                  <Skeleton variant="rectangular" height={120} />
                </Grid>
              ))}
            </>
          )}
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="stretch"
          sx={({ breakpoints, functions: { pxToRem } }) => ({
            marginTop: pxToRem(24),

            [breakpoints.down("xxl")]: {
              rowGap: 4,
            },
          })}
          columnSpacing={4}
        >
          {leaderboards.map((leaderboard, index) => (
            <Grid key={index} item xs={12} lg={6} xxl={3.75}>
              <Leaderboard {...leaderboard} />
            </Grid>
          ))}
          <Grid item xs={12} lg={12} xxl={4.5} pl={0}>
            <Advertise />
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="stretch"
          mt={3.75}
          columnSpacing={4}
          rowGap={4}
        >
          <Grid
            item
            xs={12}
            xxxl={2.5}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Grid container rowGap={3.25} columnSpacing={3.25}>
              {categories.map((category, index) => (
                <Grid key={index} item width="100%" xs={12} xl={6} xxxl={12}>
                  <MDBox
                    key={index}
                    width="100%"
                    sx={({ palette, functions: { pxToRem } }) => ({
                      borderRadius: pxToRem(15),
                      border: "1px solid #e2e2e2",
                      background: palette.white.main,
                      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                      padding: `${pxToRem(16)} 0`,
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
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} xxxl={9.5}>
            <MDBox
              height="100%"
              sx={({ palette, functions: { pxToRem } }) => ({
                boxShadow: "0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.02)",
                filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25))",
                backgroundColor: palette.white.main,
                borderRadius: pxToRem(12),
                minHeight: pxToRem(687),
                paddingBottom: pxToRem(34),
                overflow: "hidden",
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
                width="454px"
                maxWidth="calc(100% - 27px)"
                sx={({ functions: { pxToRem } }) => ({
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
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Home;
