import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';
import FourOhFour from './404Notfound';

const Map = ({ eventData, center, zoom }) => {
    const markers = eventData.map(ev => {
        if (ev.categories[0].id === 8){
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} 
            onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}/>;
        }
        return null;
    });
    const [locationInfo, setLocationInfo] = useState([]);
    return (
        <div className="map">
            { true ? <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBVG1AFgOTC7nAqOFY3Tmb1KAUqoWRzuUo' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>  : <FourOhFour />}
            { locationInfo.length ? <LocationInfoBox info={locationInfo} /> : null }
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 13.0033,
        lng: 80.2550
    },
    zoom: 6
}

export default Map;