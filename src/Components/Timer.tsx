import { useEffect, useState } from "react";

const Timer: React.FC = () => {
  const [time, setTime] = useState(30);

  useEffect(() => {
    if (time > 0) {
      setTimeout(() => {setTime(time - 1)}, 1000);
    }
  },[time]);

  return (
    <div>
      :{time}
    </div>
  )
};

export default Timer;
