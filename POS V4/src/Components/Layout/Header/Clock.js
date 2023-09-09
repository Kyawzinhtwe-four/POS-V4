import { useState } from "react";

const Clock = (props) => {
  let times = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(times);
  const updateTime = () => {
    let times = new Date().toLocaleTimeString();
    setCurrentTime(times);
  };
  setInterval(updateTime, 1000);
  return <li>{currentTime}</li>;
};
export default Clock;
