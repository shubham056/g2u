import React, { useState, useEffect } from 'react'
import loader from '../utils/googleMapsLoader';


const Map = ({ address }) => {
    console.log("map zipcode",address)
    const [map, setMap] = useState(null);
    useEffect(() => {
        
        loader.load().then(() => {
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ address }, (results, status) => {
                if (status === 'OK') {
                    const mapOptions = {
                        center: results[0].geometry.location,
                        zoom: 8,
                        zoomControl: false,
                        scaleControl: false,
                        fullscreenControl: false,
                        streetViewControl: false,
                        rotateControl: false,
                        mapTypeControl: false,
                        gestureHandling: 'none',
                    };
                    const newMap = new window.google.maps.Map(
                        document.getElementById('map'),
                        mapOptions
                    );
                    const marker = new window.google.maps.Marker({
                        position: results[0].geometry.location,
                        map: newMap,
                    });
                    setMap(newMap);
                }
            });
        });
    }, [address]);

    return (
        <div id="map" style={{ height: '660px' }}></div>
    )
}

export default Map