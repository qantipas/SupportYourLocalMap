import React, { Component } from "react";
import Geocoder from "react-mapbox-gl-geocoder";
import { useParams } from "react-router-dom";
import Menu from "../map-menu";
import MapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl
} from "react-map-gl";
import ControlPanel from "./control-panel";
import Pins from "./pins";
import CityInfo from "./info-card";

import CITIES from "../../cities.json";
import styled from "styled-components";
const SearchForm = styled(Geocoder)`
  input {
    margin-bottom: 25px;
    width: 80%;
    border: none;
    border-radius: 100px;
    padding: 5px;
    color: #4a4a4a;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  .react-geocoder-results {
    color: grey;
    padding: 8px;
    margin: 5px;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    background-color: white;
    opacity: 100%;
  }
`;
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

export default class Map extends Component {
  constructor(props) {
    super(props);
    // let { latitude, longitude, zoom } = useParams();
    this.state = {
      viewport: {
        latitude: 50.121132,
        longitude: 8.64862,
        zoom: 3.5,
        bearing: 0,
        pitch: 0
      },
      popupInfo: null
    };
  }
  // componentDidUpdate() {
  //   const { longitude, latitude, zoom } = this.props.match.params;
  //   const viewport = this.state.viewport;
  //   if (
  //     parseFloat(zoom) !== viewport.zoom ||
  //     parseFloat(longitude) !== viewport.longitude ||
  //     parseFloat(latitude) !== viewport.latitude
  //   ) {
  //     this.setState({
  //       viewport: {
  //         ...this.state.viewport,
  //         latitude: parseFloat(latitude),
  //         longitude: parseFloat(longitude),
  //         zoom: parseFloat(zoom)
  //       }
  //     });
  //     console.log("lat", latitude, longitude, zoom);
  //   }
  // }

  _updateViewport = viewport => {
    this.setState({ viewport });
    // this.props.history.push(
    //   "/map/" +
    //     viewport.latitude +
    //     "/" +
    //     viewport.longitude +
    //     "/" +
    //     viewport.zoom
    // );
  };

  _onClickMarker = shop => {
    this.setState({ popupInfo: shop });
  };

  // _renderPopup() {
  //   const { popupInfo } = this.state;

  //   return (
  //     popupInfo && (
  //       <Popup
  //         tipSize={5}
  //         anchor="top"
  //         longitude={popupInfo.longitude}
  //         latitude={popupInfo.latitude}
  //         closeOnClick={false}
  //         onClose={() => this.setState({ popupInfo: null })}
  //       >
  //         <CityInfo info={popupInfo} />{" "}
  //       </Popup>
  //     )
  //   );
  // }
  queryParams = {
    country: "de"
  };

  onSelected = (viewport, item) => {
    this.setState({ viewport });
    // console.log("Selected: ", viewport);
    // this.props.history.push(
    //   "/map/" +
    //     viewport.latitude +
    //     "/" +
    //     viewport.longitude +
    //     "/" +
    //     viewport.zoom
    // );
  };
  onResults = results => {
    this.setState({ results: results });
    results.forEach(res => console.log(res));
  };
  render() {
    const { viewport } = this.state;

    return (
      <>
        <Menu
          searchBar={
            <SearchForm
              mapboxApiAccessToken={TOKEN}
              onSelected={this.onSelected}
              viewport={viewport}
              hideOnSelect={false}
              queryParams={this.queryParams}
              placeholder={"Suchen"}
              onResults={this.onResults}
            />
          }
          shop={this.state.popupInfo}
        ></Menu>
        <MapGL
          {...viewport}
          width="100%"
          height="100%"
          mapStyle="mapbox://styles/qantipas/ck81q1r830riq1il6gprj646y"
          onViewportChange={this._updateViewport}
          mapboxApiAccessToken={TOKEN}
        >
          <Pins data={CITIES} onClick={this._onClickMarker} />{" "}
          <div style={fullscreenControlStyle}>
            <FullscreenControl />
          </div>{" "}
          <div style={navStyle}>
            <NavigationControl />
          </div>{" "}
          <div style={scaleControlStyle}>
            <ScaleControl />
          </div>{" "}
          {/* <ControlPanel containerComponent={this.props.containerComponent} />{" "} */}
        </MapGL>
      </>
    );
  }
}
