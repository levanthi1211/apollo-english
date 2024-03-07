export default function tableItemStyles(theme, ownerState) {
  const {
    breakpoints,
    typography,
    functions: { pxToRem },
  } = theme;

  const { selectedClass, value } = ownerState;

  const rightArrowStyle = {
    content: '""',
    position: "absolute",
    left: "100%",
    top: "50%",
    transform: "translateY(-50%)",
    width: pxToRem(13.3),
    height: pxToRem(36),
    backgroundColor: "#3b6ef8",
    clipPath: "polygon(100% 50%, 0 0, 0 100%)",
  };

  const bottomArrowStyle = {
    content: '""',
    position: "absolute",
    left: "50%",
    top: "100%",
    transform: "translateX(-50%)",
    width: pxToRem(36),
    height: pxToRem(13.3),
    backgroundColor: "#3b6ef8",
    clipPath: "polygon(50% 100%, 0 0, 100% 0)",
  };

  return {
    width: "100%",
    height: pxToRem(93),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    position: "relative",

    color: "#4f4f4f",
    fontFamily: typography.lexend.fontFamily,
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "162.5%",

    [breakpoints.down("xxl")]: {
      minWidth: pxToRem(285),
      border: "1px solid #e0e0e0",
      borderLeft: 0,
      ...(selectedClass === value
        ? {
            borderBottom: "2px solid #3b6ef8",

            "&:after": bottomArrowStyle,
          }
        : {}),
    },

    [breakpoints.down("xl")]: {
      fontSize: 14,
    },

    [breakpoints.down("md")]: {
      fontSize: 12,
    },

    [breakpoints.up("xxl")]: {
      "&:not(:last-child)": {
        borderBottom: "1px solid #e0e0e0",
      },
      ...(selectedClass === value
        ? {
            borderRight: "2px solid #3b6ef8",

            "&:after": rightArrowStyle,
          }
        : {}),
    },
  };
}
