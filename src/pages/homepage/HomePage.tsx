import React from 'react';
import { Grid } from '@mui/material';
import homePageStyles from './HomePageStyles';

import Directory from '../../components/directory/Directory';

const HomePage: React.FunctionComponent<{}> = function () {
    const classes = homePageStyles();
    return (
        <Grid container className={classes.homepage}>
            <Directory />
        </Grid>
    );
};

export default HomePage;
