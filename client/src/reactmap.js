import React, { Component } from "react";
import { render } from "react-dom";
import MapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl
} from "react-map-gl";

import ControlPanel from "./components/control-panel";
import Pins from "./components/pins";
import CityInfo from "./components/city-info";

import CITIES from "../cities.json";

const TOKEN =
  "pk.eyJ1IjoicWFudGlwYXMiLCJhIjoiY2s4MWluZnBiMGZ1NDNobXMxc3hxZGl1aSJ9.KOxjAfRlBi5O-Qtojbdavw"; // Set your mapbox token here

const fullscreenControlStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px"
};

const navStyle = {
  position: "absolute",
  top: 36,
  left: 0,
  padding: "10px"
};

const scaleControlStyle = {
  position: "absolute",
  bottom: 36,
  left: 0,
  padding: "10px"
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 37.785164,
        longitude: -100,
        zoom: 3.5,
        bearing: 0,
        pitch: 0
      },
      popupInfo: null
    };
  }

  _updateViewport = viewport => {
    this.setState({ viewport });
  };

  _onClickMarker = city => {
    this.setState({ popupInfo: city });
  };

  _renderPopup() {
    const { popupInfo } = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <CityInfo info={popupInfo} />{" "}
        </Popup>
      )
    );
  }

  render() {
    const { viewport } = this.state;

    return (
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={TOKEN}
      >
        <Pins data={CITIES} onClick={this._onClickMarker} />
        {this._renderPopup()}
        <div style={fullscreenControlStyle}>
          <FullscreenControl />
        </div>{" "}
        <div style={navStyle}>
          <NavigationControl />
        </div>{" "}
        <div style={scaleControlStyle}>
          <ScaleControl />
        </div>
        <ControlPanel containerComponent={this.props.containerComponent} />{" "}
      </MapGL>
    );
  }
}
// export function renderToDom(container) {
//     render(<App />, container);
// }
