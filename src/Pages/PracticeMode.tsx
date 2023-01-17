import { useState } from "react";
import Round from "../Components/Round"

const PracticeMode = () => {
  const [round, setRound] = useState(1);

  return (
    <div>
      <Round round={round} nextRound={() => setRound(prev => prev+1)} />
    </div>
  )
}

export default PracticeMode;
