import Header from '../components/header/header.jsx'
import Grid from '@mui/material/Grid';
import './style.css'
import SearchBar from '../components/seach-bar/search-bar.jsx';
import InteractiveSection from '../components/Interactive-section/interactive-section.jsx';

export default function WeatherPage() {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Header></Header>
            </Grid>
            <Grid item xs={12}>
                <SearchBar></SearchBar>
                {/* <div style={{height:'100em'}}></div> */}
            </Grid>
            <Grid item xs={12}>
                <InteractiveSection></InteractiveSection>
            </Grid>
           
        </Grid >
    )
}