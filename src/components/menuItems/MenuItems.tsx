import React from 'react';
import { Grid, Typography } from '@mui/material';
import menuItemStyles from './menuItemsStyles';
import { MenuItemsTypes } from '../../types/homePageTypes';

const MenuItems: React.FunctionComponent<MenuItemsTypes> = function ({
    title,
    imageUrl,
    size = '',
}: MenuItemsTypes) {
    const classes = menuItemStyles();
    return (
        <Grid
            style={{ backgroundImage: `url(${imageUrl})` }}
            className={`${classes.menuItem} ${size && classes.size}`}
        >
            <Grid className={classes.content}>
                <Typography className={classes.title}>{title}</Typography>
                <Typography className={classes.subtitle}>Shop Now</Typography>
            </Grid>
        </Grid>
    );
};

export default MenuItems;
