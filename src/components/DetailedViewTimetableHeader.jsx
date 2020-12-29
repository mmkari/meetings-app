import * as React from "react";
import styled from "styled-components";

const paddingLeft = 0.6;

const Header = ({ className }) => {
  const roomName = "R1";
  return (
    <div className={className}>
      <div className="Header-title">Conference Room</div>
      <div className="Header-name">{roomName} today</div>
    </div>
  );
};
const StyledHeader = styled(Header).attrs({ className: "Header" })`
  height: 5vh;
  min-height: 5vh;
  padding: ${paddingLeft}rem;

  .Header-title {
    text-transform: uppercase;
    font-size: 0.6rem;
    color: #ababab;
  }
  .Header-name {
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1rem;
  }
`;

export default StyledHeader;
