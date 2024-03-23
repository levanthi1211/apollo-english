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

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import { Icon } from "@mui/material";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "shared/layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-in-cover.jpeg";

// Services & Redux
import { useChangePasswordMutation } from "shared/redux/endpoints/auth";
import { selectAuth } from "shared/redux/slices/authSlice";
import { useSelector } from "react-redux";

// Theme
import theme from "assets/theme";

// Form
import { useFormik } from "formik";
import { form, initialValues, validations } from "./form";

// Routers
import { useNavigate } from "react-router-dom";
import ResetPasswordUserIcon from "components/icons/ResetPasswordUserIcon";

function ChangePassword() {
  const {
    typography: { lexendFontFamily, openSansFontFamily },
  } = theme;

  const { formId, formField } = form;
  const { email } = formField;

  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const navigate = useNavigate();

  const auth = useSelector(selectAuth);

  const formik = useFormik({
    initialValues,
    validationSchema: validations,
    onSubmit: async (values) => {},
  });

  const emailError = formik.touched.email && Boolean(formik.errors.email);

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
          Reset password
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
          You will receive an email in maximum 60 seconds (or more)
        </MDTypography>
      </MDBox>
      <Card>
        <MDBox p={{ xs: 2, lg: 3, xl: 4, xxl: 6 }}>
          <MDBox
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            width="100%"
            pb={{ xs: 2, lg: 3 }}
            gap={1}
          >
            <MDBox height={48}>
              <Icon component={ResetPasswordUserIcon} />
            </MDBox>
            <MDBox display="flex" flexDirection="column" justifyContent="space-between">
              <MDTypography
                sx={({ breakpoints }) => ({
                  fontFamily: lexendFontFamily,
                  fontWeight: 600,
                  color: "#172B4D",
                  fontSize: 20,
                  lineHeight: 1.37,
                  letterSpacing: "-0.8px",

                  [breakpoints.down("lg")]: {
                    fontSize: 16,
                  },
                })}
              >
                Can&apos;t log in?
              </MDTypography>
              <MDTypography
                sx={({ breakpoints }) => ({
                  fontFamily: lexendFontFamily,
                  fontWeight: 400,
                  color: "#8392AB",
                  fontSize: 14,
                  lineHeight: 1.5,

                  [breakpoints.down("lg")]: {
                    fontSize: 12,
                  },
                })}
              >
                Restore access to your account
              </MDTypography>
            </MDBox>
          </MDBox>
          <MDTypography
            textAlign="left"
            sx={({ breakpoints, functions: { pxToRem } }) => ({
              color: "#172B4D",
              fontFamily: lexendFontFamily,
              fontWeight: 400,
              fontSize: 14,
              lineHeight: 1.25,
              marginBottom: pxToRem(8),

              [breakpoints.down("xl")]: {
                fontSize: 13,
              },

              [breakpoints.down("lg")]: {
                fontSize: 11,
              },
            })}
          >
            We will send a recovery link to
          </MDTypography>
          <MDBox component="form" role="form" id={formId} onSubmit={formik.handleSubmit}>
            <MDBox mb={{ xs: 2, lg: 3 }}>
              <MDInput
                type={email.type}
                label={email.label}
                name={email.name}
                variant="outlined"
                fullWidth
                placeholder="************"
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
            <MDBox mt={{ xs: 2, lg: 3 }} mb={1} display="flex" justifyContent="center">
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
                Reset Password
              </MDButton>
            </MDBox>
            <MDBox mt={3} textAlign="center">
              <MDTypography
                variant="button"
                sx={({ typography, breakpoints }) => ({
                  fontFamily: typography.lexendFontFamily,
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
                I don&apos;t have access to my Email
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default ChangePassword;
