import * as React from "react";
import classnames from "classnames";

// import icons
// import description from "../icons/description.png";
// import person from "../icons/person.png";
// import time from "../icons/time.png";
import expand from "../icons/expand.svg";
import collapse from "../icons/collapse.svg";
import person from "../icons/person.svg";
import time from "../icons/time.svg";
import description from "../icons/description.svg";
import calendar from "../icons/calendar.svg";

const icons = {
  description,
  calendar,
  person,
  time,
  expand,
  collapse,
};

const getIcon = (type) => {
  return icons[type] || null;
};

const Icon = ({ type, className, width = 20, height = 20 }) => {
  return (
    <img
      className={classnames("Icon", className)}
      src={getIcon(type)}
      alt={`${type}-icon`}
      width={width}
      height={height}
    />
  );
};

export default Icon;
