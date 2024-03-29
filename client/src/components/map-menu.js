import React from "react";
import Paper from "@material-ui/core/Paper";

import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import styled from "styled-components";
import InfoCard from "../components/map/info-card";
const StyledMenu = styled.div`
  position: absolute;
  right: 20px;
  top: 100px;
  width: 33%;
  z-index: 3;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0%;
    right: 0px;
  }
`;
export default function Menu(props) {
  return (
    <StyledMenu elevation={3}>
      {props.searchBar}
      {props.shop !== null ? <InfoCard {...props.shop}></InfoCard> : ""}
    </StyledMenu>
  );
}
