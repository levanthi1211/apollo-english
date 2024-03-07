// MD Components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

// Mui Components

import { Icon, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// Components
import Notification from "./components/notification";

import "./custom.css";
import Slider from "react-slick";
import { useRef } from "react";

// Icons
import HeaderNextArrow from "components/icons/HeaderNextArrowIcon";
import HeaderPrevArrow from "components/icons/HeaderPrevArrowIcon";
import helloIcon from "assets/images/apollo-english/hello.svg";
import HeaderBell from "components/icons/HeaderBellIcon";

// context
import { useMaterialUIController, setOpenNotification, setMiniSidenav } from "context";

// styles
import { ArrowStyles } from "./styles";

const backgroundImageValue =
  "https://s3-alpha-sig.figma.com/img/54b4/a99a/e9b321795c699a18b73830c17cb779a6?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b-yoVGr2W9GABpXtxsoAlmqgXTNhcoepVv8XUY2uXadzuuf2Oi1rp~2HAtXCK-~BTsQ2QFV~Zf0m6yyrngw-JXYHz-aLulhnO1r~7xxWJfeWAI-d~BoIWZ8lF8MBULF1406l~Yco2O-~RZ-SzuH9s1R8XBzwywATfyUOIDSAqhXdobh6pu1P55iCoPYsTzOhQ~DEoNYRwPfD51Snld7ApEqU~4fsFCOEIeCuiDXO-ssk9-BxqdNOgQAyyQtv5yLKM45YpMZO38LST6mynOmONVsKCJoFceJDhpkMrBaSkooRErvEwoguuqODylfDDNH5Qxs0LC1fJQRdLaHJgGPHjw__";

const avatarValue =
  "https://s3-alpha-sig.figma.com/img/829b/223a/519c61d51eb440aff46c5258b749cc2b?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bBS80JMe2cX6gVjM92MB367dK4pKAMWczmqlwLtgy7jasTys~J7ztuSCqmaaYM4ctekc71AyPcTeIyaAgfujAqjqUdVJR~qTX8~gnWslBgsbrRXf3juh192sG-~feyPsFLXeKJJsDvoM7i0INm3h3y80Iph7wYmxlEyVyUBi7WfcRKA0YQfYkQn~R2k3vQxUDPFHYQRFFo8arGJaHbycn9NLcTbCaZIsUbC7AaY1Cqq0Slq2Ln~-BQZGuOKh7us2aSr7ZnmVJMBtouVExNo7s4sBDb08mIN4CprV6a3bevPhSb8wJwYc58js6brhZFbtYieD3SnG27~qhHgtlU0VOw__";

function Header() {
  const sliderRef = useRef(null);

  const [controller, dispatch] = useMaterialUIController();

  const { openNotification, miniSidenav, darkMode, transparentNavbar } = controller;

  const handleNotificationOpen = () => setOpenNotification(dispatch, !openNotification);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);

  const theme = useTheme();
  const xlMatches = useMediaQuery(theme.breakpoints.up("xl"));

  const settings = {
    customPaging: function () {
      return <div className="custom-dot"></div>;
    },
    dots: xlMatches,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <MDBox
      sx={({ functions: { pxToRem } }) => ({
        width: "100%",
        height: pxToRem(290),
        position: "relative",
        overflow: "hidden",
      })}
      id="header"
    >
      <Slider ref={sliderRef} {...settings}>
        {[1, 2, 3, 4].map((index) => {
          return (
            <MDBox
              key={index}
              sx={{
                height: "100%",
                width: "100%",
                display: "block",
              }}
            >
              <MDBox
                sx={{
                  height: "100%",
                  backgroundImage: `url(${backgroundImageValue})`,
                  backgroundSize: "100%",
                  backgroundPosition: "center",
                }}
              ></MDBox>
            </MDBox>
          );
        })}
      </Slider>

      <IconButton
        sx={({ breakpoints }) => ({
          display: "none !important",
          cursor: "pointer",
          position: "absolute",
          top: 20,
          left: 20,

          [breakpoints.up("xl")]: {
            display: "inline-block !important",
          },

          [breakpoints.down("xl")]: {
            display: "inline-block !important",
          },
        })}
        onClick={handleMiniSidenav}
        size="small"
        disableRipple
      >
        <Icon
          fontSize="medium"
          sx={({ palette: { dark, white, text }, functions: { rgba } }) => ({
            color: () => {
              let colorValue = darkMode ? white.main : dark.main;

              if (transparentNavbar) {
                colorValue = darkMode ? rgba(text.main, 0.6) : text.main;
              }

              return colorValue;
            },
          })}
        >
          {miniSidenav ? "menu_open" : "menu"}
        </Icon>
      </IconButton>
      {xlMatches && (
        <MDBox
          sx={(theme) => ArrowStyles(theme, { miniSidenav, type: "left" })}
          onClick={() => sliderRef?.current?.slickPrev()}
        >
          <Icon component={() => <HeaderPrevArrow />} />
        </MDBox>
      )}
      {xlMatches && (
        <MDBox
          sx={(theme) => ArrowStyles(theme, { miniSidenav, type: "right" })}
          onClick={() => sliderRef?.current?.slickNext()}
        >
          <Icon component={() => <HeaderNextArrow />} />
        </MDBox>
      )}

      <MDBox
        onClick={handleNotificationOpen}
        sx={({ palette, breakpoints, functions: { pxToRem } }) => ({
          position: "absolute",
          right: 0,
          top: pxToRem(88),
          background: palette.white.main,
          width: pxToRem(207),
          height: pxToRem(90),
          zIndex: 99,
          padding: "8px 24px 8px 24px",
          borderRadius: "16px 0px 0px 16px",
          gap: pxToRem(8),
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          cursor: "pointer",

          [breakpoints.down("md")]: {
            top: pxToRem(40),
          },
        })}
      >
        <MDTypography
          variant="p"
          sx={({ typography, functions: { pxToRem } }) => ({
            fontFamily: typography.openSan.fontFamily,
            fontSize: 16,
            fontWeight: 400,
            lineHeight: pxToRem(24),
            letterSpacing: 0,
            textAlign: "left",
            color: "#212529",
            p: pxToRem(1),
          })}
        >
          August 10th, 2023
        </MDTypography>
        <MDBox
          sx={({ functions: { pxToRem } }) => ({
            height: pxToRem(40),
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: pxToRem(17),
          })}
        >
          <MDBadge
            badgeContent={4}
            variant="contained"
            circular
            sx={({ typography, functions: { pxToRem } }) => ({
              width: pxToRem(40),
              height: pxToRem(40),
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              "& .MuiBadge-badge": {
                width: pxToRem(18),
                height: pxToRem(18),
                background: "#f56565",
                borderRadius: "50%",
                textAlign: "center",
                lineHeight: pxToRem(18),
                padding: 0,

                fontFamily: typography.openSan.fontFamily,
                fontSize: 12,
                fontWeight: 400,
                lineHeight: pxToRem(18),
                letterSpacing: 0,
                color: "#32325d",
                top: pxToRem(11),
                right: pxToRem(11),
              },
            })}
          >
            <MDBox>
              <Icon component={() => <HeaderBell />} />
            </MDBox>
          </MDBadge>

          <MDBox
            component="img"
            src={avatarValue}
            alt="Avatar"
            width="1.5rem"
            sx={({ functions: { pxToRem } }) => ({
              width: pxToRem(40),
              height: pxToRem(40),
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: pxToRem(8),
              borderRadius: "50%",
            })}
          ></MDBox>
        </MDBox>
      </MDBox>

      <MDBox
        sx={({ breakpoints, functions: { pxToRem } }) => ({
          position: "absolute",
          top: pxToRem(140),
          left: pxToRem(80),

          [breakpoints.down("xl")]: {
            left: pxToRem(64),
          },

          [breakpoints.down("lg")]: {
            left: pxToRem(48),
          },

          [breakpoints.down("md")]: {
            left: pxToRem(24),
          },
        })}
      >
        <MDBox sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <MDTypography
            variant="h1"
            sx={({ palette, typography }) => ({
              color: palette.white.main,
              fontFamily: typography.lexend.fontFamily,
              fontSize: 30,
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "137%",
              letterSpacing: "-0.8px",
            })}
          >
            Hi Mark
          </MDTypography>
          <MDBox
            component="img"
            src={helloIcon}
            width="2rem"
            sx={({ functions: { pxToRem } }) => ({
              width: pxToRem(32),
              height: pxToRem(32),
              display: "inline-block",
            })}
          ></MDBox>
        </MDBox>
        <MDTypography
          variant="p"
          sx={({ typography }) => ({
            color: "#CED4DA",
            fontFamily: typography.lexend.fontFamily,
            fontSize: 16,
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "162.5%",
            letterSpacing: "-0.8px",
          })}
        >
          Welcome to Apollo 2.0
        </MDTypography>
      </MDBox>

      <Notification />
    </MDBox>
  );
}

export default Header;
