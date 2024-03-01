import FullCalendar from "@fullcalendar/react";
import { Icon } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MonthNextIcon from "components/icons/MonthNextIcon";
import MonthPrevIcon from "components/icons/MonthPrevIcon";
import moment from "moment";
import { useRef, useState } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./custom.css";
import Position from "../Position";

function MonthCalendar() {
  const calendarRef = useRef(null);

  const [title, setTitle] = useState("");

  return (
    <MDBox
      sx={{
        boxShadow: "0px 2px 6px 0px #00000040",
        height: "100%",
        width: "339px",
        borderRadius: "20px",
        gap: "16px",
        padding: "24px",
        background: "#fff",
      }}
      id="right_side_calendar"
    >
      <MDBox
        sx={{ borderBottom: "1px solid #dee2e6", paddingBottom: "16px", marginBottom: "16px" }}
      >
        <MDBox
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "8px",
          }}
        >
          <MDTypography
            sx={{
              fontFamily: "Open Sans",
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: "25px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "#525f7f",
            }}
          >
            {title}
          </MDTypography>

          <MDBox sx={{ display: "flex", gap: "8px" }}>
            <MDBox
              onClick={() => {
                calendarRef.current?.getApi().prev();
                setTitle(calendarRef.current?.getApi().view.title || "");
              }}
            >
              <Icon component={MonthPrevIcon} />
            </MDBox>
            <MDBox
              onClick={() => {
                calendarRef.current?.getApi().next();
                setTitle(calendarRef.current?.getApi().view.title || "");
              }}
            >
              <Icon component={MonthNextIcon} />
            </MDBox>
          </MDBox>
        </MDBox>

        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin]}
          titleFormat={(info) => {
            const startDate = info.start.marker;
            return `${moment(startDate).format("MMM")}, ${moment(startDate).format("YYYY")}`;
          }}
          viewDidMount={({ view }) => {
            setTitle(view.title);
          }}
          initialView="dayGridMonth"
          firstDay={1}
          headerToolbar={false}
          height="auto"
          events={[
            {
              start: moment().startOf("isoWeek").weekday(1).format("YYYY-MM-DD"),
              end: moment().startOf("isoWeek").weekday(8).format("YYYY-MM-DD"),
              display: "background",
            },
          ]}
          dayHeaderContent={({ date }) => {
            return (
              <MDBox sx={{ display: "flex", flexDirection: "column" }}>
                {moment(date).format("dd")}
              </MDBox>
            );
          }}
        />
      </MDBox>

      <Position />
    </MDBox>
  );
}

export default MonthCalendar;
