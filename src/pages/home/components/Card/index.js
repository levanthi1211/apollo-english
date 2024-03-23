import PropTypes from "prop-types";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// context
import { useMaterialUIController } from "context";

// styles
import { cardStyles } from "./styles";

function Card({ title, progress, logoBg, logo, diff, time }) {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode } = controller;
  return (
    <MDBox
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      sx={(theme) => cardStyles(theme, { miniSidenav })}
    >
      <MDBox sx={{ display: "flex", justifyContent: "space-between" }}>
        <MDBox display="flex" flexDirection="column" gap={1}>
          <MDTypography
            fontWeight="bold"
            fontStyle="normal"
            letterSpacing="0.52px"
            lineHeight="normal"
            sx={({ typography, breakpoints }) => ({
              fontSize: 14,
              color: "#8392ab",
              fontFamily: typography.lexend.fontFamily,

              [breakpoints.down(375)]: {
                fontSize: 12,
              },
            })}
          >
            {title}
          </MDTypography>
          <MDTypography
            fontWeight="bold"
            fontStyle="normal"
            lineHeight="100%"
            sx={({ typography, breakpoints }) => ({
              fontSize: 20,
              color: "#172b4d",
              fontFamily: typography.openSan.fontFamily,

              [breakpoints.down(375)]: {
                fontSize: 16,
              },
            })}
          >
            {progress}%
          </MDTypography>
        </MDBox>
        <MDBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={({ breakpoints, functions: { pxToRem } }) => ({
            width: pxToRem(48),
            height: pxToRem(48),
            borderRadius: pxToRem(48),
            background: logoBg,

            [breakpoints.down(375)]: {
              width: pxToRem(40),
              height: pxToRem(40),
            },
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
          sx={({ typography, breakpoints }) => ({
            color: diff > 0 ? "#2dce89" : "#e01e5a",
            fontFeatureSettings: `"clig" off, "liga" off`,
            fontFamily: typography.openSan.fontFamily,
            fontSize: 14,
            fontWeight: 700,

            [breakpoints.down(375)]: {
              fontSize: 12,
            },
          })}
        >
          {diff}%
        </MDTypography>
        <MDTypography
          sx={({ typography, breakpoints }) => ({
            color: "#8392ab",
            fontFeatureSettings: `"clig" off, "liga" off`,
            fontFamily: typography.lexend.fontFamily,
            fontSize: 14,
            fontWeight: 400,

            [breakpoints.down(375)]: {
              fontSize: 12,
            },
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
