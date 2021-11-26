import Grid from '@mui/material/Grid';
import CardWeather from '../cards/card-weather';

export default function WeeklyWeatherSection(props) {

    const weeklyArray = props.info.daily?.slice(1,7)

    return (
        <Grid container xs={12} sx={{
            color: 'primary.contrastText',
            flexDirection: 'row',
            justifyContent: 'space-around'
        }}>
             {weeklyArray?.map((e,i)=> <Grid item >
                    <CardWeather info={e} key={i}></CardWeather>
                </Grid>)}  
        </Grid>

    )
}