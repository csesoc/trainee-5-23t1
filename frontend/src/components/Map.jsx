import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


const containerStyle = {
  width: '400px',
  height: '400px'
};


function MyComponent({ place_id, location = undefined }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCZc4RvHRR9dICVtks45khCqKdCCZR_J_o"
  })

  const [center, setCenter] = useState(location ?? null);

  const [map, setMap] = React.useState(null)

  useEffect(() => {
    if (center === null) {
      const request = {
        placeId: place_id,
        fields: ["geometry"],
      };
      let service = new window.google.maps.places.PlacesService(
        document.createElement("div")
      );
      service.getDetails(request, (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setCenter({ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() });
        }
      });
    }
  }, [place_id]);

  const onLoad = React.useCallback(function callback(map) {
    if (center !== null) {
      map.setCenter(center)
    }
    setMap(map)
  }, [center])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (isLoaded && center !== null) ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} />
      <></>
    </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)
