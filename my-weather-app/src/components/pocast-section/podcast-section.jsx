import Grid from '@mui/material/Grid';
import CardPodcast from '../cards/card-pod1';
import CardPodcastTwo from '../cards/card-pod2';
import CardPodcastThree from '../cards/card-pod3';
import CardPodcastFour from '../cards/card-pod4';
import CardPodcastFive from '../cards/card-pod5';
import CardPodcastSix from '../cards/card-pod6';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';


export default function PodcastSection(props) {


    const city = props.city


    const PodcastTitle = styled(Typography)({
        fontSize: '36px',
        fontWeight: '200',
        color: 'white',
        marginBottom: '1em',
        marginLeft: '1em',
    })
   

    return (
        <Grid container sx={{
            color: 'primary.contrastText',
            flexDirection: 'row',
        
        }}>
            <Grid item container>
                <PodcastTitle>Los Podcasts más escuchados en Madrid</PodcastTitle>
                

            </Grid>
            <Grid container sx={{flexDirection: 'row',
            justifyContent: 'space-around'}}>
                <Grid item>
                <CardPodcast></CardPodcast>
                </Grid>

                <Grid item>
                <CardPodcastTwo></CardPodcastTwo>
                </Grid>

                <Grid item>
                <CardPodcastThree></CardPodcastThree>
                </Grid>

                <Grid item>
                <CardPodcastFour></CardPodcastFour>
                </Grid>

                <Grid item>
                <CardPodcastFive></CardPodcastFive>
                </Grid>

                <Grid item>
                <CardPodcastSix></CardPodcastSix>
