import Map from '../Components/Map';
import Timer from '../Components/Timer';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import './PracticeMode.css';

const render = (status: Status) => {
  return <h1>{status}</h1>;
};

const PracticeMode: React.FC = () => {
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
      <div className="map-container">
        <Wrapper apiKey={process.env.REACT_APP_API_KEY ?? ""} render={render}>
          <Map />
        </Wrapper>
      </div>
    </div>
  )
}

export default PracticeMode;
