import Grid from '@mui/material/Grid';
import CardWeather from '../cards/card-weather';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export default function WeeklyWeatherSection(props) {

    const weeklyArray = props.info.daily?.slice(1, 7)

    const WeeklyTitle = styled(Typography)({
        fontSize: '36px',
        fontWeight: '200',
        color: 'white',
        marginBottom: '1em',
        marginLeft: '1em',
    })

    return (
        <Grid container sx={{
            color: 'primary.contrastText',
            flexDirection: 'row',
            justifyContent: 'space-around'
        }}>
            <Grid item container >
                <WeeklyTitle>El tiempo esta semana</WeeklyTitle>
            </Grid>
            <Grid item container sx={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                margin: '0em 1em'
            }}>
                {weeklyArray?.map((e, i) => <Grid item key={i} >
                    <CardWeather info={e} ></CardWeather>
                </Grid>)}
            </Grid>
        </Grid >

    )
}