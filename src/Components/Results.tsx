type ResultsProps = {
  answer: number;
  guess: string;
  nextRound: () => void;
}

const Results = ({answer, guess, nextRound}: ResultsProps) => {
  return (
    <div>
      <div>Actual Distance: {answer}</div>
      <div>Your Guess: {guess}</div>
      <button onClick={nextRound}>Next Round</button>
    </div>
  )
}

export default Results;
