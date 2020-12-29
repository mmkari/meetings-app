import * as React from "react";
import styled from "styled-components";
import Header from "./DetailedViewTimetableHeader";

import Meetings from "./DetailedViewTimetableMeetings";
import TimePointer from "./DetailedViewTimetableTime";
import Footer from "./DetailedViewTimetableFooter";
import TimeGrid from "./DetailedViewTimetableGrid";

const GradientMargin = styled.div.attrs({ className: "GradientMargin" })`
  height: 1.5rem;
  width: 100%;
  background-image: linear-gradient(
    ${({ reverse }) => (reverse ? "to top" : "to bottom")},
    white 0%,
    #ffffff00 100%
  );
  position: sticky;
  ${({ reverse }) => (reverse ? `bottom: 0;` : `top: 0;`)}
  z-index:10;
`;

const TimetableContent = ({ children }) => {
  return (
    <div className="DetailedViewTimetable-content">
      <GradientMargin />
      {children}
      <GradientMargin reverse />
    </div>
  );
};

const DetailedViewTimetable = ({ className, meetings, onMeetingClick }) => {
  return (
    <div className={className}>
      <Header />
      <TimetableContent>
        <TimeGrid />
        <Meetings meetings={meetings} onMeetingClick={onMeetingClick} />
        <TimePointer />
      </TimetableContent>
      <Footer />
    </div>
  );
};
export default styled(DetailedViewTimetable).attrs({
  className: "DetailedViewTimetable",
})`
  .DetailedViewTimetable-content {
    flex-grow: 1;
    position: relative;
    height: 90vh;
    overflow-y: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
      width: 0px;
    }
  }
`;
