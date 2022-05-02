import React from 'react';
import { Grid, Typography } from '@mui/material';
import menuItemStyles from './menuItemsStyles';
import { MenuItemsTypes } from '../../types/homePageTypes';

const MenuItems: React.FunctionComponent<MenuItemsTypes> = ({
    title,
    imageUrl,
    size = '',
}: MenuItemsTypes) => {
    const classes = menuItemStyles();
    return (
        <Grid className={`${classes.menuItem} ${size && classes.size}`}>
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
