import MDBox from "components/MDBox";
import DataTable from "examples/Tables/DataTable";
import dataTableData from "../../data/table";
import { useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  TableRow,
  TableBody,
  Checkbox,
  FormControlLabel,
  Grid,
} from "@mui/material";
import "./custom.css";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import tableItemStyles from "./styles/item";

function TableContent() {
  const [selectedClass, setSelectedClass] = useState(0);

  useEffect(() => {
    const events = document.querySelectorAll(`[data-horizontal-scroll]`);

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    events.forEach((event) => {
      event.addEventListener("mousedown", (e) => {
        isDown = true;
        event.classList.add("active");
        startX = e.pageX - event.offsetLeft;
        scrollLeft = event.scrollLeft;
      });

      event.addEventListener("mouseleave", () => {
        isDown = false;
        event.classList.remove("active");
      });
      event.addEventListener("mouseup", () => {
        isDown = false;
        event.classList.remove("active");
      });
      event.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - event.offsetLeft;

        const walk = (x - startX) * 1; // scroll-fast

        event.scrollLeft = scrollLeft - walk;
      });
    });
  }, []);

  return (
    <MDBox
      id="table-content"
      sx={({ breakpoints, functions: { pxToRem } }) => ({
        marginTop: pxToRem(12),
        position: "relative",

        [breakpoints.down("xxl")]: {
          marginTop: pxToRem(24),
        },
      })}
    >
      <Grid container height="100%" alignItems="stretch">
        <Grid item xs={12} xxl={3} sx={{ zIndex: 99 }}>
          <MDBox
            data-horizontal-scroll
            sx={({ breakpoints, functions: { pxToRem } }) => ({
              position: "relative",
              top: pxToRem(64),
              left: 0,
              width: "100%",
              maxHeight: pxToRem(467),
              overflowY: "scroll",

              "&::-webkit-scrollbar": {
                display: "none",
              },

              [breakpoints.down("xxl")]: {
                top: 0,
                paddingBottom: "14px",
              },
            })}
          >
            <MDBox
              sx={({ breakpoints, functions: { pxToRem } }) => ({
                width: "calc(100% - 14px)",
                border: `1px solid #e0e0e0`,

                [breakpoints.down("xxl")]: {
                  display: "flex",
                  border: "none",
                },
              })}
            >
              {[0, 1, 2, 3, 4, 5, 6].map((value, index) => {
                return (
                  <MDBox
                    key={index}
                    sx={(theme) => tableItemStyles(theme, { selectedClass, value })}
                    onClick={() => {
                      setSelectedClass(value);
                    }}
                  >
                    PNT - PR2 - 0028
                  </MDBox>
                );
              })}
            </MDBox>
          </MDBox>
        </Grid>

        <Grid item xs={12} xxl={9} sx={{ marginLeft: "-14px" }}>
          <MDBox
            data-horizontal-scroll
            sx={({ functions: { pxToRem } }) => ({
              overflowX: "scroll",
              height: pxToRem(530),
              width: "calc(100% + 14px)",
              background: "#fff",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            })}
          >
            <Table
              sx={({ typography, functions: { pxToRem } }) => ({
                color: "#333",
                height: "100%",
                width: "913px",
                minWidth: "100%",
                fontFamily: typography.lexend.fontFamily,
                fontSize: 14,
                fontStyle: "normal",
                lineHeight: "normal",
                letterSpacing: pxToRem(0.42),
              })}
            >
              <MDBox component="thead">
                <TableRow>
                  <MDBox component="th">Student Name</MDBox>
                  <MDBox component="th">Off track category</MDBox>
                  <MDBox component="th">Time range</MDBox>
                  <MDBox component="th">Suggestion</MDBox>
                </TableRow>
              </MDBox>

              <TableBody
                sx={({ functions: { pxToRem } }) => ({
                  maxHeight: pxToRem(454),

                  overflowY: "scroll",
                })}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value, index) => (
                  <TableRow key={index}>
                    <MDBox component="td">
                      <Checkbox
                        defaultChecked
                        sx={{
                          "&.Mui-checked .MuiSvgIcon-root": {
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -1 22 22'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M6 10l3 3l6-6'/%3e%3c/svg%3e"),linear-gradient(195deg, #F25586, #F25586) !important`,
                            borderColor: "#F25586",
                          },
                          "& .MuiSvgIcon-root": {
                            fontSize: 18,
                            borderRadius: "4px",
                          },
                        }}
                      />
                      <MDTypography
                        variant="span"
                        sx={({ typography, functions: { pxToRem } }) => ({
                          color: "#333",
                          fontFamily: typography.lexend.fontFamily,
                          fontSize: 14,
                          fontStyle: "normal",
                          fontWeight: 500,
                          lineHeight: "normal",
                          letterSpacing: "0.42px",
                        })}
                      >
                        Student name {value}
                      </MDTypography>
                    </MDBox>

                    <MDBox component="td">
                      <MDBox
                        sx={({ functions: { pxToRem } }) => ({
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: pxToRem(11),
                          width: "100%",
                          height: "100%",
                        })}
                      >
                        {["Home Learning", "Engagement"].map((title, index) => (
                          <MDButton
                            key={index}
                            sx={({ typography, palette, functions: { pxToRem } }) => ({
                              cursor: "pointer",
                              borderRadius: pxToRem(4),
                              background: "#1576bc",
                              width: pxToRem(114),
                              height: pxToRem(32),
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",

                              color: palette.white.main,
                              textAlign: "center",
                              fontFamily: typography.lexend.fontFamily,
                              fontSize: 12,
                              fontStyle: "normal",
                              fontWeight: 700,
                              lineHeight: "normal",
                              letterSpacing: pxToRem(0.36),
                              textTransform: "unset",
                              padding: 0,
                              zIndex: 0,

                              "&:hover": {
                                color: "#1576bc",
                                border: "1px solid #1576bc",
                              },
                            })}
                          >
                            {title}
                          </MDButton>
                        ))}
                      </MDBox>
                    </MDBox>

                    <MDBox component="td">4 weeks</MDBox>
                    <MDBox component="td">Suggest for tutor</MDBox>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </MDBox>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default TableContent;
