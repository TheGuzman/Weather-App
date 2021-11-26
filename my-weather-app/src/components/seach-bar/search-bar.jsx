import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@mui/material';



const useStyles = makeStyles({
    root:{
        boxSizing:'content-box'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchBar: {
        background: 'transparent',
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
                    <div className={classes.container}>
                        <input className={classes.searchBar} placeholder='search location'></input>
                        <Button variant="contained" className={classes.button}>Buscar</Button>
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}