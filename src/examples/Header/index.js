import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

import "./custom.css";
import Slider from "react-slick";
import { useRef } from "react";

import { Icon, IconButton } from "@mui/material";
import HeaderNextArrow from "components/icons/HeaderNextArrowIcon";
import HeaderPrevArrow from "components/icons/HeaderPrevArrowIcon";
import HeaderBell from "components/icons/HeaderBellIcon";
import pxToRem from "assets/theme/functions/pxToRem";

import { useMaterialUIController, setOpenNotification, setMiniSidenav } from "context";

import helloIcon from "assets/images/apollo-english/hello.svg";
import Notification from "./components/notification";

const backgroundImageValue =
  "https://s3-alpha-sig.figma.com/img/54b4/a99a/e9b321795c699a18b73830c17cb779a6?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MXXLLmVryWd3MKNiUuW6GO6sdHnZyqtiuL~~-VgEmhyQSXuRtp4S6YuI7ZPgLQ14Evpu5Ri1sGhsxfN20TOJynw-c037vjEEvkIroBeekpcsWrLmZOct7vDgFygIFYkSuX0NfaYlp-dp9BD4vfbPWPInEUe3XzsguvTXWfxv8gLiWAUI6Te4GXVk9OHsmcdK7XwxNLKkiK0gYJK2NGhqulDx~AiC8idBOyhgTNBdInapU6R~BwNsKgy19OleIeBXCRv5H~9JS99HC5P65K9UJmd8X4xZx~ixVJSe4v9dq~-c3JhB7RqVdycspzMbXlCobJiINpy1UOomkscRWJw6zQ__";

const avatarValue =
  "https://s3-alpha-sig.figma.com/img/829b/223a/519c61d51eb440aff46c5258b749cc2b?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bBS80JMe2cX6gVjM92MB367dK4pKAMWczmqlwLtgy7jasTys~J7ztuSCqmaaYM4ctekc71AyPcTeIyaAgfujAqjqUdVJR~qTX8~gnWslBgsbrRXf3juh192sG-~feyPsFLXeKJJsDvoM7i0INm3h3y80Iph7wYmxlEyVyUBi7WfcRKA0YQfYkQn~R2k3vQxUDPFHYQRFFo8arGJaHbycn9NLcTbCaZIsUbC7AaY1Cqq0Slq2Ln~-BQZGuOKh7us2aSr7ZnmVJMBtouVExNo7s4sBDb08mIN4CprV6a3bevPhSb8wJwYc58js6brhZFbtYieD3SnG27~qhHgtlU0VOw__";

function Header() {
  const sliderRef = useRef(null);

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

  const [controller, dispatch] = useMaterialUIController();

  const { openNotification, miniSidenav, darkMode, transparentNavbar } = controller;

  const handleNotificationOpen = () => setOpenNotification(dispatch, !openNotification);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);

  return (
    <MDBox
      sx={({ breakpoints, functions: { pxToRem } }) => ({
        width: "100%",
        height: pxToRem(290),
        position: "relative",
        overflow: "hidden",

        [breakpoints.down("xl")]: {
          height: pxToRem(140),
        },
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
      <MDBox
        sx={({ breakpoints, functions: { pxToRem } }) => ({
          position: "absolute",
          top: pxToRem(140),
          width: pxToRem(34),
          height: pxToRem(34),
          zIndex: 99,
          cursor: "pointer",
          left: "18%",

          [breakpoints.down("xl")]: {
            top: pxToRem(70),
          },
        })}
        onClick={() => sliderRef?.current?.slickPrev()}
      >
        <Icon component={() => <HeaderPrevArrow />} />
      </MDBox>
      <MDBox
        sx={({ breakpoints, functions: { pxToRem } }) => ({
          position: "absolute",
          top: pxToRem(140),
          width: pxToRem(34),
          height: pxToRem(34),
          zIndex: 99,
          cursor: "pointer",
          right: "18%",

          [breakpoints.down("xl")]: {
            top: pxToRem(70),
          },
        })}
        onClick={() => sliderRef?.current?.slickNext()}
      >
        <Icon component={() => <HeaderNextArrow />} />
      </MDBox>
      <MDBox
        onClick={handleNotificationOpen}
        sx={({ breakpoints, palette, functions: { pxToRem } }) => ({
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

          [breakpoints.down("xl")]: {
            display: "none",
          },
        })}
      >
        <MDTypography
          variant="p"
          sx={({ typography }) => ({
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
          sx={() => ({
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
            sx={() => ({
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
        sx={() => ({
          position: "absolute",
          top: pxToRem(140),
          left: pxToRem(86),
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
            sx={{ width: pxToRem(32), height: pxToRem(32), display: "inline-block" }}
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
