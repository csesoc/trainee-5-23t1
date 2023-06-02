import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import {storage} from "../utils/storage";

const containerStyle = {
    width: '400px',
    height: '400px'
};


const Map = ({ place_id, name }) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCZc4RvHRR9dICVtks45khCqKdCCZR_J_o"
    })

    let center = {
        lat: 0,
        lng: 0
    };

    // get lat long
    let service = new window.google.maps.places.PlacesService(document.createElement('div'));

    const request = {
        placeId: place_id,
        fields: ['geometry']
    };

    function callback(place, status) {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            center.lat = place.geometry.lat;
            center.lng = place.geometry.lng;
        }
    }

    service.getDetails(request, callback);



    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
        </GoogleMap>
    ) : <></>
}

export default Map;