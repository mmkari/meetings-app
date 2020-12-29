import * as React from "react";
import styled from "styled-components";

import bgImage from "../images/bg-image.jpg";
import Next from "./OverviewNext";
import Current from "./OverviewCurrent";
import { getTimeFromIso } from "./helpers";

const Overview = ({ meetings, time, className }) => {
  const activeIndex = React.useRef(0);

  // find index of current or first upcoming meeting
  let index = activeIndex.current;
  // need to find next upcoming meeting only after current active has ended
  if (
    index != null &&
    meetings[index] &&
    getTimeFromIso(meetings[index].EndTime) < getTimeFromIso(time)
  ) {
    let nextActive = null;
    for (let i = index + 1; i < meetings.length; i++) {
      if (getTimeFromIso(time) < getTimeFromIso(meetings[i].EndTime)) {
        nextActive = i;
        break;
      }
    }
    index = nextActive;
    activeIndex.current = nextActive;
  }
  const activeMeeting = index !== null ? meetings[index] : null;

  const hasStarted =
    activeMeeting &&
    getTimeFromIso(activeMeeting.StartTime) < getTimeFromIso(time);

  return (
    <div className={className}>
      <Current meeting={activeMeeting} hasStarted={hasStarted} />
      <Next meetings={meetings} index={index} />
    </div>
  );
};

const StyledOverview = styled(Overview).attrs({ className: "Overview" })`
  flex-grow: 1;
  background: gray;
  height: 100%;
  min-height: 100vh;
  background: url(${bgImage});
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  color: white;

  @media (max-width: 500px) {
    position: absolute;
    width: 100%;
    min-width: 300px;
    height: auto;
  }
`;

// export default React.memo(StyledOverview);
export default StyledOverview;
