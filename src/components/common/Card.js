import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    width: 345,
    margin: 10
  },
  media: {
    objectFit: "cover"
  }
};

function ImgMediaCard(props) {
  const { classes, title, urlToImage, description } = props;
  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        className={classes.media}
        height="140"
        image={urlToImage}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography component="p">{description}</Typography>
      </CardContent>
    </Card>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImgMediaCard);
