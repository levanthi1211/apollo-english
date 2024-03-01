import { Icon } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { useState, useRef } from "react";
import WeeklyPrevIcon from "components/icons/WeeklyPrevIcon";
import WeeklyNextIcon from "components/icons/WeeklyNextIcon";

//Data
import timezones from "layouts/calendar/data/timezone";
import events from "layouts/calendar/data/events";

// Images
import SelectArrowIcon from "assets/images/apollo-english/select_arrow.jpg";

//Libraries
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import moment from "moment";

// Styles
import "./custom.css";
import Deadline from "../Deadline";

function WeeklyCalendar() {
  const [title, setTitle] = useState("");
  const calendarRef = useRef(null);

  return (
    <MDBox
      sx={({ functions: { pxToRem } }) => ({
        width: pxToRem(1212),
        height: "100%",
        boxShadow: ["0px 4px 4px 0px #00000040", "0px 2px 6px 0px #00000040"],
        borderRadius: pxToRem(20),
        padding: `${pxToRem(24)} ${pxToRem(16)} 0`,
        background: "#fff",
      })}
      id="weekly"
    >
      <MDBox
        sx={{
          marginLeft: "52px",
          marginRight: "17px",
          height: "40px",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <MDBox sx={{ display: "flex", alignItems: "center", gap: "16px", height: 28 }}>
          <MDBox
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              "& > div": {
                height: 28,
                cursor: "pointer",
              },
            }}
          >
            <MDBox
              onClick={() => {
                calendarRef.current?.getApi().prev();
                setTitle(calendarRef.current?.getApi().view.title || "");
              }}
            >
              <Icon component={WeeklyPrevIcon} />
            </MDBox>
            <MDBox
              onClick={() => {
                calendarRef.current?.getApi().next();
                setTitle(calendarRef.current?.getApi().view.title || "");
              }}
            >
              <Icon component={WeeklyNextIcon} />
            </MDBox>
          </MDBox>

          <MDTypography
            variant="span"
            sx={({ typography }) => ({
              fontFamily: typography.openSan.fontFamily,
              fontSize: 16,
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: 0,
              textAlign: "left",
              color: "#525f7f",
            })}
          >
            {title}
          </MDTypography>
        </MDBox>

        <MDBox>
          <MDBox
            sx={({ typography }) => ({
              position: "relative",
              display: "flex",
              width: "164px",
              height: "40px",
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid #1576bc",

              "& select": {
                appearance: "none",
                border: "0",
                boxShadow: "none",
                outline: "none",
                flex: 1,
                padding: "0 1em",
                color: "#525f7f",
                backgroundColor: "white",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 16px center",
                fontFamily: typography.openSan.fontFamily,
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                letterSpacing: "0em",
                textAlign: "left",
                cursor: "pointer",
              },

              "& select::-ms-expand": {
                display: "none",
              },
            })}
          >
            <select defaultValue="7" style={{ backgroundImage: `url(${SelectArrowIcon})` }}>
              {timezones.map((timezone, index) => {
                return (
                  <option key={index} value={timezone.value}>
                    (GMT {timezone.label})
                  </option>
                );
              })}
            </select>
          </MDBox>
        </MDBox>
      </MDBox>

      <FullCalendar
        ref={calendarRef}
        viewDidMount={({ view }) => {
          setTitle(view.title);
        }}
        height={734}
        titleFormat={(info) => {
          const startDate = info.start.marker;
          const endDate = info.end?.marker;
          return `${moment(startDate).format("Do")} ${
            moment(startDate).format("MMMM") !== moment(endDate).format("MMMM")
              ? moment(startDate).format("MMMM")
              : ""
          } - ${moment(endDate).format("Do")} ${moment(endDate).format("MMMM")}`;
        }}
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="timeGridWeek"
        headerToolbar={false}
        allDaySlot={false}
        firstDay={1}
        scrollTimeReset={false}
        slotDuration="01:00:00"
        dayHeaderContent={({ date }) => {
          const event = events.find((event) => {
            return moment(date).isSame(moment(event.day), "day");
          });

          const isToday = moment(date).isSame(moment(), "day");

          const isWeekends = moment(date).clone().day() % 6 === 0;

          return (
            <MDBox
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <MDTypography
                sx={({ typography }) => ({
                  fontFamily: typography.openSan.fontFamily,
                  fontSize: 14,
                  lineHeight: "21px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  fontWeight: 400,
                  color: isWeekends ? "#fd7e14 !important" : isToday ? "#32325d" : "#adb5bd",
                })}
              >
                {moment(date).format("ddd")}
              </MDTypography>
              <MDTypography
                sx={({ typography }) => ({
                  fontFamily: typography.openSan.fontFamily,
                  fontSize: 14,
                  lineHeight: "21px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  fontWeight: isToday ? 700 : 400,
                  color: isWeekends ? "#ffb647 !important" : isToday ? "#212529" : "#8898aa",
                })}
              >
                {moment(date).format("DD")}
              </MDTypography>
              {event ? <Deadline numOfDeadlines={5} /> : <></>}
            </MDBox>
          );
        }}
        slotLabelContent={({ date }) => {
          return (
            <MDTypography
              sx={({ typography }) => ({
                fontFamily: typography.openSan.fontFamily,
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "21px",
                letterSpacing: "0em",
                textAlign: "center",
                color: "#212529",
              })}
            >
              {moment(date).format("H:mm")}
            </MDTypography>
          );
        }}
        events={[
          {
            title: "PT/DEMO at PNT center",
            start: "2024-02-24T06:00:00+07:00",
            end: "2024-02-24T09:00:00+07:00",
            backgroundColor: "#70D9D3",
          },
          {
            title: "Demo 1",
            start: "2024-02-22T08:00:00+07:00",
            end: "2024-02-22T09:00:00+07:00",
            backgroundColor: "#EABEFF",
          },
          {
            title: "Workshop 1",
            start: "2024-02-23T12:00:00+07:00",
            end: "2024-02-23T14:00:00+07:00",
            backgroundColor: "#A2D68F",
          },
        ]}
      />
    </MDBox>
  );
}

export default WeeklyCalendar;
