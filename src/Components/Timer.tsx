import { useEffect, useRef, useState } from "react";

type TimerProps = {
  endRound: boolean;
}

const Timer = ({ endRound }:TimerProps) => {
  const [time, setTime] = useState(30);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (time > 0 && !endRound) {
      intervalRef.current = setInterval(() => {setTime(prev => prev - 1)}, 1000);
    }
    return () => {
      clearInterval(intervalRef.current as NodeJS.Timeout);
    };

  },[time, endRound]);

  return (
    <div>
      :{time}
    </div>
  )
};

export default Timer;
