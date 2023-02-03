type ResultsProps = {
  answer: number;
  guess: string;
  nextRound: () => void;
  distUnit: string;
}

const Results = ({answer, guess, nextRound, distUnit}: ResultsProps) => {
  return (
    <div>
      <div>{`Actual Distance: ${answer} ${distUnit}`}</div>
      <div>{`Your Guess: ${guess} ${distUnit}`}</div>
      <button onClick={nextRound}>Next Round</button>
    </div>
  )
}

export default Results;
