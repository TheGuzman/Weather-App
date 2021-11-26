import Grid from '@mui/material/Grid';
import CardDailyWeather from '../cards/card-daily-weather';

export default function HourlyWeatherSection() {


    return (
        <Grid container xs={12} sx={{
            color: 'primary.contrastText',
            flexDirection: 'row',
            justifyContent: 'space-around'
        }}>
                <Grid item >
                    <CardDailyWeather></CardDailyWeather>
                </Grid>
        </Grid>

    )
}