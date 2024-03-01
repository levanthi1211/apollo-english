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

import { useState, useEffect } from "react";

// react-github-btn

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Custom styles for the Configurator
import NotificationRoot from "./NotificationRoot";

// Material Dashboard 2 PRO React context
import { useMaterialUIController, setOpenNotification } from "context";

// Data
import notifications from "examples/Header/data/notification";

// Images
import SeenImage from "assets/images/apollo-english/seen.jpg";
import MoreHorizImage from "assets/images/apollo-english/more-horizontal.svg";

// Libraries
import moment from "moment";

function Notification() {
  const [controller, dispatch] = useMaterialUIController();
  const { darkMode, openNotification } = controller;
  const [disabled, setDisabled] = useState(false);
  const sidenavColors = ["primary", "dark", "info", "success", "warning", "error"];

  // Use the useEffect hook to change the button state for the sidenav type based on window size.
  useEffect(() => {
    // A function that sets the disabled state of the buttons for the sidenav type.
    function handleDisabled() {
      return window.innerWidth > 1200 ? setDisabled(false) : setDisabled(true);
    }

    // The event listener that's calling the handleDisabled function when resizing the window.
    window.addEventListener("resize", handleDisabled);

    // Call the handleDisabled function to set the state with the initial value.
    handleDisabled();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleDisabled);
  }, []);

  const handleCloseNotification = () => setOpenNotification(dispatch, false);

  const headerStyle = () => {};

  return (
    <NotificationRoot variant="permanent" ownerState={{ openNotification }}>
      <MDBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={3}
        borderBottom="1px solid #dee2e6"
        position="relative"
      >
        <MDBox sx={() => ({ display: "flex", justifyContent: "center", alignItems: "center" })}>
          <MDTypography
            sx={({ typography }) => ({
              color: "#212529",
              textAlign: "center",
              fontFamily: typography.openSan.fontFamily,
              fontSize: 14,
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "150%",
            })}
          >
            September 19th, 2023
          </MDTypography>
          <MDBox
            width="40px"
            component="img"
            src="https://s3-alpha-sig.figma.com/img/1f9d/0403/57fd1da38e154beba50251dd960dd56c?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dqNDceo9bW0hasq4~zijRQkueABtt0tucWX1kN696fCWxIvQeVJqD6rKsZUPrB6iYqcnVsPq1Wd2APAZbyxJrtp5JMrwDv4k5pEscLpZg0fCRzmxM60VdBosbYxxbOqWmXze482DtH1AJMbA7kUu6oMuLElCizkwcVg5zydLu55ayLuJAZc73JA1D8inzh3iHPyI-ka7eNhJj~9js~rxdJWrKy75v8VpxufCWHKtCcwMB6zLaAknJYiWNE3lmhudlAkm826IWQzp72Isj8GMj7~B-Ddvg0EN9iTLDlbrW4mnh7Nk3YbtJW0jkXCNHNGTFrLdah4S-p1hHze~nticxA__"
          ></MDBox>
        </MDBox>

        <Icon
          sx={({ typography: { size }, palette: { dark, white }, functions: { pxToRem } }) => ({
            fontSize: `${size.lg} !important`,
            color: darkMode ? white.main : dark.main,
            stroke: "currentColor",
            strokeWidth: "2px",
            cursor: "pointer",
            transform: "translateY(5px)",
            position: "absolute",
            top: pxToRem(24),
            right: pxToRem(24),
          })}
          onClick={handleCloseNotification}
        >
          close
        </Icon>
      </MDBox>

      <MDBox p={3} borderBottom="1px solid #dee2e6">
        <MDTypography
          mb={2}
          sx={({ typography }) => ({
            fontFamily: typography.openSan.fontFamily,
            color: "#172B4D",
            fontSize: 20,
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "137%",
            letterSpacing: "-0.8px",
          })}
        >
          Today
        </MDTypography>
        <MDBox
          sx={({ functions: { pxToRem } }) => ({
            maxHeight: pxToRem(254),
            overflowY: "auto",

            "&::-webkit-scrollbar": {
              width: pxToRem(6),
            },

            "&::-webkit-scrollbar-thumb": {
              background: "#8898aa",
              borderRadius: pxToRem(3),
            },
          })}
        >
          {notifications
            .filter((notification) => notification.isToday)
            .map((item, index) => (
              <MDBox
                key={index}
                sx={({ functions: { pxToRem } }) => ({
                  padding: pxToRem(8),
                  display: "flex",
                  alignItems: "center",
                  gap: pxToRem(16),
                  cursor: "pointer",

                  "&:not(:last-child)": {
                    marginBottom: pxToRem(16),
                  },
                })}
              >
                <MDBox
                  sx={({ functions: { pxToRem } }) => ({
                    width: pxToRem(8),
                    height: pxToRem(8),
                    backgroundColor: item.isNew ? "#1576bc" : "#E9ECEF",
                    borderRadius: pxToRem(4),
                  })}
                />

                <MDBox
                  sx={({ functions: { pxToRem } }) => ({
                    flexGrow: 1,
                    flexBasis: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: pxToRem(8),
                  })}
                >
                  <MDBox
                    sx={({ functions: { pxToRem } }) => ({
                      height: pxToRem(23),
                      borderRadius: pxToRem(8),
                      display: "inline-block",
                      width: "fit-content",
                      padding: pxToRem(4),
                      background: item.tag?.bg,
                    })}
                  >
                    <MDTypography
                      sx={({ typography }) => ({
                        color: "#fff",
                        fontFeatureSettings: `"clig" off, "liga" off`,
                        fontFamily: typography.openSan.fontFamily,
                        fontSize: 12,
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "125%",
                      })}
                    >
                      {item.tag?.text}
                    </MDTypography>
                  </MDBox>
                  <MDBox
                    sx={({ typography, functions: { pxToRem } }) => ({
                      color: "#172b4d",
                      fontFamily: typography.openSan.fontFamily,
                      fontSize: 16,
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "150%",

                      display: "block",
                      textOverflow: "ellipsis",
                      wordWrap: "break-word",
                      overflow: "hidden",
                      maxHeight: "48px",
                      whiteSpace: "break-spaces",
                    })}
                  >
                    <MDBox dangerouslySetInnerHTML={{ __html: item.message }} />
                  </MDBox>

                  <MDBox
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <MDBox sx={{ ...(!item.seen && item.time ? {} : { visibility: "hidden" }) }}>
                      <MDTypography
                        sx={({ typography }) => ({
                          color: "#8898aa",
                          fontFeatureSettings: `"clig" off, "liga" off`,
                          fontFamily: typography.openSan.fontFamily,
                          fontSize: 12,
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "125%",
                        })}
                      >
                        {moment(item.time).fromNow()}, sent by {item.sender}
                      </MDTypography>
                    </MDBox>
                    {item.seen ? (
                      <MDBox sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <MDTypography
                          sx={({ typography }) => ({
                            color: "#8898aa",
                            fontFeatureSettings: `"clig" off, "liga" off`,
                            fontFamily: typography.openSan.fontFamily,
                            fontSize: 12,
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "125%",
                          })}
                        >
                          Seen
                        </MDTypography>{" "}
                        <MDBox component="img" src={SeenImage} />
                      </MDBox>
                    ) : (
                      <></>
                    )}
                  </MDBox>
                </MDBox>
              </MDBox>
            ))}
        </MDBox>
      </MDBox>

      <MDBox
        p={3}
        pt={0}
        sx={() => ({
          flex: "0 1 auto",
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },

          position: "relative",
        })}
      >
        <MDTypography
          mb={2}
          sx={({ typography }) => ({
            paddingTop: "24px",
            fontFamily: typography.openSan.fontFamily,
            color: "#172B4D",
            fontSize: 20,
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "137%",
            letterSpacing: "-0.8px",

            borderBottom: "1px solid #e9ecef",
            position: "sticky",
            top: 0,
            backgroundColor: "#fff",
            zIndex: 1000,
          })}
        >
          Older
        </MDTypography>

        <MDBox
          sx={({ functions: { pxToRem } }) => ({
            marginTop: pxToRem(8),
          })}
        >
          {notifications
            .filter((notification) => !notification.isToday)
            .map((item, index) => (
              <MDBox
                key={index}
                sx={({ functions: { pxToRem } }) => ({
                  padding: pxToRem(8),
                  display: "flex",
                  alignItems: "center",
                  gap: pxToRem(16),
                  cursor: "pointer",

                  padding: pxToRem(8),
                  borderRadius: pxToRem(8),

                  ...(item.isNew ? { background: "#DDF1FF" } : { background: "#F6F9FC" }),

                  "&:not(:last-child)": {
                    marginBottom: pxToRem(16),
                  },
                })}
              >
                <MDBox
                  sx={({ functions: { pxToRem } }) => ({
                    width: pxToRem(8),
                    height: pxToRem(8),
                    backgroundColor: item.isNew ? "#1576bc" : "#E9ECEF",
                    borderRadius: pxToRem(4),
                  })}
                />

                <MDBox
                  sx={({ functions: { pxToRem } }) => ({
                    flexGrow: 1,
                    flexBasis: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: pxToRem(8),
                  })}
                >
                  <MDBox display="flex" justifyContent="space-between" alignItems="center">
                    <MDTypography
                      sx={({ typography }) => ({
                        color: "#000",
                        fontFamily: typography.openSan.fontFamily,
                        fontSize: 16,
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "162.5%",
                        letterSpacing: "-0.8px",
                      })}
                    >
                      {item.tag?.text}
                    </MDTypography>
                    <MDBox component="img" src={MoreHorizImage} />
                  </MDBox>
                  <MDBox
                    sx={({ typography, functions: { pxToRem } }) => ({
                      color: "#172b4d",
                      fontFamily: typography.openSan.fontFamily,
                      fontSize: 16,
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "150%",

                      display: "block",
                      textOverflow: "ellipsis",
                      wordWrap: "break-word",
                      overflow: "hidden",
                      maxHeight: "96px",
                      whiteSpace: "break-spaces",
                    })}
                  >
                    <MDBox dangerouslySetInnerHTML={{ __html: item.message }} />
                  </MDBox>

                  <MDBox
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <MDBox sx={{ ...(!item.seen && item.time ? {} : { visibility: "hidden" }) }}>
                      <MDTypography
                        sx={({ typography }) => ({
                          color: "#8898aa",
                          fontFeatureSettings: `"clig" off, "liga" off`,
                          fontFamily: typography.openSan.fontFamily,
                          fontSize: 12,
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "125%",
                        })}
                      >
                        {moment(item.time).fromNow()}, sent by {item.sender}
                      </MDTypography>
                    </MDBox>
                    {item.seen ? (
                      <MDBox sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <MDTypography
                          sx={({ typography }) => ({
                            color: "#8898aa",
                            fontFeatureSettings: `"clig" off, "liga" off`,
                            fontFamily: typography.openSan.fontFamily,
                            fontSize: 12,
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "125%",
                          })}
                        >
                          Seen
                        </MDTypography>{" "}
                        <MDBox component="img" src={SeenImage} />
                      </MDBox>
                    ) : (
                      <></>
                    )}
                  </MDBox>
                </MDBox>
              </MDBox>
            ))}
        </MDBox>
      </MDBox>
    </NotificationRoot>
  );
}

export default Notification;
