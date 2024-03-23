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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React base styles
import typography from "assets/theme/base/typography";
import pxToRem from "assets/theme/functions/pxToRem";

// Icons
import FooterDribbble from "components/icons/FooterDribbble";
import FooterTwitter from "components/icons/FooterTwitter";
import FooterInstagram from "components/icons/FooterInstagram";
import FooterPinterest from "components/icons/FooterPinterest";
import FooterGithub from "components/icons/FooterGithub";

// Responsive
import { useMediaQuery } from "@mui/material";

const navigateMenu = [
  {
    title: "Company Website",
    href: "/",
  },
  {
    title: "Contact IT",
    href: "/",
  },
  {
    title: "Contact HR",
    href: "/",
  },
  {
    title: "Web Knowledge Base",
    href: "/",
  },
];

const socialMenu = [
  {
    name: "Dribbble",
    icon: () => <FooterDribbble />,
    href: "/",
  },
  {
    name: "Twitter",
    icon: () => <FooterTwitter />,
    href: "/",
  },
  {
    name: "Instagram",
    icon: () => <FooterInstagram />,
    href: "/",
  },
  {
    name: "Pinterest",
    icon: () => <FooterPinterest />,
    href: "/",
  },
  {
    name: "Github",
    icon: () => <FooterGithub />,
    href: "/",
  },
];

function Footer({ light }) {
  const { size, lexendFontFamily } = typography;

  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <MDBox position="absolute" width="100%" bottom={0} py={2}>
      <Container>
        <MDBox
          width="100%"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          px={1.5}
          sx={({ breakpoints, functions: { pxToRem } }) => ({
            gap: pxToRem(24),

            [breakpoints.down("xxl")]: {
              gap: pxToRem(16),
            },

            [breakpoints.down("xl")]: {
              gap: pxToRem(12),
            },
          })}
        >
          <MDBox
            component="ul"
            sx={({ breakpoints, functions: { pxToRem } }) => ({
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              listStyle: "none",
              mt: 0,
              mb: 0,
              p: 0,

              [breakpoints.down("md")]: {
                columnGap: pxToRem(10),
              },
            })}
          >
            {navigateMenu.map((item, index, menu) => {
              const paddingValue = pxToRem(25);
              const padding = isMobile
                ? { p: 0 }
                : index === 0
                ? { pr: paddingValue }
                : index === menu.length - 1
                ? { pl: paddingValue }
                : { px: paddingValue };
              return (
                <MDBox key={index} component="li" {...padding} lineHeight={1}>
                  <Link href={item.href} target="_blank">
                    <MDTypography
                      variant="button"
                      fontWeight="regular"
                      color={light ? "white" : "dark"}
                      sx={({ breakpoints }) => ({
                        fontFamily: lexendFontFamily,
                        color: "#8392AB",
                        fontSize: 16,
                        lineHeight: 1.5,

                        [breakpoints.down("xl")]: {
                          fontSize: 13,
                        },

                        [breakpoints.down("lg")]: {
                          fontSize: 11,
                        },
                      })}
                    >
                      {item.title}
                    </MDTypography>
                  </Link>
                </MDBox>
              );
            })}
          </MDBox>
          <MDBox
            component="ul"
            sx={({ breakpoints }) => ({
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              listStyle: "none",
              mt: 0,
              mb: 0,
              p: 0,
            })}
          >
            {socialMenu.map((item, index, menu) => {
              const paddingValue = pxToRem(11);
              const padding =
                index === 0
                  ? { pr: paddingValue }
                  : index === menu.length - 1
                  ? { pl: paddingValue }
                  : { px: paddingValue };
              return (
                <MDBox key={index} component="li" {...padding} lineHeight={1} display="block">
                  <MDBox height={24} width={24}>
                    {item.icon({})}
                  </MDBox>
                </MDBox>
              );
            })}
          </MDBox>
          <MDBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            color={light ? "white" : "text"}
            fontSize={size.sm}
            p={1}
          >
            <MDTypography
              lineHeight={1.5}
              sx={({ breakpoints }) => ({
                fontFamily: lexendFontFamily,
                fontSize: 14,
                fontWeight: 400,
                color: "#8392AB",

                [breakpoints.down("lg")]: {
                  fontSize: 10,
                },
              })}
            >
              Copyright &copy; {new Date().getFullYear()} - Created by Apollo - for Apollonians
            </MDTypography>
          </MDBox>
        </MDBox>
      </Container>
    </MDBox>
  );
}

// Setting default props for the Footer
Footer.defaultProps = {
  light: false,
};

// Typechecking props for the Footer
Footer.propTypes = {
  light: PropTypes.bool,
};

export default Footer;
