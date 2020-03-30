import React, { Component } from "react"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"
import googleMapsApiKey from "../../../keys.js"

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    })

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      })
    }
  }

  render() {
    const style = {
      width: this.props.width,
      height: this.props.height,
    }

    return (
      <Map
        google={this.props.google}
        onClick={this.onMapClicked}
        style={style}
        initialCenter={{
          lat: -33.86332,
          lng: 151.16993,
        }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={"Pia's Dance & Acro School"}
        />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: googleMapsApiKey,
})(MapContainer)
