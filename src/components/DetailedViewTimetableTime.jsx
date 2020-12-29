import * as React from "react";
import styled from "styled-components";
import { withTime } from "./TimeContext";
import { getTimeInHours } from "./helpers";

const HOUR_GRID_WIDTH = 15; //px
const TIMELINE_HOUR_HEIGHT = 50; //px
const TIMELINE_OFFSET = 25; //px

const BULLET_RADIUS = 4; //px
const CurrentTimePointerNeedle = styled.div.attrs({
  className: "CurrentTimePointerNeedle",
})`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.highlight};
  position: absolute;
  margin-left: ${HOUR_GRID_WIDTH - BULLET_RADIUS}%;

  top: ${({ hours }) => {
    return hours * TIMELINE_HOUR_HEIGHT + TIMELINE_OFFSET;
  }}px;

  &:after {
    position: absolute;
    content: "";
    width: ${2 * BULLET_RADIUS}px;
    height: ${2 * BULLET_RADIUS}px;
    border-radius: ${BULLET_RADIUS}px;
    background: ${(props) => props.theme.highlight};
    left: 0;
    margin-top: -${BULLET_RADIUS}px;
  }
`;
const CurrentTimeBase = ({ time }) => {
  return <CurrentTimePointerNeedle hours={getTimeInHours(time)} />;
};

export default withTime(CurrentTimeBase);
