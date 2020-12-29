import * as React from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";

const CurrentMeetingTimeProgressBar = styled(ProgressBar).attrs({
  className: "CurrentMeeting-timeProgressBar",
})`
  font-weight: 300;
  font-size: 1rem;
  width: 80%;
  max-width: 400px;
`;

const Divider = styled.div.attrs({ className: "Divider" })`
  width: 20px;
  height: 1px;
  background: white;
`;

const CurrentMeeting = ({ className, meeting, hasStarted }) => {
  const { StartTime: start, EndTime: end } = meeting || {};

  return (
    <div className={className}>
      {meeting && (
        <div className="CurrentMeeting-container">
          <h2 className="CurrentMeeting-heading">
            {hasStarted ? "current meeting" : "upcoming meeting"}
          </h2>
          <Divider />
          <div className="CurrentMeeting-subject">{meeting.Subject}</div>
          <CurrentMeetingTimeProgressBar start={start} end={end} />
          <div className="CurrentMeeting-organizer">{meeting.Organizer}</div>
        </div>
      )}
    </div>
  );
};
const Current = styled(CurrentMeeting).attrs({ className: "CurrentMeeting" })`
  display: flex;
  flex-grow: 1;
  align-items: center;
  height: 80%;

  .CurrentMeeting-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
    padding: 1rem 2rem;
    background: #afafaf99;
  }

  .CurrentMeeting-subject {
    font-weight: 600;
    font-size: 2.5rem;
    padding: 0.2rem;
  }
  .CurrentMeeting-organizer {
    font-weight: 300;
    font-size: 0.6rem;
  }
  .CurrentMeeting-heading {
    font-weight: 300;
    font-size: 0.7rem;
    padding: 0.2rem;
  }

  @media (max-width: 500px) {
    min-width: 300px;
    height: auto;
    position: relative;
    margin: 2em 0;
  }
`;

export default React.memo(Current);
