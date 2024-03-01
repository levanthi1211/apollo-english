import PropTypes from "prop-types";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function Card({ title, progress, logoBg, logo, diff, time }) {
  return (
    <MDBox
      sx={({ palette, functions: { pxToRem } }) => ({
        cursor: "pointer",
        width: pxToRem(297),
        height: pxToRem(118),
        borderRadius: pxToRem(20),
        background: palette.white.main,
        boxShadow: "0px 5px 14px 0px rgba(0, 0, 0, 0.05)",
        padding: "16px 24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      })}
    >
      <MDBox sx={{ display: "flex", justifyContent: "space-between" }}>
        <MDBox
          sx={({ functions: { pxToRem } }) => ({
            display: "flex",
            flexDirection: "column",
            gap: pxToRem(8),
          })}
        >
          <MDTypography
            variant="p"
            sx={({ typography }) => ({
              color: "#8392ab",
              fontFamily: typography.lexend.fontFamily,
              fontSize: 14,
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
              letterSpacing: "0.52px",
            })}
          >
            {title}
          </MDTypography>
          <MDTypography
            sx={({ typography }) => ({
              color: "#172b4d",
              fontFamily: typography.openSan.fontFamily,
              fontSize: 20,
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "100%",
            })}
          >
            {progress}%
          </MDTypography>
        </MDBox>
        <MDBox
          sx={({ functions: { pxToRem } }) => ({
            width: pxToRem(48),
            height: pxToRem(48),
            borderRadius: pxToRem(48),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: logoBg,
          })}
        >
          {logo({})}
        </MDBox>
      </MDBox>
      <MDBox
        sx={({ functions: { pxToRem } }) => ({
          display: "flex",
          gap: pxToRem(8),
          alignItems: "center",
        })}
      >
        <MDTypography
          sx={({ typography }) => ({
            color: diff > 0 ? "#2dce89" : "#e01e5a",
            fontFeatureSettings: `"clig" off, "liga" off`,
            fontFamily: typography.openSan.fontFamily,
            fontSize: 14,
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
          })}
        >
          {diff}%
        </MDTypography>
        <MDTypography
          sx={({ typography }) => ({
            color: "#8392ab",
            fontFeatureSettings: `"clig" off, "liga" off`,
            fontFamily: typography.lexend.fontFamily,
            fontSize: 14,
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          })}
        >
          {time}
        </MDTypography>
      </MDBox>
    </MDBox>
  );
}

Card.defaultProps = {
  title: "",
  progress: 0,
  logoBg: "white",
  logo: () => <></>,
  time: "",
};

Card.propTypes = {
  title: PropTypes.string,
  progress: PropTypes.number,
  logoBg: PropTypes.string,
  logo: PropTypes.node,
  diff: PropTypes.number,
  time: PropTypes.string,
};

export default Card;
