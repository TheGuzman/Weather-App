import Grid from '@mui/material/Grid';
import CardWeather from '../cards/card-weather';

export default function WeeklyWeatherSection() {


    return (
        <Grid container xs={12} sx={{
            color: 'primary.contrastText',
            flexDirection: 'row',
            justifyContent: 'space-around'
        }}>
                <Grid item >
                    <CardWeather></CardWeather>
                </Grid>
        </Grid>

    )
}