import React from 'react';
import { Grid } from '@mui/material';
import homePageStyles from './HomePageStyles';

import Directory from '../../components/directory/Directory';
import AnimatedPage from '../../components/animation/AnimatedPage';

const HomePage: React.FunctionComponent<{}> = () => {
    const classes = homePageStyles();
    return (
        <AnimatedPage>
            <Grid container className={classes.homepage}>
                <Directory />
            </Grid>
        </AnimatedPage>
    );
};

export default HomePage;
