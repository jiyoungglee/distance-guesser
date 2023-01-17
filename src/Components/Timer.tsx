import { useEffect, useRef } from "react";

type TimerProps = {
  endRound: boolean;
  setEndRound: React.Dispatch<React.SetStateAction<boolean>>;
  time: number;
  countdown: () => void;
}

const Timer = ({ endRound, setEndRound, time, countdown }:TimerProps) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (time > 0 && !endRound) {
      intervalRef.current = setInterval(() => {countdown()}, 1000);
    } else if (time === 0) {
      setEndRound(true);
    }
    return () => {
      clearInterval(intervalRef.current as NodeJS.Timeout);
    };

  },[time, endRound, setEndRound, countdown]);

  return (
    <div>
      :{time}
    </div>
  )
};

export default Timer;
