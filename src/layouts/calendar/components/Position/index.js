import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { useState } from "react";

// Mui components
import { Icon } from "@mui/material";

//Data
import { tabs, positions, users } from "layouts/calendar/data/positions";

//CustomIcon
import MailIcon from "components/icons/MailIcon";

function Position() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <MDBox>
      <MDTypography
        sx={{
          fontFamily: "Open Sans",
          fontSize: "20px",
          fontWeight: 600,
          lineHeight: "27px",
          letterSpacing: "-0.8px",
          textAlign: "left",
          color: "#32325d",
        }}
      >
        Center available calendar
      </MDTypography>
      <MDBox
        sx={{
          width: "100%",
          borderRadius: "12px",
          padding: "4px",
          background: "#f6f9fc",
          marginTop: "16px",
          display: "flex",
        }}
      >
        {tabs.map((tab, index) => {
          return (
            <MDBox
              key={index}
              sx={{
                flexGrow: 1,
                flexBasis: "0",
                borderRadius: "8px",
                height: "35px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",

                ...(index === tabIndex
                  ? { background: "#ffffff", boxShadow: "0px 2px 6px 0px #00000040" }
                  : {}),
              }}
              onClick={() => {
                setTabIndex(index);
              }}
            >
              <MDTypography
                sx={{
                  fontFamily: "Open Sans",
                  color: "#172b4d",
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "15px",
                  letterSpacing: "0px",
                  textAlign: "center",
                }}
              >
                {tab.title}
              </MDTypography>
            </MDBox>
          );
        })}
      </MDBox>
      <MDBox mt={2}>
        {users
          .filter((item) => {
            if (tabIndex === 0) return true;
            const positionName = positions[tabIndex - 1].name;
            return item.tag === positionName;
          })
          .map((item, index) => {
            const positionInfo = positions.find((position) => position.name === item.tag);
            return (
              <MDBox
                key={index}
                sx={{ padding: "8px 16px", display: "flex", alignItems: "center" }}
              >
                <MDBox sx={{ marginRight: "8px" }}>
                  <MDBox sx={{ position: "relative" }}>
                    <MDBox
                      sx={{
                        position: "absolute",
                        borderRadius: "50%",
                        outline: "1px solid white",
                        background: "white",
                        width: "8px",
                        height: "8px",
                        border: "1px solid #20c997",
                        top: "0px",
                        right: "0px",
                      }}
                    ></MDBox>
                    <MDBox
                      sx={{ width: 24, height: 24, borderRadius: 12 }}
                      component="img"
                      src={item.avatar}
                    />
                  </MDBox>
                </MDBox>
                <MDBox
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <MDBox
                    sx={{
                      fontFamily: "Lexend",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "24px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "#172b4d",
                      marginBottom: 0,
                    }}
                  >
                    {item.name}
                  </MDBox>
                  <MDBox
                    sx={{
                      display: "inline-block",
                      padding: "2px 4px",
                      fontFamily: "Open Sans",
                      fontSize: "12px",
                      fontWeight: 400,
                      lineHeight: "15px",
                      letterSpacing: "0px",
                      textAlign: "left",
                      borderRadius: "2px",
                      backgroundColor: positionInfo?.bg,
                      color: positionInfo?.color,
                    }}
                  >
                    {item.tag}
                  </MDBox>
                </MDBox>
                <MDBox>
                  <MDBox sx={{ cursor: "pointer" }}>
                    <Icon component={MailIcon} />
                  </MDBox>
                </MDBox>
              </MDBox>
            );
          })}
      </MDBox>
    </MDBox>
  );
}
export default Position;
