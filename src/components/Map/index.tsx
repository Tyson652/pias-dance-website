// import React, { Component } from "react"
// import GoogleMapReact from "google-map-react"
// import googleMapsApiKey from "../../../keys.js"

// const AnyReactComponent = ({ text }) => <div>{text}</div>

// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33,
//     },
//     zoom: 11,
//   }

//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: "100%", width: "100%" }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: googleMapsApiKey }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
//         </GoogleMapReact>
//       </div>
//     )
//   }
// }

// export default SimpleMap


import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import googleMapsApiKey from "../../../keys.js"
import Marker from '../Marker';


const SimpleMap = (props: any) => {
    const [center, setCenter] = useState({lat: -33.863320, lng: 151.169930 });
    const [zoom, setZoom] = useState(11);
    return (
        <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleMapsApiKey }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker
            lat={-33.863320}
            lng={151.169930}
            name="My Marker"
            color="blue"
          />
        </GoogleMapReact>
      </div>
    );
}

export default SimpleMap;


