import React, {Component} from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import '../index.css';

class Map extends Component {
  render() {
    console.log(this);
    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
      <GoogleMap
        defaultZoom={2}
        defaultCenter={{ lat: 40.730610, lng: -3.935242 }}
      >
      </GoogleMap>
    ))

    return (
      <div>
        <MyMapComponent

            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `600px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />

      </div>
    );
  }
}

export default Map;
