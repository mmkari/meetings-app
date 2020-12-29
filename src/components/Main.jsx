import * as React from "react";
import styled from "styled-components";
import Overview from "./Overview";
import DetailedView from "./DetailedView";
import { useDaysMeetings, useTime } from "./hooks";
import { Motion, spring } from "react-motion";

import { TimeProvider } from "./TimeContext";

const MOBILE_CUTOFF_POINT = 600; // px
const DETAIL_PANEL_WIDTH = 250; // px

const Main = ({ className }) => {
  const meetings = useDaysMeetings();
  const time = useTime();

  // mobile view
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = React.useCallback(() => setMenuOpen((o) => !o), []);

  return (
    <div className={className}>
      <TimeProvider time={time}>
        <Overview meetings={meetings} time={time} />

        <MobileMode>
          <Motion
            defaultStyle={{ x: 0 }}
            style={{ x: spring(menuOpen ? 0 : 100) }}
          >
            {({ x }) => (
              <MotionContainer x={x}>
                <MenuButton onClick={toggleMenu}>
                  {menuOpen ? ">>" : "<<"}
                </MenuButton>
                <DetailedView meetings={meetings} />
              </MotionContainer>
            )}
          </Motion>
        </MobileMode>
        <NormalMode>
          <DetailedView meetings={meetings} />
        </NormalMode>
      </TimeProvider>
    </div>
  );
};

const MenuButton = styled.button.attrs({ className: "MenuButton" })`
  background: ${({ theme }) => theme.highlight};
  font-size: 1rem;
  font-weight: 700;
  border: none;
  border-right: 1px solid gray;
  height: 20vh;
  margin-top: auto;
`;

const MotionContainer = styled.div.attrs({ className: "MotionContainer" })`
  right: ${({ x }) =>
    -((x || 0) * DETAIL_PANEL_WIDTH) / 100}px; // max width 250px
  min-width: 0;
  display: flex;
  position: absolute;
`;

const MobileMode = styled.div.attrs({ className: "MobileMode" })`
  display: none;

  @media (max-width: ${MOBILE_CUTOFF_POINT}px) {
    display: flex;
    position: absolute;
    right: 0;
  }
`;
const NormalMode = styled.div.attrs({ className: "NormalMode" })`
  display: block;

  @media (max-width: ${MOBILE_CUTOFF_POINT}px) {
    display: none;
  }
`;

const MainContainer = styled(Main).attrs({ className: "Main" })`
  display: flex;
  flex-grow: 1;
  width: 100%;
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;
export default MainContainer;
