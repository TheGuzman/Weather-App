import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';



export default function SearchBar(props) {

    let input = '';
    let searchInfo = '';



    function handleSubmit(e) {
        e.preventDefault()
        input = searchInfo.toLowerCase();
        input = input.charAt(0).toUpperCase() + input.slice(1);
        console.log(input)
        props.onSearch(input)
    }

    function handleOnChange(e) {
        searchInfo = e.target.value
        return searchInfo
    }


    const SearchButton = styled(Button)({
        borderRadius: '52px',
        width: '130px',
        heigh: '50px',
        letterSpacing: '1.78396px',
        backgroundColor: 'primary.main',
        marginLeft: '0.5em',
        marginTop: '50px',
        fontSize: '18px',
        fontWeight: 700,
        padding: '8px 24px'
    })


    return (
        <Box sx={{
            color: 'primary.contrastText',
            marginBottom: '4em',
        }}>
            <Grid container >
                <Grid item container xs={12} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center',justifyContent: 'center',}}>
                    {/* <div className={classes.container}>
                        <input className={classes.searchBar} placeholder='search location'></input>
                        <Button variant="contained" className={classes.button}>Buscar</Button>
                    </div> */}
                    <Grid item container xs={6}>
                        <Paper sx={{ borderRadius: '50px', marginTop: '50px' }}>
                            <IconButton type="submit" sx={{ p: '10px' }} aria-label="menu" onClick={handleSubmit}>
                                <SearchIcon />
                            </IconButton>
                            <InputBase
                                sx={{ ml: 1, flex: 1, width: '610px', height: '50px', }}
                                placeholder="Find a place"
                                onChange={handleOnChange}
                            />
                            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" >
                                <MyLocationIcon></MyLocationIcon>
                            </IconButton>
                        </Paper>
                    </Grid>
                    <Grid item xs={2} >
                        <SearchButton variant="contained" onClick={handleSubmit}>Buscar</SearchButton>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}