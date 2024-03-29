import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import { useMaterialUIController, setLayout } from "context";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import MDInput from "components/MDInput";
import EyeOff from "assets/images/apollo-english/eye-off.svg";
import MDButton from "components/MDButton";
import { Divider, Grid } from "@mui/material";
import GoogleImage from "assets/images/apollo-english/google.jpg";
import DecorationImage from "assets/images/apollo-english/decoration.png";
import Slider from "react-slick";
import "./custom.css";

function Login() {
  const [, dispatch] = useMaterialUIController();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setLayout(dispatch, "page");
  }, [pathname]);

  const inputStyle = (type) => ({
    width: "100%",
    heoght: "100%",
    marginBottom: "16px",

    "& input": {
      borderRadius: "4px",
      border: "1px solid #d0d0d0",
      background: "#fff",
      width: "100%",
      height: "48px",
      padding: "0px 16px 0px 14px",
      alignItems: "center",
      fontFamily: "Lato",
      outline: "none",

      ...(type === "password"
        ? {
            backgroundImage: `url(${EyeOff})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 16px center",
          }
        : {}),
    },

    "& input::-ms-input-placeholder, & input::placeholder": {
      color: "#8a8a8a",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "140%",
      letterSpacing: "0.175px",
    },
  });

  const forgotPasswordStyle = (isLink) => ({
    color: isLink ? "#0098EA" : "#515151",
    fontFamily: '"Lexend Deca"',
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "140%",
    letterSpacing: "0.175px",
    marginBottom: isLink ? 0 : "24px",
    cursor: isLink ? "pointer" : "unset",
    display: "inline-block",
  });

  const settings = {
    customPaging: function () {
      return <div className="custom-dot"></div>;
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <MDBox
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgb(238, 238, 238)",
      }}
    >
      <MDBox
        sx={() => ({
          width: "100%",
          maxHeight: "100%",
          maxWidth: "1440px",
          height: "1024px",
          maxHeight: "100vh",
          borderRadius: "16px",
          background: "#fff",
          padding: "24px",
          display: "flex",
          alignItems: "center",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",

          overflowY: "auto",
        })}
      >
        <Grid container sx={{ height: "100%" }}>
          <Grid item xs={12} md={6}>
            <MDBox sx={{ height: "100%" }}>
              <MDBox
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid container height="100%" direction="column">
                  <Grid item xs display="flex" alignItems="center" justifyContent="center">
                    <MDBox
                      sx={({ breakpoints }) => ({
                        width: "50%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",

                        [breakpoints.down("xl")]: {
                          width: "66.66%",
                        },

                        [breakpoints.down("lg")]: {
                          width: "80%",
                        },
                      })}
                    >
                      <MDTypography
                        sx={({ breakpoints, typography }) => ({
                          color: "#006dbc",
                          fontFamily: typography.lexend.fontFamily,
                          fontSize: 36,
                          fontWeight: 700,
                          lineHeight: "140%",

                          [breakpoints.down("md")]: {
                            fontSize: 28,
                          },
                        })}
                      >
                        Login to My Apollo 2.0
                      </MDTypography>

                      <MDBox sx={{ width: "100%", padding: "40px 0px" }}>
                        <MDBox
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "21px",
                          }}
                        >
                          <MDTypography
                            sx={({ breakpoints }) => ({
                              color: "#515151",
                              fontFamily: '"Lexend Deca"',
                              fontSize: 24,
                              fontWeight: 700,
                              lineHeight: "140%",

                              [breakpoints.down("md")]: {
                                fontSize: 18,
                              },
                            })}
                          >
                            Hello!
                          </MDTypography>
                          <MDTypography
                            sx={({ breakpoints }) => ({
                              color: "#006dbc",
                              fontFamily: '"Lexend Deca"',
                              fontSize: 16,
                              fontWeight: 400,
                              lineHeight: "140%",
                              letterSpacing: "0.5px",

                              [breakpoints.down("md")]: {
                                fontSize: 13,
                              },
                            })}
                          >
                            Good to see you today!
                          </MDTypography>
                        </MDBox>

                        <MDInput placeholder="Your username" sx={inputStyle} />
                        <MDInput placeholder="Your password" sx={() => inputStyle("password")} />

                        <MDButton
                          sx={{
                            width: "100%",
                            height: "46px",
                            borderRadius: "8px",
                            background: "#006DBC",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            outline: "none",
                            border: "none",
                            margin: "16px 0px 32px",
                            color: "#fff",
                            fontFamily: '"Lexend Deca"',
                            fontSize: "16px",
                            fontStyle: "normal",
                            fontWeight: 700,
                            lineHeight: "140%",
                            letterSpacing: "0.5px",

                            "&:hover": {
                              color: "#006DBC",
                              border: "1px solid #006DBC",
                            },
                          }}
                          onClick={handleLogin}
                        >
                          LOGIN
                        </MDButton>

                        <MDTypography sx={() => forgotPasswordStyle()}>
                          Forgot your password?{" "}
                          <MDTypography sx={() => forgotPasswordStyle(true)}>
                            Click here
                          </MDTypography>
                        </MDTypography>

                        <Divider
                          sx={{
                            "& span": {
                              display: "inline-block",
                              height: 40,
                              position: "relative",
                              top: -20,
                              background: "#fff",
                            },
                          }}
                        >
                          <MDTypography
                            sx={{
                              color: "#d0d0d0",
                              fontFamily: "Lato",
                              fontSize: "14px",
                              fontStyle: "normal",
                              fontWeight: 400,
                              lineHeight: "140%",
                              letterSpacing: "0.175px",
                              padding: "10px",
                            }}
                          >
                            or login with
                          </MDTypography>
                        </Divider>

                        <MDButton
                          sx={{
                            marginTop: "24px",
                            borderRadius: "8px",
                            border: "1px solid #d0d0d0",
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "16px",
                            height: "48px",
                            background: "#fff",
                          }}
                        >
                          <MDBox component="img" src={GoogleImage} width="16px" />
                          <MDTypography
                            sx={{
                              color: "#505050",
                              fontFamily: "Lato",
                              fontSize: "14px",
                              fontStyle: "normal",
                              fontWeight: 700,
                              lineHeight: "140%",
                              letterSpacing: "0.175px",
                            }}
                          >
                            Google
                          </MDTypography>
                        </MDButton>
                      </MDBox>
                    </MDBox>
                  </Grid>
                </Grid>

                <Grid xs="auto" alignSelf="start">
                  <MDTypography
                    sx={({ breakpoints, typography, functions: { pxToRem } }) => ({
                      color: "#8A8A8A",
                      fontFamily: typography.lato.fontFamily,
                      fontSize: 16,
                      fontWeight: 400,
                      lineHeight: "140%",
                      letterSpacing: "0.5px",
                      paddingLeft: pxToRem(74),
                      marginBottom: pxToRem(24),

                      [breakpoints.down("lg")]: {
                        textAlign: "center",
                        paddingLeft: 0,
                      },
                    })}
                  >
                    Made by Apollo English with ❤️
                  </MDTypography>
                </Grid>
              </MDBox>
            </MDBox>
          </Grid>

          <Grid
            item
            xs={0}
            md={6}
            sx={({ breakpoints }) => ({
              [breakpoints.down("md")]: {
                display: "none",
              },
            })}
          >
            <MDBox sx={{ height: "100%", flexGrow: 1, flexBasis: "0", overflow: "hidden" }}>
              <MDBox
                id="login-bg"
                sx={{
                  height: "100%",
                  width: "100%",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "16px",
                }}
              >
                <Slider {...settings}>
                  {[1, 2, 3, 4].map((index) => {
                    return (
                      <MDBox key={index} sx={{ height: "100%", width: "100%", display: "block" }}>
                        <MDBox
                          sx={{
                            height: "100%",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "75% 75%, 100%",
                            backgroundPosition: "0px 100%, center",
                            paddingTop: "19%",
                            paddingLeft: "10%",
                            backgroundImage: `url(${DecorationImage}), linear-gradient(315deg, #1576bc 0%, #509fd8 100%)`,
                          }}
                        >
                          <MDTypography
                            sx={({ breakpoints, typography }) => ({
                              color: "#fff",
                              fontFamily: typography.lexend.fontFamily,
                              fontSize: 38,
                              fontWeight: 700,
                              lineHeight: "140%",
                              letterSpacing: "0.38px",
                              margin: "0 auto",

                              [breakpoints.down("xl")]: {
                                fontSize: 32,
                              },

                              [breakpoints.down("lg")]: {
                                fontSize: 30,
                              },

                              [breakpoints.down("md")]: {
                                fontSize: 28,
                              },
                            })}
                          >
                            Start your journey with Apollo English by one click!
                          </MDTypography>
                        </MDBox>
                      </MDBox>
                    );
                  })}
                </Slider>
              </MDBox>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

export default Login;
