import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import styled from "styled-components";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

import {
  faPhone,
  faTruck,
  faWalking,
  faExternalLinkAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Collapse from "@material-ui/core/Collapse";
const CallToActionButton = styled.button`
  width: 140px;
  font-size: 12px;
  font-weight: 600;
  margin: 8px;
  color: #fff;
  cursor: pointer;
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
    #e64d3b,
    #e64d3b,
    #60976c,
    #9ec4a6
  );
  /* box-shadow: 0 4px 15px #fbb03b; */

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
const StyledCard = styled(Card)`
  && {
    width: 80%;
    @media (max-width: 768px) {
      width: 98%;
      margin: 1%;
    }
  }
`;
const useStyles = makeStyles(theme => ({
  root: {},
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {},
  cover: {
    width: 151
  }
}));
// /props.city props.state
export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
  };

  return (
    <>
      <StyledCard className={classes.root}>
        <CardHeader
          avatar={
            <Avatar
              src={props.image}
              aria-label="recipe"
              className={classes.avatar}
            ></Avatar>
          }
          //name.charAt(0)}
          action={
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          }
          title={props.name}
          subheader={props.adress}
        />
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardMedia
            className={classes.cover}
            className={classes.media}
            image={props.image}
          />
          <CardContent>
            <h1 style={{ fontSize: "14px", letterSpacing: 0 }}>
              So sind wir fuer euch da:
            </h1>
            <Chip
              variant="outlined"
              style={{ padding: "5px", width: "100%", marginBottom: "5px" }}
              avatar={<FontAwesomeIcon icon={faTruck}></FontAwesomeIcon>}
              label="Lieferung direkt zu euch nachhause."
            />
            <Chip
              variant="outlined"
              style={{ padding: "5px", width: "100%" }}
              avatar={<FontAwesomeIcon icon={faWalking}></FontAwesomeIcon>}
              label="Bestellen und abholen."
            />
          </CardContent>
          <CardContent>
            <h1 style={{ fontSize: "14px", letterSpacing: 0 }}>
              Und so funktioniert's:
            </h1>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            {/* <Typography variant="h6" color="textSecondary" component="p">
          Und so gehts:
        </Typography> */}
            <Typography variant="body2" component="p"></Typography>
          </CardContent>
          <CardActions>
            <CallToActionButton onClick={handleClickOpen}>
              jetzt bestellen
            </CallToActionButton>
          </CardActions>
          <CardContent>
            <h1 style={{ fontSize: "14px", letterSpacing: 0 }}>
              Hier findest du noch mehr zu uns:
            </h1>
          </CardContent>

          <CardActions>
            <IconButton aria-label="add to favorites">
              <FontAwesomeIcon icon={faInstagram} />
            </IconButton>
            <IconButton aria-label="add to favorites">
              <FontAwesomeIcon icon={faFacebook} />
            </IconButton>
            <IconButton aria-label="add to favorites">
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </IconButton>
            <IconButton aria-label="add to favorites">
              <FontAwesomeIcon icon={faPhone} />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Collapse>
      </StyledCard>
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
        <h1>069/7681111</h1>
      </Dialog>
    </>
  );
}
