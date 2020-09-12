import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = () => <div className="marker"><img src="http://maps.google.com/mapfiles/ms/icons/red-dot.png" /></div>;

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 40.6823719,
      lng: -3.6495111
    },
    zoom: 16
  };

  handleOnClick = () => {
    window.location.href = "https://www.google.com/maps/place/Etxemendi+de+Araceli/@40.6821225,-3.6478043,16z/data=!4m12!1m6!3m5!1s0x0:0x80ef9f6ccfb60461!2sEtxemendi+de+Araceli!8m2!3d40.6822579!4d-3.6478803!3m4!1s0x0:0x80ef9f6ccfb60461!8m2!3d40.6822579!4d-3.6478803?hl=es-ES";
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GATSBY_API_GOOGLE_MAP }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onClick={this.handleOnClick}
          
        >
          <Marker
            lat={40.682594}
            lng={-3.647804}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
