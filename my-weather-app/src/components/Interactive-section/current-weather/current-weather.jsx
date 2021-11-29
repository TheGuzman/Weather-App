import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { useContext } from 'react';
import { tempContext } from '../../context/context.js';
import TempSwitch from './switch-button.jsx';

import Typography from '@mui/material/Typography';
import ToggleButtons from './toggle-buttons.jsx';

export function CurrentWeatherCard(props) {

    const temp = useContext(tempContext)
    let tempSign = ''

    if (temp === 'metric') {
        tempSign = 'ºC'
    }
    else {
        tempSign = 'ºF'
    }


    let day = new Date(props.info.current?.dt * 1000).toLocaleTimeString('es-Es', { weekday: 'long' }) //para obtener solo el día de la semana
    let date = new Date(props.info.current?.dt * 1000).toLocaleString('es-Es', { month: 'long', day: 'numeric' })

    day = day.split(',')[0];
    day = day.charAt(0).toUpperCase() + day.slice(1);

    const city = props.currentCity
    const cityTemp = props.info.current?.temp

    const CurrentCard = styled(Card)({
        width: '100%',
        height: 'fit-content',
        background: 'transparent',
        boxShadow: 'none',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    })
    const CurrentCardContent = styled(CardContent)({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    })

    const CurrentCardMedia = styled(CardMedia)({
        height: '250px',
        width: '250px',
    })

    const CurrentCardTitle = styled(Typography)({
        fontSize: 70,
        fontWeight: 700,
        lineHeight: '82px',
        color: 'white',
        textAlign: 'left',
    })
    const CurrentCardTemp = styled(Typography)({
        fontSize: '117px',
        lineHeight: '105px;',
        fontWeight: 700,
        color: 'white',
        textAlign: 'center',
        margin: '25px 0px',
    })
    const CurrentCardDate = styled(Typography)({
        fontSize: 27,
        fontWeight: 700,
        lineHeight: '34px;',
        color: '#8A8A8A',
        textAlign: 'center',
    })



    return (
        <Box>
            <CurrentCard>
                <CurrentCardContent>
                    <CurrentCardMedia
                        image={window.location.origin + `/img/${props.info.current?.weather[0].icon}.svg`}
                    />
                </CurrentCardContent>
                <CurrentCardContent>
                    <Grid item container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Grid item>
                            <CurrentCardTitle>{city !== undefined ? city : ''}</CurrentCardTitle>
                        </Grid>
                        <Grid item>
                            <CurrentCardTemp>{cityTemp !== undefined ? Math.round(cityTemp) + tempSign : ''}</CurrentCardTemp>
                        </Grid>
                        <Grid item container>
                            <Grid item><CurrentCardDate>{day},</CurrentCardDate></Grid>
                            <Grid item><CurrentCardDate sx={{ marginLeft: '0.2em', fontWeight: 450 }}>{date}</CurrentCardDate></Grid>
                        </Grid>
                    </Grid>
                </CurrentCardContent>
            </CurrentCard>
            <Grid container sx={{ alignItems: 'center' }} xs={12}>
                <Grid item>
                    <ToggleButtons></ToggleButtons>
                </Grid>
                <Grid item sx={{margin:'0em 1em'}}>
                    <TempSwitch onTempChange={props.onTempChange}></TempSwitch>
                </Grid>
            </Grid>
        </Box>
    )
}
