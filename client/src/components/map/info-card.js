import React from "react";

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
  faExternalLinkAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Collapse from "@material-ui/core/Collapse";
const CallToActionButton = styled.button`
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
  box-shadow: 0 4px 15px #fbb03b;

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
  avatar: {
    backgroundColor: red[500]
  },
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

  return (
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
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.name}
        subheader={props.adress}
      />
      {/* <CardMedia
        className={classes.cover}
        className={classes.media}
        image={props.image}
      /> */}
      <CardContent>
        {/* <Typography variant="h6" color="textSecondary" component="p">
          Wir bieten:
        </Typography> */}
        <Chip
          variant="outlined"
          style={{ padding: "5px", width: "80%", marginLeft: "10%" }}
          avatar={<FontAwesomeIcon icon={faTruck}></FontAwesomeIcon>}
          label="Lieferung von Cafe und Kuchen direkt zu Ihnen nachhause."
        />
        {/* <Typography variant="h6" color="textSecondary" component="p">
          Und so gehts:
        </Typography> */}
        <Typography variant="body2" component="p"></Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* /*{" "}
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
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>{" "} */}
        <CallToActionButton></CallToActionButton>
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
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </StyledCard>
  );
}
