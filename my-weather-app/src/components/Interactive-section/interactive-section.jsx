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
                    <p>♫ Hoy el tiempo suena a...</p>
                </Grid>
                <Grid item >
                    <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWV1PBrIG2weG?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                </Grid>
            </Box >
        </Grid>

    )
}