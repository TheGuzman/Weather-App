import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import spotifyLogo from '../../img/logos/spotify.png'


export default function Header() {
    return (
        <Box sx={{
            backgroundColor: 'neutral.dark',
            color: 'primary.contrastText'
        }}>
            <Grid container >
                <Grid item>
                    <img alt='spotify logo' src={spotifyLogo}></img>
                </Grid>
                <Grid item>
                    <span>Spotify</span><span>Weather</span>
                </Grid>
            </Grid>
        </Box>


    )
}