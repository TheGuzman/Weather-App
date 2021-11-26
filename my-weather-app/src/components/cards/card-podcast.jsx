import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 245,
    background: '#353535',
    flexGrow: 1,
    
    
  },
  media: {
    height: 140,
    borderRadius: 5,
  },
  title: {
    fontSize: 14,
    color: 'white'
  },
  pos: {
    fontSize: 14,
    marginBottom: 12,
    color: '#A7A7A7'
  },
  card: {
    backgroundColor: 'primary.main'
  }
});

export default function CardPodcast() {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardContent>
          
      <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/4576085/pexels-photo-4576085.jpeg"
        />
       <br />
        <Typography className={classes.title} gutterBottom>
          Dance Gavin Dance
        </Typography>
        
        <Typography className={classes.pos}>
          Album • Afterburner
        </Typography> 
        
        
    
      </CardContent>
      
    </Card>
  );
}