import * as React from "react";
import api from "../api";
import hash from "object-hash";

const TIME_UPDATE_INTERVAL = 5000; // 5s
const DATA_FETCH_INTERVAL = 60000; // 1 minute

const isDataDifferent = (dataOld, dataNew) => {
  return hash(dataOld) !== hash(dataNew);
};

const useDaysMeetings = () => {
  const [data, setData] = React.useState([]);

  const updateData = React.useCallback(async () => {
    const newData = await api.fetchMeetingsData();
    if (isDataDifferent(data, newData)) {
      setData(newData || []); // update data if different
    }
  }, [data]);

  React.useEffect(() => {
    // get initial data
    updateData();
    // set interval to update data
    const interval = setInterval(updateData, DATA_FETCH_INTERVAL);

    return () => clearInterval(interval);
  }, [updateData]);

  return data;
};

// ISO-like time string without timezone offset (same as in JSON data)
const getLocalTimeString = () => {
  const current = new Date();
  current.setMinutes(current.getMinutes() - current.getTimezoneOffset());
  return current.toISOString().slice(0, -5); // return iso without timezone
};

const useTime = () => {
  const [time, setTime] = React.useState(null);

  React.useEffect(() => {
    const updateTime = () => {
      setTime(getLocalTimeString());
    };
    // set initial time
    updateTime();
    // set interval to update time
    const interval = setInterval(updateTime, TIME_UPDATE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return time;
};

export { useDaysMeetings, useTime };
