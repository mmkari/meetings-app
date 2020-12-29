import * as React from "react";
import styled from "styled-components";
import { getTimeString } from "./helpers";

const MeetingHours = ({ start, end, className }) => {
  return (
    <div className={className}>
      {getTimeString(start)} - {getTimeString(end)}
    </div>
  );
};
const UpcomingMeetingHours = styled(MeetingHours).attrs({
  className: "UpcomingMeetingHours",
})`
  font-size: 0.5rem;
`;

const UpcomingMeetingSubject = styled.div.attrs({
  className: "UpcomingMeetingSubject",
})`
  font-weight: 700;
  font-size: 0.8rem;
`;
const UpcomingMeetingOrganizer = styled.div.attrs({
  className: "UpcomingMeetingOrganizer",
})`
  font-weight: 300;
  text-transform: uppercase;
  font-size: 0.5rem;
`;

const UpcomingMeeting = ({ meeting, className }) => {
  return (
    <div className={className}>
      <UpcomingMeetingHours start={meeting.StartTime} end={meeting.EndTime} />
      <UpcomingMeetingSubject>{meeting.Subject}</UpcomingMeetingSubject>
      <UpcomingMeetingOrganizer>{meeting.Organizer}</UpcomingMeetingOrganizer>
    </div>
  );
};
const StyledUpcomingMeeting = styled(UpcomingMeeting).attrs({
  className: "UpcomingMeeting",
})`
  // flex-basis: 0;
  flex-grow: 1;

  padding: 0.5rem;
`;

const NextBase = ({ className, meetings, index }) => {
  let nextMeetings = [];
  if (index !== null) {
    nextMeetings = meetings.slice(index + 1, index + 4);
  }

  return (
    <div className={className}>
      {nextMeetings &&
        nextMeetings.map((meeting, i) => (
          <StyledUpcomingMeeting key={`meeting-${i}`} meeting={meeting} />
        ))}
    </div>
  );
};

const Next = styled(NextBase).attrs({ className: "Next" })`
  height: 20%;
  background: rgba(100, 100, 100, 0.6);
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 2rem;

  @media (max-width: 500px) {
    min-width: 300px;
    flex-direction: column;
    height: auto;
    align-items: start;
    position: relative;
    bottom: auto;

    padding: 1rem;

    .UpcomingMeeting ~ .UpcomingMeeting {
      margin-top: 1rem;
    }
  }
`;

export default React.memo(Next);
