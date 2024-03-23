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
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "shared/layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-in-cover.jpeg";
import GoogleImage from "assets/images/apollo-english/google.jpg";

// Services & Redux
import { useLoginMutation, useTestQuery } from "shared/redux/endpoints/auth";
import { selectAuth } from "shared/redux/slices/authSlice";
import { useSelector } from "react-redux";

// Theme
import theme from "assets/theme";

// Form
import { useFormik } from "formik";
import { form, initialValues, validations } from "./form";

// Routers
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { Backdrop, CircularProgress } from "@mui/material";
import { useDispatch } from "react-redux";
import { setGlobalLoading } from "shared/redux/slices/themeSlice";

import queryString from "query-string";

function SignIn() {
  const {
    typography: { lexendFontFamily, openSansFontFamily },
  } = theme;
  const { formId, formField } = form;
  const { email, password } = formField;

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const formik = useFormik({
    initialValues,
    validationSchema: validations,
    onSubmit: async (values) => {
      const result = await login({ username: values.email, password: values.password });
      if (result.data) {
        const { redirectTo } = queryString.parse(location.search);
        navigate(redirectTo == null ? "/" : `/${redirectTo}`);
      } else {
        toast.error("Can't log in, please try again", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    },
  });

  const emailError = formik.touched.email && Boolean(formik.errors.email);
  const passwordError = formik.touched.password && Boolean(formik.errors.password);

  useEffect(() => {
    dispatch(setGlobalLoading({ isLoading }));

    return () => dispatch(setGlobalLoading(false));
  }, [isLoading]);

  const handleSignWithGoogle = () => {
    let timer;
    const googleLoginUrl = "https://apollo2be.schoolcento.com/apollo2/oauth2/login";
    const newWindow = window.open(googleLoginUrl, "_blank", "width=500,height=500");

    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          console.log("Yay we're authenticated");
          if (timer) clearInterval(timer);
        }
      }, 500);
    }
  };

  return (
    <CoverLayout image={bgImage}>
      <MDBox
        position="absolute"
        width="calc(100% - 48px)"
        left={24}
        zIndex={99}
        sx={({ breakpoints, functions: { pxToRem } }) => ({
          top: pxToRem(90),

          [breakpoints.down("xxl")]: {
            top: pxToRem(70),
          },

          [breakpoints.down("xl")]: {
            top: pxToRem(50),
          },
        })}
      >
        <MDTypography
          textAlign="center"
          color="white"
          sx={({ breakpoints }) => ({
            fontFamily: lexendFontFamily,
            fontWeight: 700,
            fontSize: 48,
            lineHeight: 1.25,
            textSpacing: "-0.8px",

            [breakpoints.down("xl")]: {
              fontSize: 36,
            },

            [breakpoints.down("lg")]: {
              fontSize: 24,
            },
          })}
        >
          Welcome to Apollo 2.0
        </MDTypography>
        <MDTypography
          textAlign="center"
          color="white"
          sx={({ breakpoints }) => ({
            fontFamily: openSansFontFamily,
            fontWeight: 400,
            fontSize: 16,
            lineHeight: 1.5,
            textSpacing: "-0.8px",

            [breakpoints.down("xl")]: {
              fontSize: 12,
            },

            [breakpoints.down("lg")]: {
              fontSize: 10,
            },
          })}
        >
          It&apos;s like your favorite digital playground, but way cooler.
        </MDTypography>
      </MDBox>

      <Card>
        <MDBox p={{ xs: 2, lg: 3, xl: 4, xxl: 6 }}>
          <MDTypography
            textAlign="center"
            sx={({ breakpoints, functions: { pxToRem } }) => ({
              color: "#172B4D",
              fontFamily: lexendFontFamily,
              fontWeight: 600,
              fontSize: 20,
              lineHeight: 1.37,
              textSpacing: "-0.8px",
              marginBottom: pxToRem(24),

              [breakpoints.down("xl")]: {
                fontSize: 18,
                marginBottom: pxToRem(18),
              },

              [breakpoints.down("lg")]: {
                fontSize: 16,
                marginBottom: pxToRem(14),
              },
            })}
          >
            Sign In with
          </MDTypography>
          <MDBox px={3} mb={3} sx={{ width: "100%" }}>
            <MDButton
              display="flex"
              sx={({ functions: { pxToRem } }) => ({
                borderRadius: pxToRem(8),
                gap: pxToRem(4),
                height: pxToRem(30),
                boxShadow: "0px 2px 6px 0px #00000040",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              })}
              onClick={handleSignWithGoogle}
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
          <MDTypography
            textAlign="center"
            sx={({ breakpoints, functions: { pxToRem } }) => ({
              color: "#8392AB",
              fontFamily: lexendFontFamily,
              fontWeight: 400,
              fontSize: 16,
              lineHeight: 1.5,
              marginBottom: pxToRem(24),

              [breakpoints.down("xl")]: {
                fontSize: 13,
                marginBottom: pxToRem(16),
              },

              [breakpoints.down("lg")]: {
                fontSize: 11,
                marginBottom: pxToRem(12),
              },
            })}
          >
            Or sign in with credentials
          </MDTypography>

          <form id={formId} onSubmit={formik.handleSubmit}>
            <MDBox mb={{ xs: 2, lg: 3 }}>
              <MDInput
                type={email.type}
                label={email.label}
                name={email.name}
                variant="outlined"
                fullWidth
                placeholder="john@example.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={emailError}
                sx={({ functions: { pxToRem } }) => ({
                  height: pxToRem(50),
                })}
              />
              {emailError ? (
                <MDTypography
                  sx={{
                    color: "#f44335",
                    fontFamily: lexendFontFamily,
                    fontWeight: 400,
                    fontSize: 10,
                    lineHeight: 1.5,
                  }}
                >
                  {formik.errors.email}
                </MDTypography>
              ) : (
                <></>
              )}
            </MDBox>
            <MDBox mb={{ xs: 2, lg: 3 }}>
              <MDInput
                type={password.type}
                label={password.label}
                name={password.name}
                variant="outlined"
                fullWidth
                placeholder="************"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={passwordError}
                sx={({ functions: { pxToRem } }) => ({
                  height: pxToRem(50),
                })}
              />
              {passwordError ? (
                <MDTypography
                  sx={{
                    color: "#f44335",
                    fontFamily: lexendFontFamily,
                    fontWeight: 400,
                    fontSize: 10,
                    lineHeight: 1.5,
                  }}
                >
                  {formik.errors.password}
                </MDTypography>
              ) : (
                <></>
              )}
            </MDBox>
            <MDBox mt={{ xs: 2, lg: 3 }} mb={1}>
              <MDButton
                variant="gradient"
                color="info"
                fullWidth
                type="submit"
                sx={({ typography, functions: { pxToRem } }) => ({
                  height: pxToRem(40),
                  fontSize: 14,
                  lineHeight: 1.5,
                  fontWeight: 700,
                  textTransform: "unset",
                  background: "#5E72E4!important",
                  fontFamily: typography.openSansFontFamily,
                })}
              >
                Sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} textAlign="center">
              <MDTypography
                variant="button"
                sx={({ typography, breakpoints }) => ({
                  fontFamily: typography.openSansFontFamily,
                  fontSize: 14,
                  lineHeight: 1.42,
                  fontWeight: 400,
                  color: "#8392AB",

                  [breakpoints.down("xxl")]: {
                    fontSize: 12,
                  },

                  [breakpoints.down("xl")]: {
                    fontSize: 10,
                  },
                })}
              >
                Password&apos;s gone incognito?{" "}
                <MDTypography
                  component={Link}
                  to="/change-password"
                  variant="button"
                  fontWeight="medium"
                  sx={({ typography, breakpoints }) => ({
                    fontFamily: typography.openSansFontFamily,
                    lineHeight: 1.5,
                    fontWeight: 700,
                    color: "#5E72E4",

                    [breakpoints.down("xxl")]: {
                      fontSize: 12,
                    },

                    [breakpoints.down("xl")]: {
                      fontSize: 10,
                    },
                  })}
                >
                  Reset it
                </MDTypography>
              </MDTypography>
            </MDBox>
          </form>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default SignIn;
