import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

export default function CardWeather(props) {

  const WeeklyCard = styled(Card)({
    maxWidth: 245,
    background: 'linear-gradient(180deg, rgba(57, 57, 57, 0) 0%, #252424 66.67%)', /** ESTE ES EL QUE HABÍA ANTES (EL DE AHORA ES EL DEL FIGMA) 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(36,36,36,1) 100%)'*/
    borderRadius: '10px',
  })
  const WeeklyCardContent = styled(CardContent)({
    borderRadius: '4em',
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  })

  const WeeklyCardMedia = styled(CardMedia)({
    height: '80px',
    width: '80px',
  })

  const WeeklyCardTemp = styled(Typography)({
    fontSize: 18,
    color: 'white',
    textAlign:'center',
  })

  const WeeklyCardTempMin = styled(Typography)({
    fontSize: 18,
    fontWeight:500,
    color: '#888888',
    textAlign:'center',
  })


  return (
    <WeeklyCard >
      <WeeklyCardContent>

        <Typography >dia</Typography>

        <WeeklyCardMedia
          image={window.location.origin + `/img/${props.info.weather[0].icon}.png`}
        />

        <Grid container spacing={2} justifyContent='center'>
          <Grid item>
            <WeeklyCardTemp>
            {Math.round(props.info.temp.max)+'ºC'}
            </WeeklyCardTemp>

          </Grid>
          <Grid item>
            <WeeklyCardTempMin>
            {Math.round(props.info.temp.min)+'ºC'}
            </WeeklyCardTempMin>
          </Grid>
        </Grid>


      </WeeklyCardContent>

    </WeeklyCard>
  );
}