import * as React from 'react';
import Box from '@mui/material/Box';
import spotifyLogoFooter from '../../img/logos/logo-footer.png';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';


export default function Footer() {


    const SpotifyTitle = styled(Typography)({
        fontSize: '32px',
        fontWeight: '900',
        color: 'white',
        textAlign:'right',
        width:'55%'

    })
    const SpotifySubTitle = styled(Typography)({
        fontSize: '12px',
        fontWeight: '450',
        color: 'white',
        width:'50%',
        textAlign:'right',
    })


    return (
        <Box sx={{
            height: '85px',
            backgroundColor: '#282828',
            color: 'primary.contrastText',
            display: 'flex',
            alignItems:'center'
        }}>
             <SpotifyTitle> <img alt='spotify logo footer' src={spotifyLogoFooter}></img>Spotify</SpotifyTitle>
             <SpotifySubTitle>©2021 Spotify AB</SpotifySubTitle>
        </Box>


    )
}





