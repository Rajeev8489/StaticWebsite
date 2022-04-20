import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Card, Paper } from '@mui/material';

const containerStyle = {
  width: '42%',
  height: '67%',
}
class GoogleMapView extends Component {
  render() {
    return (
      <Card>
        <Map google={this.props.google} zoom={18}
          containerStyle={containerStyle}
          initialCenter={{
            lat: 12.9457457,
            lng: 77.5625261
          }}
        >
          <Marker onClick={this.onMarkerClick}
            name={'Current location'} />  
        </Map>
      </Card>
    );
  }
}

export default GoogleApiWrapper({
  apiKey:(process.env.NEXT_PUBLIC_API_KEY)
})(GoogleMapView)