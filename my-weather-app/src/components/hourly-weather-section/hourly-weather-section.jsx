import Grid from '@mui/material/Grid';
import CardHourlyWeather from '../cards/card-hourly-weather';

export default function HourlyWeatherSection(props) {

    const dailyArray = props.info.hourly?.slice(0,12)

    return (
        <Grid container sx={{
            color: 'primary.contrastText',
            flexDirection: 'row',
            justifyContent: 'space-around'
        }}>
            {dailyArray?.map((e,i)=> <Grid item >
                    <CardHourlyWeather info={e} key={i}></CardHourlyWeather>
                </Grid>)}
        </Grid>

    )
}