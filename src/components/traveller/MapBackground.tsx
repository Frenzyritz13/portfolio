import React, { useState } from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapBackgroundProps {
  activeTravelId: number | null;
  travels: {
    id: number;
    location: string;
    coordinates: [number, number];
  }[];
}

const MapBackground: React.FC<MapBackgroundProps> = ({ activeTravelId, travels }) => {
  const [viewState, setViewState] = useState({
    longitude: 0,
    latitude: 20,
    zoom: 1.5,
  });

  // Find active travel location
  const activeTravel = travels.find(travel => travel.id === activeTravelId);

  // Update map view when active travel changes
  React.useEffect(() => {
    if (activeTravel) {
      setViewState({
        longitude: activeTravel.coordinates[0],
        latitude: activeTravel.coordinates[1],
        zoom: 4,
      });
    }
  }, [activeTravel]);

  return (
    <div className="fixed inset-0 z-0 opacity-30 dark:opacity-20">
      <Map
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/light-v11"
        mapboxAccessToken=MapBoxToken
      >
        {travels.map(travel => (
          <Marker
            key={travel.id}
            longitude={travel.coordinates[0]}
            latitude={travel.coordinates[1]}
            anchor="bottom"
          >
            <div className={`w-4 h-4 rounded-full ${
              travel.id === activeTravelId 
                ? 'bg-mustard-500 ring-4 ring-mustard-300 ring-opacity-50' 
                : 'bg-navy-500'
            }`}></div>
          </Marker>
        ))}
      </Map>
    </div>
  );
};

export default MapBackground;
