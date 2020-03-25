import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import styled from "styled-components";
import Survey from "./survey";
import Geocoder from "react-mapbox-gl-geocoder";
import apiEndpoint from "../apiEndpoint";
import axios from "axios";
const TOKEN =
  "pk.eyJ1IjoicWFudGlwYXMiLCJhIjoiY2s4MWluZnBiMGZ1NDNobXMxc3hxZGl1aSJ9.KOxjAfRlBi5O-Qtojbdavw"; // Set your mapbox token here

const SearchForm = styled(Geocoder)`
  input {
    box-sizing: border-box;
    width: 100%;
    height: 2.19em;
    padding: 0.25em 0 0.25em 0.87em;
    border: none;
    border-bottom-color: currentcolor;
    border-bottom-style: none;
    border-bottom-width: medium;
    border-radius: 0;
    border-bottom: 0.07em solid #d4d4d4;
    box-shadow: none;
    background-color: transparent;
    font-family: inherit;
    font-size: 1em;
  }
  .react-geocoder-results {
    color: grey;
    padding: 8px;
    margin: 5px;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    background-color: white;
    opacity: 100%;
    @media (max-width: 768px) {
      width: 100%;
      margin: 0%;
    }
  }
`;
const CallToActionButton = styled.button`
  position: fixed;
  right: 25px;
  top: -5px;
  width: 140px;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 20px;
  height: 35px;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  border-radius: 50px;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  background-image: linear-gradient(
    to right,
    #e64c3c,
    #ec8c69,
    #ff1b01,
    #fbb03b
  );
  box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);

  :hover {
    background-position: 100% 0;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }

  :focus {
    outline: none;
  }
`;
const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative",
    color: " #000",
    backgroundColor: " #fff"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Question = () => {
  return (
    <div className="sv-page sv-body__page">
      <div
        id="sq_100"
        className="sv-question sv-row__question sv-row__question--small"
        style={{ maxWidth: "50%;" }}
        data-rendered="r"
      >
        <h5 className="sv-title sv-question__title">
          <span className="sv-question__num" style={{ position: "static" }}>
            0.
          </span>
          <span>&nbsp;</span>
          <span>Start by searching the business.</span>
        </h5>
      </div>
    </div>
  );
};

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [place, setPlace] = React.useState(null);
  const [result, setResult] = React.useState(null);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onSelected = sel => {
    setPlace(sel);
  };
  const submit = payload => {
    return;
  };
  const onComplete = res => {
    setResult(res);
    console.log(apiEndpoint);
  };

  return (
    <div>
      <CallToActionButton
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        {props.text}
      </CallToActionButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div style={{ height: "75px" }}></div>
        {place === null ? (
          <>
            <Question></Question>
            <SearchForm
              mapboxApiAccessToken={TOKEN}
              onSelected={onSelected}
              hideOnSelect={true}
              placeholder={"Suchen"}
            />
          </>
        ) : (
          <Survey setResult={data => onComplete(data)}></Survey>
        )}
      </Dialog>
    </div>
  );
}
