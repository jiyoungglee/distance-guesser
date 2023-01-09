import { useEffect, useState } from 'react';
import Timer from '../Components/Timer';
import GuessInput from '../Components/GuessInput';
import Results from '../Components/Results';
import './PracticeMode.css';
import axios from 'axios';

const places = [
  'Leonia, NJ',
  'Las Vegas, NV',
  'San Francisco, CA',
  'San Jose, CA',
  'Melbourne, Australia',
]

const PracticeMode = () => {
  const [points, setPoints] = useState<Array<string>>(new Array(2).fill(""));
  const [resultsShown, setResultsShown] = useState(false);
  const [guess, setGuess] = useState(0);
  const [distActual, setDistActual] = useState(0);

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

  async function geoLocation(address: string): Promise<google.maps.LatLngLiteral> {
    try {
      let payload = { address, 'key': process.env.REACT_APP_API_KEY }
      const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', { params: payload });
      return response.data.results[0].geometry.location;
    } catch(e) {
      console.error(e);
      return { lat: 0,lng: 0 }
    }
  }

  async function getDistance() {
    const coord1: google.maps.LatLngLiteral = await geoLocation(points[0]).then((coords) => coords);
    const coord2: google.maps.LatLngLiteral = await geoLocation(points[1]).then((coords) => coords);

    coord1.lat *= Math.PI / 180;
    coord1.lng *= Math.PI / 180;    
    coord2.lat *= Math.PI / 180;
    coord2.lng *= Math.PI / 180;

    // Haversine formula
    let dlon = coord2.lng - coord1.lng;
    let dlat = coord2.lat - coord1.lat;
    let a = Math.pow(Math.sin(dlat / 2), 2)
    + Math.cos(coord1.lat) * Math.cos(coord2.lat)
    * Math.pow(Math.sin(dlon / 2),2);

    let c = 2 * Math.asin(Math.sqrt(a));

    // Radius of earth: 6371 kilometers, 3956 miles
    let r = 3956;

    setDistActual(c * r);
  }

  return (
    <div>
      <span>Round 1</span>
      <Timer />
      <GuessInput getDistance={getDistance} setGuess={setGuess} toggleResults={setResultsShown} />
      <div className="destinations">
        {points.map((point,i) => {
          return (
            <div key={i}>
              <div>{point}</div>
              <img alt="origin" src={`https://maps.googleapis.com/maps/api/staticmap?size=300x300&markers=${point}&key=${process.env.REACT_APP_API_KEY}`} />
            </div>
          )
        })}
      </div>
      {resultsShown && <Results answer={distActual} guess={guess} />}
    </div>
  )
}

export default PracticeMode;
