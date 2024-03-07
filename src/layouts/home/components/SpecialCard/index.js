import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

const specialCardBg =
  "https://s3-alpha-sig.figma.com/img/efb6/acbc/a0ed57fc3eaae7eb2a8ed738efdd66ff?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M9wIhGx0Qi6tMWQKkzm421XTmHpxgwPdS12GfjzzuTiHIgsr-TFQIL0VIp8UdyXUMbritkAzPMnNanlhAOkq7TD9eSCX~2Jy8gARFt0YFEMlX6iVIpML7t8pI8uZ5gUPQmwa28YH90pwutDcDGV9WcZ9Mw8KdaMjytPaRgEhH8bmr~i5IhEbXwApdTxGKOBmsiqfRqCjfuGSgkZnnNuXnq9oXnP1NzWdM6Jv~Jt4ISfFXyg0BIuqV2Cwx~qZj8W~MWGRYMIxwAPASFetlUrCDLo206PCB~EhlzGa76yuJVWpnXthyK5ZEy-2PxdDXR1AgJooMkLJDt4crg2rUSO9Mg__";

function SpecialCard() {
  return (
    <MDBox
      width="100%"
      position="relative"
      overflow="hidden"
      cursor="pointer"
      sx={({ functions: { pxToRem } }) => ({
        height: pxToRem(118),
        borderRadius: pxToRem(15),
        backgroundImage: `url(${specialCardBg})`,
        backgroundSize: "cover",
      })}
    >
      <MDBox
        width="100%"
        height="100%"
        top={0}
        left={0}
        position="absolute"
        sx={{
          opacity: 0.75,
          background: "linear-gradient(122deg, #11cdef 9.06%, #1171ef 88.15%)",
          position: "absolute",
          zIndex: 0,
        }}
      ></MDBox>
      <MDBox
        sx={({ functions: { pxToRem } }) => ({
          zIndex: 1,
          padding: `${pxToRem(12.5)} 0`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        })}
      >
        <MDTypography
          variant="h3"
          sx={({ typography, palette }) => ({
            color: palette.white.main,
            textAlign: "center",
            fontFamily: typography.openSan.fontFamily,
            fontSize: 16,
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "162.5%",
            letterSpacing: "-0.8px",
          })}
        >
          KPI SCORE - YTD
        </MDTypography>
        <MDTypography
          variant="h2"
          sx={({ typography, palette }) => ({
            color: palette.white.main,
            textAlign: "center",
            fontFamily: typography.lexend.fontFamily,
            fontSize: 30,
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "130%",
            letterSpacing: "-0.8px",
          })}
        >
          45%
        </MDTypography>
        <MDBox
          sx={({ functions: { pxToRem } }) => ({
            display: "flex",
            height: pxToRem(29),
            padding: pxToRem(8),
            justifyContent: "center",
            alignItems: "center",
            gap: pxToRem(8),
            flexShrink: 0,
            background: "#009a58",
            width: "100%",
          })}
        >
          <MDTypography
            sx={({ typography }) => ({
              color: "#f6f9fc",
              textAlign: "center",
              fontFamily: typography.openSan.fontFamily,
              fontSize: 14,
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "150%",
            })}
          >
            +15% since last month
          </MDTypography>
        </MDBox>
      </MDBox>
    </MDBox>
  );
}

export default SpecialCard;
