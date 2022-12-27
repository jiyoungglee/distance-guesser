import { useEffect, useState } from 'react';
import Timer from '../Components/Timer';
import './PracticeMode.css';

const places = [
  'Leonia, NJ',
  'Las Vegas, NV',
  'San Francisco, CA',
  'San Jose, Costa Rica',
  'Melbourne, Australia',
]

const PracticeMode = () => {
  const [points, setPoints] = useState<Array<string>>(new Array(2).fill(""));

  function generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  useEffect(() => {
    function getPlaces() {
      setPoints((prev)  => {
        const copy = [...prev];
        return copy.map((num, i) => {
          let min: number = places.length - Math.floor(places.length/(i+1));
          let max: number = Math.ceil(places.length/2 * (i+1)) - 1;
          return places[generateRandomNumber(min, max)];
        })
      });
    }
    getPlaces();
  },[])

  return (
    <div>
      <span>Round 1</span>
      <Timer />
      <div className="guess">
        <input type="text"></input>
        <select>
          <option>mi</option>
          <option>km</option>
        </select>
        <button>Guess!</button>
      </div>
      <div className="destinations">
        {points.map((point) => {
          return (
            <div>
              <div>{point}</div>
              <img alt="origin" src={`https://maps.googleapis.com/maps/api/staticmap?size=300x300&markers=${point}&key=${process.env.REACT_APP_API_KEY}`} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PracticeMode;
