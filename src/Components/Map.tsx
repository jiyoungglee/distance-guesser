import { useEffect, useRef, useState } from "react";

const Map: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new google.maps.Map(ref.current, {center: {lat: 0, lng: 0}, zoom: 3}));
    }
  }, [map, ref]);

  return (
    <div ref={ref} style={{ flexGrow: "1", height: "100%" }}/>
  )
}

export default Map;
