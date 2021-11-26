import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@mui/material/Grid';

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
  
});

export default function CardWeather() {
  const classes = useStyles();


  return (
    <Card className={classes.root} >
      <CardContent>
      
        <Typography className={classes.title} gutterBottom>
          Lunes
        </Typography>

         <div className={classes.temperature}>
        <Typography className={classes.pos}>
          14ºC 
        </Typography> 
        <Typography className={classes.pus}>
          9ºC 
        </Typography>
        </div>
      
    
      </CardContent>
      
    </Card>
  );
}