import React from "react";
import styled from "styled-components";
import Map from "../components/map/map";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const StyledMap = styled(Map)`
  && {
    position: relative;
  }
`;
const MapView = props => {
  return <StyledMap></StyledMap>;
};
export default MapView;
