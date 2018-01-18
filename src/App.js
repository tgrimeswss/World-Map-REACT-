import React, { Component } from 'react';
import Map from './components/map';

class App extends Component {
  render() {
    const mapCenter = {
      lat: 40.7575285,
      lng: -73.9884469
    }
    return (
      <div>
        <Map center={mapCenter}/>
      </div>
    );
  }
}

export default App;
