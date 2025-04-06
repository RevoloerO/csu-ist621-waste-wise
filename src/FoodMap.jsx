import React from "react";
import { APIProvider, Map } from '@vis.gl/react-google-maps';

function FoodMap()  {
    
    return (

        <div>
            <Map
                defaultZoom={8}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
            />
        </div >
    );
}
export default FoodMap;