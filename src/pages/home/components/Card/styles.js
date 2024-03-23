export function cardStyles(theme, ownerState) {
  const {
    breakpoints,
    palette,
    functions: { pxToRem },
  } = theme;

  return {
    cursor: "pointer",
    width: "100%",
    height: pxToRem(120),
    borderRadius: pxToRem(20),
    background: palette.white.main,
    boxShadow: "0px 5px 14px 0px rgba(0, 0, 0, 0.05)",
    padding: `${pxToRem(16)} ${pxToRem(24)}`,
  };
}
