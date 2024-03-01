import { Icon } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import PropTypes from "prop-types";

// Icons
import DatabaseIcon from "components/icons/DatabaseIcon";
import IncreaseIcon from "components/icons/IncreaseIcon";
import DecreaseIcon from "components/icons/DecreaseIcon";

//Images
import BronzeImage from "assets/images/apollo-english/bronze.jpg";
import SilverImage from "assets/images/apollo-english/silver.jpg";
import GoldImage from "assets/images/apollo-english/gold.jpg";

function Leaderboard({ header, tags, subtitle, ranking, users }) {
  const renderRanking = (ranking) => {
    switch (ranking) {
      case 1:
        return <MDBox component="img" src={GoldImage} />;
      case 2:
        return <MDBox component="img" src={SilverImage} />;
      case 3:
        return <MDBox component="img" src={BronzeImage} />;
      default:
        return <span>#{ranking}</span>;
    }
  };

  return (
    <MDBox
      sx={({ palette, functions: { pxToRem } }) => ({
        width: pxToRem(450),
        height: pxToRem(400),
        borderRadius: pxToRem(20),
        background: palette.white.main,
        boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.1)",
        padding: pxToRem(24),
        justifyContent: "space-between",
        flexDirection: "column",
        display: "flex",
      })}
    >
      <MDBox sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <MDTypography
          variant="h1"
          sx={({ typography, functions: { pxToRem } }) => ({
            fontFamily: typography.lexend.fontFamily,
            fontSize: 20,
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "137%",
            letterSpacing: pxToRem(-0.8),
          })}
        >
          {header}
        </MDTypography>
        {tags ? (
          <MDBox
            sx={({ functions: { pxToRem } }) => ({
              display: "flex",
              gap: pxToRem(3),
              marginRight: pxToRem(-15),
            })}
          >
            {["ACADEMIC", "BUSSINES", "SERVICE"].map((tag, index) => (
              <MDBox
                key={index}
                sx={({ typography, functions: { pxToRem } }) => ({
                  borderRadius: pxToRem(6),
                  background: "#b0eed3",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: `${pxToRem(4)} ${pxToRem(8)}`,
                  color: "#1aae6f",
                  textAlign: "center",
                  fontFamily: typography.lexend.fontFamily,
                  fontSize: 8,
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: pxToRem(12),
                  textTransform: "uppercase",

                  "&:not(:first-child)": {
                    background: "#eaeaea",
                  },
                })}
              >
                {tag}
              </MDBox>
            ))}
          </MDBox>
        ) : (
          <></>
        )}
      </MDBox>

      <MDBox
        sx={({ functions: { pxToRem } }) => ({
          height: pxToRem(88),
          borderRadius: pxToRem(20),
          background: "#1576bc",
          boxShadow: "0px 5px 14px 0px rgba(0, 0, 0, 0.05)",
          padding: pxToRem(16),
          display: "flex",
          justifyContent: "space-between",
        })}
      >
        <MDBox sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <MDTypography
            variant="p"
            sx={({ palette, typography }) => ({
              color: palette.white.main,
              fontFamily: typography.openSan.fontFamily,
              fontSize: 14,
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "150%",
              opacity: 0.7,
            })}
          >
            {subtitle}
          </MDTypography>
          <MDTypography
            variant="p"
            sx={({ palette, typography }) => ({
              color: palette.white.main,
              fontFamily: typography.openSan.fontFamily,
              fontSize: 14,
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "137%",
              letterSpacing: "-0.8px",
            })}
          >
            #{ranking}
          </MDTypography>
        </MDBox>

        <MDBox
          sx={({ palette, functions: { pxToRem } }) => ({
            width: pxToRem(48),
            height: pxToRem(48),
            backgroundColor: palette.white.main,
            borderRadius: pxToRem(24),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          })}
        >
          <Icon component={DatabaseIcon} />
        </MDBox>
      </MDBox>

      <MDBox
        sx={({ functions: { pxToRem } }) => ({
          display: "flex",
          flexDirection: " column",
          gap: pxToRem(16),
        })}
      >
        {users.map((user, index) => (
          <MDBox
            key={index}
            sx={({ functions: { pxToRem } }) => ({
              display: "flex",
              gap: pxToRem(16),
              alignItems: "center",
              height: pxToRem(24),
            })}
          >
            <MDBox
              sx={({ typography, functions: { pxToRem } }) => ({
                flexGrow: 0,
                flexBasis: 0,
                width: pxToRem(24),

                "& > img": {
                  display: "block",
                },

                "& > span": {
                  width: pxToRem(24),
                  display: "block",
                  color: "#172b4d",
                  fontFamily: typography.lexend.fontFamily,
                  fontSize: 16,
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "150%",
                },
              })}
            >
              {renderRanking(user.ranking)}
            </MDBox>

            <MDBox
              sx={({ functions: { pxToRem } }) => ({
                flexGrow: 1,
                flexBasis: 0,
                display: "flex",
                alignItems: "center",
                gap: pxToRem(8),
              })}
            >
              {user.avatar ? (
                <MDBox
                  sx={({ functions: { pxToRem } }) => ({
                    width: pxToRem(24),
                    height: pxToRem(24),
                    position: "relative",
                  })}
                >
                  <MDBox
                    component="img"
                    src={user.avatar}
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                    }}
                  />
                  <MDBox
                    sx={({ functions: { pxToRem } }) => ({
                      position: "absolute",
                      top: 0,
                      right: 0,
                      border: `1px solid #20c997`,
                      outline: `1px solid white`,
                      width: pxToRem(8),
                      height: pxToRem(8),
                      borderRadius: "50%",
                      zIndex: 99,
                      background: user.online ? "#20c997" : "white",
                    })}
                  ></MDBox>
                </MDBox>
              ) : user.avatarAlt ? (
                <MDBox
                  sx={({ typography, functions: { pxToRem } }) => ({
                    width: pxToRem(24),
                    height: pxToRem(24),
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: user.avatarAltBg,

                    "& > span": {
                      color: "#fff",
                      fontFamily: typography.openSan,
                      fontSize: 10,
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "150%",
                    },
                  })}
                >
                  <span>{user.avatarAlt}</span>
                </MDBox>
              ) : (
                <></>
              )}

              <MDTypography
                sx={({ typography }) => ({
                  color: "#172b4d",
                  fontFamily: typography.lexend.fontFamily,
                  fontSize: 16,
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "150%",
                })}
              >
                {user.name}
              </MDTypography>
            </MDBox>

            {user.change > 0 ? (
              <MDBox
                sx={({ typography }) => ({
                  flexGrow: 0,
                  flexBasis: 0,
                  display: "flex",
                  alignItems: "center",
                  fontFamily: typography.openSan.fontFamily,
                  fontSize: 16,
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "150%",
                  color: "#2dce89",
                })}
              >
                +{user.change} <IncreaseIcon />
              </MDBox>
            ) : user.change < 0 ? (
              <MDBox
                sx={({ typography }) => ({
                  flexGrow: 0,
                  flexBasis: 0,
                  display: "flex",
                  alignItems: "center",
                  fontFamily: typography.openSan.fontFamily,
                  fontSize: 16,
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "150%",
                  color: "#f56565",
                })}
              >
                {user.change} <DecreaseIcon />
              </MDBox>
            ) : (
              <></>
            )}
          </MDBox>
        ))}
      </MDBox>
    </MDBox>
  );
}

Leaderboard.defaultProps = {
  badges: false,
  subtitle: "",
  users: [],
};

Leaderboard.propTypes = {
  header: PropTypes.string.isRequired,
  tags: PropTypes.boolean,
  subtitle: PropTypes.string,
  ranking: PropTypes.number.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      ranking: PropTypes.number,
      avatar: PropTypes.string.isRequired,
      online: PropTypes.boolean,
      avatarAlt: PropTypes.string,
      avatarAltBg: PropTypes.string,
      name: PropTypes.string,
      change: PropTypes.number,
    })
  ),
};

export default Leaderboard;
