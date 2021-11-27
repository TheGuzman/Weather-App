import Grid from '@mui/material/Grid';
import CardWeather from '../cards/card-weather';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export default function PodcastSection(props) {

    const weeklyArray = props.info.daily?.slice(1, 7)

    const city = props.city.name

    const PodcastTitle = styled(Typography)({
        fontSize: '36px',
        fontWeight: '200',
        color: 'white',
        marginBottom: '1em',
        marginLeft: '1em',
    })
    const PodcastCity = styled(Typography)({
        fontSize: '36px',
        fontWeight: '600',
        color: 'white',
        marginBottom: '1em',
        marginLeft: '0.4em',
    })

    return (
        <Grid container sx={{
            color: 'primary.contrastText',
            flexDirection: 'row',
            justifyContent: 'space-around'
        }}>
            <Grid item container>
                <PodcastTitle>Los Podcasts más escuchados en</PodcastTitle>
                <Grid item >
                    <PodcastCity>{city!==undefined?city:'Madrid'}</PodcastCity>
                </Grid>
            </Grid>
            {/* {weeklyArray?.map((e, i) => <Grid item >
                <CardWeather info={e} key={i}></CardWeather> */}
        </Grid>)
}
