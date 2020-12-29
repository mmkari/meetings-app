import * as React from "react";

const TimeContext = React.createContext(null);

const TimeProvider = ({ time, children }) => (
  <TimeContext.Provider value={time}>{children}</TimeContext.Provider>
);
const TimeConsumer = ({ children }) => {
  if (typeof children === "function") {
    return (
      <TimeContext.Consumer>
        {(time) => children({ time })}
      </TimeContext.Consumer>
    );
  }
  return null;
};

const withTime = (Component) => (props) => {
  return (
    <TimeContext.Consumer>
      {(time) => <Component {...props} time={time} />}
    </TimeContext.Consumer>
  );
};

export default TimeContext;
export { TimeProvider, TimeConsumer, withTime };
