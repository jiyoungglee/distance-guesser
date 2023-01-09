import { useState } from "react";

type GuessProps = {
  getDistance: () => void;
  setGuess: React.Dispatch<React.SetStateAction<number>>;
  toggleResults: React.Dispatch<React.SetStateAction<boolean>>;
}

const GuessInput = ({ getDistance, setGuess, toggleResults }: GuessProps) => {
  const [text, setText] = useState("");

  function onSubmit() {
    toggleResults(true);
    getDistance();
    setGuess(Number(text));
  }

  return (
    <div className="guess">
      <input type="number" min="0" onChange={(event) => setText(event.target.value)} value={text} />
      <select>
        <option>mi</option>
        <option>km</option>
      </select>
      <button onClick={onSubmit}>Guess!</button>
    </div>
  )
}

export default GuessInput;
