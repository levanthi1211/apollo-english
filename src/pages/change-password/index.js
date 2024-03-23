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
import { Container } from "@mui/material";

// Theme
import theme from "assets/theme";

// Form
import { useFormik } from "formik";
import { form, initialValues, validations } from "./form";

// Routers
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const {
    typography: { lexendFontFamily },
  } = theme;

  const { formId, formField } = form;
  const { password } = formField;

  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const navigate = useNavigate();

  const auth = useSelector(selectAuth);

  const formik = useFormik({
    initialValues,
    validationSchema: validations,
    onSubmit: async (values) => {
      await changePassword({ password: values.password });
      navigate("/");
    },
  });

  const passwordError = formik.touched.password && Boolean(formik.errors.password);

  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          borderRadius="lg"
          coloredShadow="success"
          component="img"
          src="https://s3-alpha-sig.figma.com/img/ea10/710c/b8f0c1f6012562a09111b6c43a82271d?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jej4AHH-vtwM5bkMeFBTrSXWggkCdmrjtL~ZF0k-J3sHPSTo8WQyuSQphVWeT8~qA4IoRY4Rt6RYme3j3PkMTpBbzAI53KJ~Qvk935bA2GKtWv2l8YV-Qbjd6kQsdHTNUdAuQw9~KSGfaEXK-X3PQienlg2oNd1p2VQCzRwoeiNqn3MSXG-Ui~E2vTDtIIuEF-F6MdTna6ugc~OkpZ62Q8NWvFRbi3t-PBrgND0Ep27kmAUnaIxpAPqKUiW7Uj3HXmPHwqvno4WfOiOcNks2pfOXFpMlbGTIlxOwkICr0l2BUDLATedXYzGWXqAv5vmL4XME8Hhr57t2HCcbLBjuJw__"
          mx="auto"
          mt={-9.5}
          textAlign="center"
          sx={({ functions: { pxToRem } }) => ({
            width: pxToRem(110),
            height: pxToRem(110),
          })}
        ></MDBox>
        <MDBox
          p={{ xs: 2, lg: 3, xl: 4, xxl: 6 }}
          sx={({ functions: { pxToRem } }) => ({ paddingTop: `${pxToRem(14)}!important` })}
        >
          <MDTypography
            textAlign="center"
            sx={({ breakpoints, functions: { pxToRem } }) => ({
              color: "#172B4D",
              fontFamily: lexendFontFamily,
              fontWeight: 800,
              fontSize: 24,
              lineHeight: 1.37,
              textSpacing: "-0.8px",
              marginBottom: pxToRem(16),

              [breakpoints.down("xl")]: {
                fontSize: 20,
                marginBottom: pxToRem(12),
              },

              [breakpoints.down("lg")]: {
                fontSize: 16,
                marginBottom: pxToRem(10),
              },
            })}
          >
            Hi, {auth.user.fullName}
          </MDTypography>

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
            Let’s change your password for the 1st time
          </MDTypography>

          <MDBox component="form" role="form" id={formId} onSubmit={formik.handleSubmit}>
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
            <MDBox mt={{ xs: 2, lg: 3 }} mb={1} display="flex" justifyContent="center">
              <MDButton
                variant="gradient"
                color="info"
                fullWidth
                type="submit"
                sx={({ typography, functions: { pxToRem } }) => ({
                  width: pxToRem(160),
                  height: pxToRem(40),
                  fontSize: 14,
                  lineHeight: 1.5,
                  fontWeight: 700,
                  textTransform: "unset",
                  background: "#161616!important",
                  fontFamily: typography.openSansFontFamily,
                })}
              >
                Log me in
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default ChangePassword;
