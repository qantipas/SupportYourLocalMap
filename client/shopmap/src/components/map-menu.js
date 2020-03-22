import React from "react";
import Paper from "@material-ui/core/Paper";

import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import styled from "styled-components";
const StyledMenu = styled(Card)`
  position: fixed;
  right: 20px;
  top: 100px;
  min-height: 80%;
  width: 33%;
  z-index: 1;
`;
export default function Menu(props) {
  return <StyledMenu elevation={3}>{props.searchBar}</StyledMenu>;
}
