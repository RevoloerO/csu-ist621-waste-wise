import React from "react";
import { useEffect, useState } from "react";
import { APIProvider, Map } from '@vis.gl/react-google-maps';   
import { AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';

function FoodMap() {
    const defaultZoom = 10;
    const [position, setPosition] = useState({ lat: 0, lng: 0 });

    useEffect(() => {
        // Fetch user's location based on IP
        fetch('https://ipapi.co/json/')
            .then((response) => response.json())
            .then((data) => {
                setPosition({ lat: data.latitude, lng: data.longitude });
                console.log('User position:', data.latitude, data.longitude);
            })
            .catch((error) => console.error('Error fetching user position:', error));
    }, []);
    return (

        <div style={{ height: '400px', width: '100%', borderRadius: '8px' }}>
            <Map zoom={defaultZoom} center={position}>

            </Map>
        </div>
    );
}
export default FoodMap;