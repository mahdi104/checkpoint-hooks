import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./MovieCard.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard({ el }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} className="card">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          width="640"
          height="360"
          image={el.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {el.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {el.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {el.rating}
        </Button>
        <Button size="small" color="primary">
          {el.type}
        </Button>
      </CardActions>
    </Card>
  );
}
