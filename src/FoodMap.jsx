import React, { useEffect, useState } from "react";
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { AdvancedMarker, Pin, useMap, useMapsLibrary } from '@vis.gl/react-google-maps';

function FoodMap() {
    const defaultZoom = 10;
    const [position, setPosition] = useState({ lat: -81.6944, lng: 41.4993 });

    useEffect(() => {
        // Fetch user's location based on IP
        fetch('https://geolocation-db.com/json/')
            .then((response) => response.json())
            .then((data) => {
                setPosition({ lat: data.latitude, lng: data.longitude });
                console.log('User position:', data);
            })
            .catch((error) => console.error('Error fetching user position:', error));
    }, []);

    const FoodBank = () => {
        const map = useMap();
        const placesLib = useMapsLibrary('places');

        useEffect(() => {
            if (!placesLib || !map) return;

            const svc = new placesLib.Place();
            // ...
        }, [placesLib, map]);

        // ...
    };

    return (
        <div>
            <div style={{ height: '400px', width: '100%', borderRadius: '8px' }}>
                <Map
                    zoom={defaultZoom}
                    center={position}
                    mapId={'GMP_devsite_samples_v3_rgmbasicmap'}
                >

                    <AdvancedMarker
                        position={position}
                    >
                        <Pin
                            background={"Tomato"}
                            borderColor={"OldLace"}
                            glyphColor={"Teal"}
                        />
                    </AdvancedMarker>

                </Map>
                
            </div>
        </div>
    );
}

export default FoodMap;