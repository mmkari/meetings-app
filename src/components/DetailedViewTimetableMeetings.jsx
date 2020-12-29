import * as React from "react";
import styled from "styled-components";
import { getTimeInHours } from "./helpers";

const HOUR_GRID_WIDTH = 15; //px
const TIMELINE_HOUR_HEIGHT = 50; //px

const TIMELINE_GRID_LINE_WIDTH = 1; //px
const TIMELINE_OFFSET = 25; //px

const MeetingButtonBase = ({ className, subject, organizer, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      <div className="MeetingButton-subject">{subject}</div>
      <div className="MeetingButton-organizer">{organizer}</div>
    </button>
  );
};

const MeetingButton = styled(MeetingButtonBase).attrs({
  className: "MeetingButton",
})`
  position: absolute;
  top: ${({ hours }) =>
    hours * TIMELINE_HOUR_HEIGHT +
    TIMELINE_OFFSET -
    TIMELINE_GRID_LINE_WIDTH}px;
  height: ${({ length }) =>
    length * TIMELINE_HOUR_HEIGHT + TIMELINE_GRID_LINE_WIDTH}px;
  border-radius: 0;
  border: 1px solid lightgray;
  background: white;
  width: ${100 - HOUR_GRID_WIDTH}%;
  margin-left: ${HOUR_GRID_WIDTH}%;
  display: flex;
  flex-direction: column;
  padding: 0.6rem;
  border-left: 0.5em solid ${(props) => props.theme.highlight};
  box-sizing: border-box;
  overflow: hidden;

  .MeetingButton-organizer {
    font-size: 0.6rem;
    color: darkgray;
  }
  .MeetingButton-subject {
    font-size: 0.6rem;
    font-weight: 700;
    padding-bottom: 0.2em;
  }
`;

const TimetableContentMeetings = ({ className, meetings, onMeetingClick }) => (
  <div className={className}>
    {/* render meeting buttons */}
    {meetings &&
      meetings.length > 0 &&
      meetings.map((meeting, index) => {
        const startHourDecimals = getTimeInHours(meeting.StartTime);
        const durationHours =
          getTimeInHours(meeting.EndTime) - startHourDecimals;

        const onClick = () => {
          onMeetingClick(index);
        };

        return (
          <MeetingButton
            key={`meeting-${startHourDecimals}`}
            hours={startHourDecimals}
            length={durationHours}
            subject={meeting.Subject}
            organizer={meeting.Organizer}
            onClick={onClick}
          />
        );
      })}
  </div>
);
const Meetings = styled(TimetableContentMeetings).attrs({
  className: "TimetableContentMeetings",
})``;

export default Meetings;
