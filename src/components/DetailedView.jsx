import * as React from "react";
import styled from "styled-components";

import DetailedViewOpened from "./DetailedViewOpen";
import DetailedViewTimetable from "./DetailedViewTimetable";

const DETAIL_PANEL_WIDTH = 250; // px

const DetailedView = ({ className, meetings }) => {
  const [openedMeeting, setOpenedMeeting] = React.useState(null);

  const onMeetingClick = (i) => {
    setOpenedMeeting(i);
  };
  const closeOpenedMeeting = React.useCallback(() => {
    setOpenedMeeting(null);
  }, []);

  return (
    <div className={className}>
      {openedMeeting !== null ? (
        <DetailedViewOpened
          meeting={meetings[openedMeeting]}
          closeOpenedMeeting={closeOpenedMeeting}
        />
      ) : (
        <DetailedViewTimetable
          meetings={meetings}
          onMeetingClick={onMeetingClick}
        />
      )}
    </div>
  );
};

const StyledDetailedView = styled(DetailedView).attrs({
  className: "StyledDetailedView",
})`
  width: ${DETAIL_PANEL_WIDTH}px;
  min-width: ${DETAIL_PANEL_WIDTH}px;
  background: white;
  height: 100vh;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

// prevent unnecessary rerenders
export default React.memo(StyledDetailedView);
