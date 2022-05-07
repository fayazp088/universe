import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import headerStyles from './headerStyles';
import { ReactComponent as Crown } from '../../assets/crown.svg';

const Header = () => {
    const classes = headerStyles();

    return (
        <Grid className={classes.header}>
            <Link to="/" className={classes.logo_container}>
                <Crown />
            </Link>
            <Grid className={classes.options}>
                <Link to="/shop" className={classes.option}>
                    Shop
                </Link>
                <Link to="/" className={classes.option}>
                    Contact
                </Link>
            </Grid>
        </Grid>
    );
};

export default Header;
