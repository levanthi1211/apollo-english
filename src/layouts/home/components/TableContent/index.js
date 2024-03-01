import MDBox from "components/MDBox";
import DataTable from "examples/Tables/DataTable";
import dataTableData from "../../data/table";
import { useState } from "react";
import {
  TableContainer,
  Table,
  TableRow,
  TableBody,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import "./custom.css";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

function TableContent() {
  const [selectedClass, setSelectedClass] = useState(0);
  return (
    <MDBox
      id="table-content"
      sx={({ functions: { pxToRem } }) => ({
        marginTop: pxToRem(12),
        position: "relative",
      })}
    >
      <MDBox
        sx={({ functions: { pxToRem } }) => ({
          position: "absolute",
          maxHeight: pxToRem(467),
          width: pxToRem(346.3),
          top: pxToRem(64),
          left: 0,
          overflowY: "scroll",

          "&::-webkit-scrollbar": {
            display: "none",
          },
        })}
      >
        <MDBox
          sx={({ functions: { pxToRem } }) => ({
            width: pxToRem(333),
            border: `1px solid #e0e0e0`,
          })}
        >
          {[0, 1, 2, 3, 4, 5, 6].map((value, index) => {
            return (
              <MDBox
                key={index}
                sx={({ typography, functions: { pxToRem } }) => ({
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

                  "&:not(:last-child)": {
                    borderBottom: "1px solid #e0e0e0",
                  },

                  ...(selectedClass === value
                    ? {
                        borderRight: "2px solid #3b6ef8",

                        "&:after": {
                          content: '""',
                          position: "absolute",
                          left: "100%",
                          top: "50%",
                          transform: "translateY(-50%)",
                          width: pxToRem(13.3),
                          height: pxToRem(36),
                          backgroundColor: "#3b6ef8",
                          clipPath: "polygon(100% 50%, 0 0, 0 100%)",
                        },
                      }
                    : {}),
                })}
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

      <MDBox
        sx={({ functions: { pxToRem } }) => ({
          position: "absolute",
          left: pxToRem(333),
          top: 0,
          zIndex: -1,
          overflow: "auto",
          height: pxToRem(530),
          width: pxToRem(913),

          "&::-webkit-scrollbar": {
            display: "none",
          },
        })}
      >
        <Table
          sx={({ typography, functions: { pxToRem } }) => ({
            width: pxToRem(913),
            color: "#333",
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
    </MDBox>
  );
}

export default TableContent;
