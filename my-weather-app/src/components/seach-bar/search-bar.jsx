import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core/styles'
import { IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MyLocationIcon from '@mui/icons-material/MyLocation';


const useStyles = makeStyles({
    root: {
        boxSizing: 'content-box'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchBar: {
        background: 'white',
        border: '2px solid white',
        width: '40em',
        height: '2em',
        margin: '4em 0em 0em 0em',
        borderRadius: '20em',
        color: 'white',
    },
    button: {
        margin: '4em 0em 0em 0.5em',
        height: '2.3em',
        borderRadius: '20em',
    }
});


export default function SearchBar() {
    const classes = useStyles();

    return (
        <Box sx={{
            color: 'primary.contrastText'
        }}>
            <Grid container >
                <Grid item xs={12} className={classes.container}>
                    {/* <div className={classes.container}>
                        <input className={classes.searchBar} placeholder='search location'></input>
                        <Button variant="contained" className={classes.button}>Buscar</Button>
                    </div> */}
                    <Paper sx={{borderRadius: '20px'}}>
                        <IconButton sx={{ p: '10px' }} aria-label="menu">
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search Google Maps"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                            <MyLocationIcon></MyLocationIcon>
                        </IconButton>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}