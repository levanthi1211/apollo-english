import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { useRef } from "react";
import "./custom.css";
import Slider from "react-slick";
import { Icon } from "@mui/material";
import AdvertisePrevIcon from "components/icons/AdvertisePrevIcon";
import AdvertiseNextIcon from "components/icons/AdvertiseNextIcon";

const advertiseImage =
  "https://s3-alpha-sig.figma.com/img/f8a1/92fd/579fdc51fd66c22f60e701888d0a6796?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lW3Y2q-hVzG7emfDxEtROjX82Bds4MDHUMR0aD9dSKwQ9yFyqqrKcVDmXH-MHOqXQOcesMgcEd-v7ZQc0a1dxSvFdLT8JA-Kxh9tBo6eSsL10svCKJ~QmpjJGJChINozbK2e9B4v2gM65b8i8kJWA8Eb5K1knYsDLAeSPIZVRIavbzXSK3txqijgLuN33IFQNmguUOAivF0fa0be17JkPr1bHnPd-qvq3fMN4WHch6uc6gjtbrPBEOzPt1EYdYBLsDd0MrqeS9NbXR3RWPgbNtVJ8Pr-453NC2HDqKC9fXket~hNmru3-CFfqMpCDSQyRW0mHt0XG3LTCoOtqajAgg__";

function Advertise() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <MDBox
      sx={({ functions: { pxToRem } }) => ({
        width: pxToRem(610),
        height: pxToRem(400),
        borderRadius: pxToRem(20),
        position: "relative",
        overflow: "hidden",
      })}
    >
      <Slider ref={sliderRef} {...settings}>
        {[1, 2, 3, 4].map((index) => {
          return (
            <MDBox key={index} sx={{ height: "100%", width: "100%", display: "block" }}>
              <MDBox
                sx={{
                  height: "100%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "0px 100%, center",
                  position: "relative",
                  backgroundImage: `url(${advertiseImage})`,
                }}
              >
                <MDBox
                  sx={({ palette, functions: { pxToRem } }) => ({
                    width: pxToRem(340),
                    height: `${pxToRem(44)} !important`,
                    padding: `${pxToRem(13)} ${pxToRem(11)}`,
                    cursor: "pointer",
                    background: palette.white.main,
                    borderRadius: pxToRem(8),
                    position: "absolute",
                    top: pxToRem(16),
                    left: pxToRem(8),
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    zIndex: 99,
                  })}
                >
                  <MDTypography
                    sx={({ typography }) => ({
                      color: "#161616",
                      fontFamily: typography.lexend.fontFamily,
                      fontSize: 20,
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "137%",
                      letterSpacing: "-0.8px",
                    })}
                  >
                    APOLLO ON AIR
                  </MDTypography>
                  <MDBox
                    sx={({ functions: { pxToRem } }) => ({
                      width: pxToRem(18),
                      height: pxToRem(18),
                      borderRadius: "50%",
                      backgroundColor: "#f00",
                    })}
                  ></MDBox>
                </MDBox>
              </MDBox>
            </MDBox>
          );
        })}
      </Slider>

      <MDBox
        sx={({ functions: { pxToRem } }) => ({
          position: "absolute",
          top: pxToRem(48),
          right: pxToRem(48),
          zIndex: 99,
          display: "flex",
        })}
      >
        <MDBox sx={{ cursor: "pointer" }} onClick={() => sliderRef?.current?.slickPrev()}>
          <Icon component={AdvertisePrevIcon} />
        </MDBox>
        <MDBox sx={{ cursor: "pointer" }} onClick={() => sliderRef?.current?.slickNext()}>
          <Icon component={AdvertiseNextIcon} />
        </MDBox>
      </MDBox>
    </MDBox>
  );
}

export default Advertise;
