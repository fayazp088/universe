import React from 'react';
import { Grid } from '@mui/material';
import homePageStyles from './homepage.styles';

const HomePage: React.FunctionComponent<{}> = function () {
    const classes = homePageStyles();
    return (
        <Grid container className={classes.homepage}>
            <Grid className={classes.directoryMenu}>
                <Grid className={classes.menuItem}>
                    <Grid className={classes.content}>
                        <h1 className={classes.title}>Hats</h1>
                        <span className={classes.subtitle}>Shop Now</span>
                    </Grid>
                </Grid>
                <Grid className={classes.menuItem}>
                    <Grid className={classes.content}>
                        <h1 className={classes.title}>Jackets</h1>
                        <span className={classes.subtitle}>Shop Now</span>
                    </Grid>
                </Grid>
                <Grid className={classes.menuItem}>
                    <Grid className={classes.content}>
                        <h1 className={classes.title}>Sneakers</h1>
                        <span className={classes.subtitle}>Shop Now</span>
                    </Grid>
                </Grid>
                <Grid className={classes.menuItem}>
                    <Grid className={classes.content}>
                        <h1 className={classes.title}>Womens</h1>
                        <span className={classes.subtitle}>Shop Now</span>
                    </Grid>
                </Grid>
                <Grid className={classes.menuItem}>
                    <Grid className={classes.content}>
                        <h1 className={classes.title}>Mens</h1>
                        <span className={classes.subtitle}>Shop Now</span>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default HomePage;
