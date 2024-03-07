import { Icon, Popover } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DeadlineIcon from "components/icons/DeadlineIcon";
import WarningIcon from "components/icons/WarningIcon";
import PropTypes from "prop-types";
import { useState } from "react";

function Deadline({ numOfDeadlines }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <MDBox
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        sx={({ breakpoints }) => ({
          display: "flex",
          background: "#f56565",
          boxShadow: "0px 2px 6px 0px #00000040",

          gap: "2.5px",
          justifyContent: "center",
          alignItems: "center",
          width: "37px",
          height: "29px",
          borderRadius: "4px",
          cursor: "pointer",
          position: "relative",

          [breakpoints.down("xl")]: {
            transform: "scale(0.6)",
          },
        })}
      >
        <Icon component={() => <DeadlineIcon />} />
        <MDTypography
          sx={({ breakpoints }) => ({
            fontFamily: "Open Sans",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "21px",
            letterSpacing: "0em",
            textAlign: "center",
            color: "#fff",
          })}
        >
          {numOfDeadlines}
        </MDTypography>
      </MDBox>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{
          left: 6,
          top: 3,
          "& .MuiPopover-paper": {
            padding: 0,
            zIndex: 9999,
            border: "1px solid #e74c3c",
            background: "#fff",
          },
        }}
      >
        <MDBox sx={{ display: "flex", width: 350, height: 116, alignItems: "stretch" }}>
          <MDBox sx={{ opacity: 0.4, background: "#e74c3c", width: "8px" }}></MDBox>
          <MDBox sx={{ marginTop: "16px", marginLeft: "12px", marginRight: "16px" }}>
            <Icon component={WarningIcon} />
          </MDBox>
          <MDBox sx={{ padding: "16px 4px 20px 0px" }}>
            <MDTypography
              sx={{
                color: "rgba(0, 0, 0, 0.56)",
                fontFamily: "Inter",
                fontSize: "10px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "16px",
                letterSpacing: "0.125px",
                marginBottom: "4px",
              }}
            >
              UNDONE TASKS
            </MDTypography>
            <MDTypography
              sx={{
                color: "#373737",
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "20px",
                marginBottom: "8px",
              }}
            >
              Deadline incoming!!!
            </MDTypography>
            <MDTypography
              sx={{
                color: "rgba(0, 0, 0, 0.56)",
                fontFamily: "Inter",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "18px",
              }}
            >
              You have 5 undone tasks with their deadlines today.
              <span style={{ color: "#1576bc" }}>Click here</span> for more details!
            </MDTypography>
          </MDBox>
        </MDBox>
      </Popover>
    </>
  );
}

Deadline.propTypes = {
  numOfDeadlines: PropTypes.number,
};

export default Deadline;
