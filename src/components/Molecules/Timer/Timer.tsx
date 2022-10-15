import React, { useEffect, useRef, useState } from "react";
import useInterval from "../../../Hooks/useInterval/useInterval";

const Timer = ({ pause }: any) => {
  const [hour, setHours] = useState(0);
  const [minute, setMinutes] = useState(0);
  const [second, setSeconds] = useState(0);

  const toTime = (time: any) => ("0" + time).slice(-2);
  let resetRef: any = useRef();
  resetRef.current = resetRef.current || false;

  useEffect(() => {
    if (resetRef.current === true) {
      setSeconds(0);
    }
  });

  useInterval(
    () => {
      if (pause) {
        resetRef.current = true;
        return;
      }
      resetRef.current = false;
      setSeconds(second + 1);
    },
    pause ? null : 1000
  );

  useInterval(
    () => {
      if (pause) {
        resetRef.current = true;
        return;
      }
      resetRef.current = false;
      setSeconds(0);
      setMinutes(minute + 1);
    },
    pause ? null : 1000 * 60
  );

  useInterval(
    () => {
      if (pause) {
        resetRef.current = true;
        return;
      }
      setSeconds(0);
      setMinutes(0);
      setHours(hour + 1);
    },
    pause ? null : 1000 * 60 * 60
  );

  return (
    <div className="timer">
      <span>TIME:</span> <span>{toTime(hour)}:</span>
      <span>{toTime(minute)}:</span>
      <span>{toTime(second)}</span>
    </div>
  );
};

export default Timer;
