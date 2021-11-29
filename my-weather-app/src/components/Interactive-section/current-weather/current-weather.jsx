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
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import { grey } from '@mui/material/colors';
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
    const TitleOne = styled(Typography)({
        fontSize: '32px',
        fontWeight: '900px',
        color: grey[50]
    })
    const TitleTwo = styled(Typography)({
        fontSize: '20px',
        fontWeight: '900px',
        color: grey[50]
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
                            <CurrentCardTemp>{Math.round(cityTemp) + tempSign}</CurrentCardTemp>
                        </Grid>
                        <Grid item container>
                            <Grid item><CurrentCardDate>{day},</CurrentCardDate></Grid>
                            <Grid item><CurrentCardDate sx={{ marginLeft: '0.2em', fontWeight: 450 }}>{date}</CurrentCardDate></Grid>
                        </Grid>
                    </Grid>
                </CurrentCardContent>

                <Grid container>

                </Grid>

            </CurrentCard>
            <Grid container>
                <InvertColorsIcon sx={{ color: grey[50], m: '7rem', width: 50, height: 50 }} />

                <Grid item sx={{ m: '5.6rem' }}>
                    <TitleOne>Humedad</TitleOne>
                    <br />
                    <TitleTwo>0.3% humedad</TitleTwo>
                </Grid>
            </Grid>

            <Grid container sx={{ justifyContent: 'space-around', alignItems: 'baseline' }}>
                <Grid item>
                    <ToggleButtons></ToggleButtons>
                </Grid>
                <Grid item>
                    <TempSwitch onTempChange={props.onTempChange}></TempSwitch>
                </Grid>
                <br />
            </Grid>
        </Box>
    )
}
