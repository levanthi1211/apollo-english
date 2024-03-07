export function ArrowStyles(theme, ownerState) {
  const {
    breakpoints,
    functions: { pxToRem },
  } = theme;
  const { miniSidenav, type } = ownerState;

  return {
    position: "absolute",
    top: pxToRem(140),
    zIndex: 99,
    cursor: "pointer",
    ...(type === "left" ? { left: "20%" } : { right: "20%" }),

    [breakpoints.down("xl")]: {
      top: pxToRem(70),
      ...(type === "left" ? { left: "30%" } : { right: "30%" }),
    },
  };
}
