import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';

export function CurrentWeatherCard() {

    return (
        <Card>
            
            <Grid container sx={{
                    color: 'primary.contrastText',
                    flexDirection: 'column',
                    justifyContent: 'space-around'
                }}>
                <Grid item>
                    <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            aaaaa
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item container sx={{
                    color: 'primary.contrastText',
                    flexDirection: 'column',
                    justifyContent: 'space-around'
                }}>
                    <Grid item>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>
        </Card>
    )
}