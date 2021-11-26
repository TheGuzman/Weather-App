import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { CurrentWeatherCard } from './current-weather/current-weather';

export default function InteractiveSection() {


    return (
        <Grid container xs={12} sx={{
            color: 'primary.contrastText',
            flexDirection: 'row',
            justifyContent: 'space-around'
        }}>
            <Box xs={5}>
                <Grid item >
                    <CurrentWeatherCard></CurrentWeatherCard>
                </Grid>
            </Box >
            <Box xs={6}>
                <Grid item >
                    <p>Hoy el tiempo suena a...</p>
                </Grid>
                <Grid item >
                    <iframe src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3" width="473.98" height="443.03" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </Grid>
            </Box >
        </Grid>

    )
}