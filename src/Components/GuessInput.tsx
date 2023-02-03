type GuessProps = {
  getDistance: () => void;
  guess: string;
  setGuess: React.Dispatch<React.SetStateAction<string>>;
  toggleResults: React.Dispatch<React.SetStateAction<boolean>>;
  endRound: boolean;
  setDistUnit: React.Dispatch<React.SetStateAction<string>>;
}

const GuessInput = ({ getDistance, guess, setGuess, toggleResults, endRound, setDistUnit }: GuessProps) => {

  function onSubmit() {
    if (!endRound && guess !== "") {
      toggleResults(true);
      getDistance();
    }
  }

  return (
    <div className="guess">
      <input type="number" min="0" onChange={(event) => setGuess(event.target.value)} value={guess} disabled={endRound} />
      <select disabled={endRound} onChange={(event) => setDistUnit(event.target.value)}>
        <option>mi</option>
        <option>km</option>
      </select>
      <button onClick={onSubmit} disabled={endRound || guess===""}>Guess!</button>
    </div>
  )
}

export default GuessInput;
