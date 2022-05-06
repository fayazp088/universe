import React from 'react';
import { Grid, Typography } from '@mui/material';
import { previewCardStyles } from './previewCardCollectionStyles';
import { ShopItemType } from '../../types/shopPageTypes';

const PreviewCard = ({ name, imageUrl, price }: ShopItemType) => {
    const classes = previewCardStyles();
    return (
        <Grid className={classes.collection_item}>
            <Grid
                className={classes.image}
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <Grid className={classes.collection_footer}>
                <Typography className={classes.name}>{name}</Typography>
                <Typography className={classes.price}>{price}</Typography>
            </Grid>
        </Grid>
    );
};

export default PreviewCard;
