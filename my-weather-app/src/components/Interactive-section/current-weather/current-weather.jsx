import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

import Typography from '@mui/material/Typography';

export function CurrentWeatherCard(props) {

    let day= new Date (props.info.current?.dt*1000).toLocaleTimeString('es-Es',{weekday:'long'}) //para obtener solo el día de la semana
    let date = new Date(props.info.current?.dt*1000).toLocaleString('es-Es', { month: 'long', day: 'numeric'})
    day = day.split(',')[0];
    day = day.charAt(0).toUpperCase()+ day.slice(1);
    const city = props.city.name
    const temp = props.info.current?.temp

    const CurrentCard = styled(Card)({
        width: '100%',
        height: 'fit-content',
        background: 'transparent',
        boxShadow: 'none',
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'center',
        marginBottom: '4em'
    })
    const CurrentCardContent = styled(CardContent)({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    })

    const CurrentCardMedia = styled(CardMedia)({
        height: '220px',
        width: '220px',
    })

    const CurrentCardTitle = styled(Typography)({
        fontSize: 70,
        fontWeight: 700,
        color: 'white',
        textAlign: 'left',
      })
      const CurrentCardTemp = styled(Typography)({
        fontSize: 70,
        fontWeight: 700,
        color: 'white',
        textAlign: 'center',
      })
      const CurrentCardDate = styled(Typography)({
        fontSize: 27,
        fontWeight: 700,
        color: '#8A8A8A',
        textAlign: 'center',
      })
    return (
        <CurrentCard>
                <CurrentCardContent>
                    <CurrentCardMedia
                        image={window.location.origin + `/img/${props.info.current?.weather[0].icon}.png`}
                    />
                </CurrentCardContent>
                <CurrentCardContent>
                    <Grid item container sx={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
                        <Grid item>
                        <CurrentCardTitle>{city!==undefined?city:'Madrid'}</CurrentCardTitle>
                        </Grid>
                        <Grid item>
                        <CurrentCardTemp>{Math.round(temp)+'ºC'}</CurrentCardTemp>
                        </Grid>
                        <Grid item container>
                            <Grid item><CurrentCardDate>{day},</CurrentCardDate></Grid>
                            <Grid item><CurrentCardDate sx={{marginLeft:'0.2em',fontWeight:450}}>{date}</CurrentCardDate></Grid>
                        </Grid>
                    </Grid>
                </CurrentCardContent>
        </CurrentCard>
    )
}



// <Grid item>
//                     <CardContent>
//                     <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//                             aaaaa
//                         </Typography>
//                     </CardContent>
//                 </Grid>
//                 <Grid item container sx={{
//                     color: 'primary.contrastText',
//                     flexDirection: 'column',
//                     justifyContent: 'space-around'
//                 }}>
//                     <Grid item>
//                         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//                             Word of the Day
//                         </Typography>
//                     </Grid>
//                     <Grid item>
//                         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//                             Word of the Day
//                         </Typography>
//                     </Grid>
//                 </Grid>
