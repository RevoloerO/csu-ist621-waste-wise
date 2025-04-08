import React from "react";
import { useEffect, useState } from "react";
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { AdvancedMarker, Pin, InfoWindow,useMap, useMapsLibrary } from '@vis.gl/react-google-maps';

function FoodMap() {
    const defaultZoom = 10;
    const [position, setPosition] = useState({ lat: 11.6944, lng: 41.4993 });
    const placesLibrary = useMapsLibrary('places');
  

    useEffect(() => {
        // Fetch user's location based on IP
        fetch('https://geolocation-db.com/json/')
            .then((response) => response.json())
            .then((data) => {
                setPosition({ lat: data.latitude, lng: data.longitude });
                //console.log('User position:', data.latitude, data.longitude);
            })
            .catch((error) => console.error('Error fetching user position:', error));
    }, []);
    return (

        <div style={{ height: '400px', width: '50%', borderRadius: '8px' }}>
            <Map
                zoom={defaultZoom}
                center={position}
                mapId={'GMP_devsite_samples_v3_rgmbasicmap'}
            >
                <AdvancedMarker position={position} onClick={() => setOpen(true)}>
                    <Pin
                        background={"Tomato"}
                        borderColor={"OldLace"}
                        glyphColor={"Teal"}
                    />
                </AdvancedMarker>
            </Map>
        </div>
    );
}
export default FoodMap;