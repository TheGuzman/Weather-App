import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@mui/material/Grid';
import { CardMedia } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 245,
    background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(36,36,36,1) 100%)',
    borderRadius: 15,

  },
  title: {
    fontSize: 18,
    color: 'white'
  },
  pos: {
    marginBottom: 18,
    color: 'white'
  },
  pus: {
    color: '#888888'
  },
  card: {
    backgroundColor: 'primary.main'
  },
  media:{
    height:'80px',
    width:'80px',
  }

});

export default function CardWeather(props) {
  const classes = useStyles();


  return (
    <Card className={classes.root} >
      <CardContent>

        <Typography className={classes.title}>dia</Typography>

        <CardMedia
          className={classes.media}
          image={window.location.origin + `/img/${props.info.weather[0].icon}.png`}
        />

        <Grid container spacing={2}>
          <Grid item>
            <Typography className={classes.pos}>
            {props.info.temp.max}
            </Typography>

          </Grid>
          <Grid item>
            <Typography className={classes.pus}>
            {props.info.temp.min}
            </Typography>
          </Grid>
        </Grid>


      </CardContent>

    </Card>
  );
}