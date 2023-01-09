type ResultsProps = {
  answer: number;
  guess: number;
}

const Results = ({answer, guess}: ResultsProps) => {
  return (
    <div>
      <div>Actual Distance: {answer}</div>
      <div>Your Guess: {guess}</div>
    </div>
  )
}

export default Results;
