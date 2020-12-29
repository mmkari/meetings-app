import * as React from "react";
import styled, { css } from "styled-components";
import { getTimeFromIso, getTimeString } from "./helpers.js";
import { withTime } from "./TimeContext";

const getRatio = (isoStart, isoEnd, isoCurrent) => {
  const start = getTimeFromIso(isoStart);
  const end = getTimeFromIso(isoEnd);
  const current = getTimeFromIso(isoCurrent);

  return (current - start) / (end - start);
};

const BarStyles = css`
  border-radius: 2.5px;
  left: 0;
`;
const ProgressBarBar = styled.div.attrs({ className: "ProgressBarBar" })`
  width: 100%;
  height: 100%;
  background: gray;
  position: relative;
  margin: 0 1rem;
  ${BarStyles}

  &:after {
    position: absolute;
    content: "";
    width: ${({ ratio }) => ratio * 100}%;
    height: 100%;
    background: ${(props) => props.theme.highlight};
    ${BarStyles}
  }
`;

const ProgressBarBase = ({ className, time, start, end }) => (
  <div className={className}>
    <div className="ProgressBar-time">{getTimeString(start)} </div>
    <ProgressBarBar ratio={getRatio(start, end, time)} />
    <div className="ProgressBar-time">{getTimeString(end)}</div>
  </div>
);
const ProgressBar = styled(ProgressBarBase).attrs({ className: "ProgressBar" })`
  position: relative;
  display: flex;
  align-items: center;
  min-width: 150px;
  height: 5px;
  margin: 1rem;

  .ProgressBar-time {
    font-size: 0.8rem;
  }
`;

export default withTime(ProgressBar);
