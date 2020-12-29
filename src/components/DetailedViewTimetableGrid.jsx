import * as React from "react";
import styled from "styled-components";

const paddingLeft = 0.6;
const HOUR_GRID_WIDTH = 15; //px
const TIMELINE_HOUR_HEIGHT = 50; //px

const TimeGridBase = ({ className }) => (
  <>
    {[...Array(24)].map((_, index) => {
      return (
        <div key={`grid-${index}`} className={className}>
          <div className="TimeGrid-hour">{`${index}:00`}</div>
          <div className="TimeGrid-grid" />
        </div>
      );
    })}
  </>
);
const TimeGrid = styled(TimeGridBase).attrs({
  className: "TimeGrid",
})`
  height: ${TIMELINE_HOUR_HEIGHT}px;
  display: flex;

  .TimeGrid-hour {
    height: 100%;
    width: ${HOUR_GRID_WIDTH}%;
    padding: 0 ${paddingLeft}rem;
    font-size: 0.6rem;
    font-weight: 900;
  }
  .TimeGrid-grid {
    height: 100%;
    flex-grow: 1;
    border-top: 1px solid lightgray;
  }
`;

// prevent unnecessary re-renders
export default React.memo(TimeGrid);
