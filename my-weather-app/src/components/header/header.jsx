import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import spotifyLogo from '../../img/logos/spotify.png'
import { Typography } from '@mui/material';


export default function Header() {
    return (
        <Box sx={{
            backgroundColor: 'neutral.dark',
            color: 'primary.contrastText'
        }}>
            <Grid container >
                <Grid item container sx={{display:'flex',
                flexWrap:'no-wrap',alignItems:'center'}}>
                    <Grid item>
                        <img alt='spotify logo' src={spotifyLogo}></img>
                    </Grid>
                    <Grid item container>
                        <Grid item>
                            <Typography sx={{ fontWeight: 1000 }}>Spotify</Typography>
                        </Grid>
                        <Grid item>
                            <Typography>Weather</Typography>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </Box>


    )
}