import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { CurrentWeatherCard } from './current-weather/current-weather';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export default function InteractiveSection() {

    const IframeTitle = styled(Typography)({
        fontSize: '31px',
        fontWeight: '450',
        color: 'white',
        lineHeight: '72px'
    })

    return (
        <Grid container spacing={20} sx={{
            color: 'primary.contrastText',
            flexDirection: 'row',
            justifyContent: 'space-around'
        }}>
            <Grid item xs={6} >
                <Box>
                    <Grid item >
                        <CurrentWeatherCard></CurrentWeatherCard>
                    </Grid>
                </Box >
            </Grid>
            <Grid item xs={5}>
                <Box xs={6}>
                    <Grid item >
                        <IframeTitle>♫ Hoy el tiempo suena a...</IframeTitle>
                    </Grid>
                    <Grid item >
                        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWV1PBrIG2weG?utm_source=generator" width="476" height="443" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    </Grid>
                </Box >
            </Grid>
        </Grid>

    )
}