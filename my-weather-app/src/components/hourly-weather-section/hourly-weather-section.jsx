import Grid from '@mui/material/Grid';
import CardDailyWeather from '../cards/card-daily-weather';

export default function HourlyWeatherSection(props) {

    const dailyArray = props.info.hourly?.slice(0,12)

    return (
        <Grid container xs={12} sx={{
            color: 'primary.contrastText',
            flexDirection: 'row',
            justifyContent: 'space-around'
        }}>
            {dailyArray?.map((e,i)=> <Grid item >
                    <CardDailyWeather info={e} key={i}></CardDailyWeather>
                </Grid>)}
        </Grid>

    )
}