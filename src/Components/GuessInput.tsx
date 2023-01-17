type GuessProps = {
  getDistance: () => void;
  guess: string;
  setGuess: React.Dispatch<React.SetStateAction<string>>;
  toggleResults: React.Dispatch<React.SetStateAction<boolean>>;
  endRound: boolean;
}

const GuessInput = ({ getDistance, guess, setGuess, toggleResults, endRound }: GuessProps) => {

  function onSubmit() {
    toggleResults(true);
    getDistance();
  }

  return (
    <div className="guess">
      <input type="number" min="0" onChange={(event) => setGuess(event.target.value)} value={guess} disabled={endRound} />
      <select disabled={endRound}>
        <option>mi</option>
        <option>km</option>
      </select>
      <button onClick={onSubmit} disabled={endRound}>Guess!</button>
    </div>
  )
}

export default GuessInput;
