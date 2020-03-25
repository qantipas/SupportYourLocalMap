import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";
import CallToActionButton from "./sign-up-dialog";

const StyledHeader = styled(AppBar)`
  && {
    height: 64px;
    z-index: 5;
  }
`;

const Name = styled.h1`
  font-size: 4rem;
  font-family: proxima-nova, sans-serif;
  font-weight: 800;
  font-style: italic;
  color: #be3a2b;
  letter-spacing: 0.7rem;
`;
const Logo = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("/logo512.png");
  background-size: 40px, 40px;
`;
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const preventDefault = event => event.preventDefault();
  return (
    <div className={classes.root}>
      <StyledHeader style={{ background: "white" }} position="static">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <Logo></Logo>
          {/* <Typography
            variant="h6"
            className={classes.title}
            style={{ fontSize: "1.8em", color: "#BE3A2B" }}
          >
            #SupportYourLocals
          </Typography> */}
          <Button onClick={() => props.history.push("/")}>Home</Button>
          <Button onClick={() => props.history.push("/map/")}>Map</Button>

          {/* <Button color="inherit">Login</Button> */}
          <CallToActionButton text="Unternehmen"></CallToActionButton>
        </Toolbar>
      </StyledHeader>
    </div>
  );
}
