export default function homeStyles(theme, ownerState) {
  const {
    breakpoints,
    functions: { pxToRem },
  } = theme;

  return {
    top: pxToRem(-20),
    margin: "0 auto",
    position: "relative",

    [breakpoints.up("xxl")]: {
      width: `calc(100% - 150px)`,
    },

    [breakpoints.up("xl")]: {
      width: `calc(100% - 120px)`,
    },

    [breakpoints.up("lg")]: {
      width: `calc(100% - 100px)`,
    },

    [breakpoints.up("md")]: {
      width: `calc(100% - 80px)`,
    },

    [breakpoints.down("md")]: {
      width: `calc(100% - 40px)`,
    },
  };
}
