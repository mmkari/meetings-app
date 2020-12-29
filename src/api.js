import { getCurrentDate } from "./components/helpers";
// modify dates in sample meeting data so they show as today's meetings
const moveDates = (json) => {
  // take current date
  const { day, month, year } = getCurrentDate();

  const moveDate = (iso) => {
    return `${year}-${month}-${day}T${iso.split("T")[1]}`;
  };

  // move meetings to current day
  return json.map((meeting) => ({
    ...meeting,
    StartTime: moveDate(meeting.StartTime),
    EndTime: moveDate(meeting.EndTime),
  }));
};

const fetchMeetingsData = () => {
  // assuming received content is ISO-8859-1 encoded, need to decode to utf-8
  let data;
  try {
    data = fetch("meetings.json")
      .then((response) => response.arrayBuffer())
      .then((buffer) => {
        let decoder = new TextDecoder("iso-8859-1");
        let text = decoder.decode(buffer);
        return moveDates(JSON.parse(text));
      })
      .catch((err) => {
        return null;
      });
  } catch {
    data = null;
  }

  return data;
};

const api = {
  fetchMeetingsData,
};

export default api;
