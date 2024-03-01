import moment from "moment";

const events = [
  { day: moment().startOf("isoWeek").weekday(1), numOfEvents: 5 },
  { day: moment().startOf("isoWeek").weekday(5), numOfEvents: 5 },
];

export default events;
