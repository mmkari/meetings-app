import * as React from "react";
import styled from "styled-components";
import { getTimeString, getDateString } from "./helpers";

import DetailItem from "./DetailedViewOpenItem";

const DetailedViewOpened = ({ className, meeting, closeOpenedMeeting }) => {
  const {
    Subject: openedSubject,
    StartTime: start,
    EndTime: end,
    Participants: participants,
    Description: description,
  } = meeting;

  return (
    <div className={className}>
      <button
        className="DetailedViewOpened-backButton"
        onClick={closeOpenedMeeting}
      >
        <div className="DetailedViewOpened-backButtonArrow">{"<"}</div>
        <span>{openedSubject}</span>
      </button>
      <DetailItem iconType="calendar" label={getDateString(start)}></DetailItem>
      <DetailItem
        iconType="time"
        label={`${getTimeString(start, ".")} to ${getTimeString(end, ".")}`}
      ></DetailItem>
      <DetailItem iconType="person" label={"PARTICIPANTS"}>
        {participants && participants.length && (
          <div className="DetailedView-participants">
            {(participants || []).map((participant) => {
              return (
                <div
                  key={`${participant.Name}-participant`}
                  className="DetailedView-participant"
                >
                  <div className="DetailedView-participantAvatar" />
                  <div>
                    <div className="DetailedView-participantName">
                      {participant.Name}
                    </div>
                    <div className="DetailedView-participantTitle">
                      {participant.Title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </DetailItem>
      <DetailItem iconType="description" label={"description"}>
        {description && (
          <div className="DetailedView-description">{description}</div>
        )}
      </DetailItem>
    </div>
  );
};
const StyledDetailedViewOpened = styled(DetailedViewOpened).attrs({
  className: "DetailedViewOpened",
})`
  display: flex;
  flex-direction: column;

  .DetailedViewOpened-backButton {
    padding: 0.8rem;
    background: ${(props) => props.theme.highlight};
    display: flex;
    align-items: center;
    white-space: nowrap;
    border: none;

    span {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
  .DetailedViewOpened-backButtonArrow {
    color: white;
    padding-right: 0.9rem;
    font-size: 2rem;
  }
  .DetailedView-participants {
    display: flex;
    flex-direction: column;
  }
  .DetailedView-participant {
    display: flex;
    align-items: center;
  }

  .DetailedView-participant ~ .DetailedView-participant {
    margin-top: 0.5rem;
  }

  .DetailedView-participantAvatar {
    width: 26px;
    min-width: 26px;
    height: 26px;
    min-height: 26px;
    border-radius: 13px;
    background: #ededed;
    margin-right: 0.7rem;
  }

  .DetailedView-participantName {
    font-size: 0.6rem;
    text-transform: uppercase;
  }
  .DetailedView-participantTitle {
    font-size: 0.4rem;
    text-transform: uppercase;
    color: gray;
  }
  .DetailedView-description {
    font-weight: 300;
    font-size: 10px;
  }
`;

export default StyledDetailedViewOpened;
