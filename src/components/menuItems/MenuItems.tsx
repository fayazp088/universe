import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import menuItemStyles from './menuItemsStyles';
import { MenuItemsTypes } from '../../types/homePageTypes';

const MenuItems = ({ title, imageUrl, size = '', linkUrl }: MenuItemsTypes) => {
    const classes = menuItemStyles();
    const navigate = useNavigate();

    return (
        <Grid
            className={`${classes.menuItem} ${size && classes.size}`}
            onClick={() => navigate(linkUrl, { replace: true })}
        >
            <Grid
                style={{ backgroundImage: `url(${imageUrl})` }}
                className={classes.background}
            />
            <Grid className={classes.content}>
                <Typography className={classes.title}>{title}</Typography>
                <Typography className={classes.subtitle}>Shop Now</Typography>
            </Grid>
        </Grid>
    );
};

export default MenuItems;
