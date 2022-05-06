import React from 'react';
import { Grid, Typography } from '@mui/material';
import PreviewCard from './PreviewCard';
import { previewCardCollectionStyles } from './previewCardCollectionStyles';
import { ShopType, ShopItemType } from '../../types/shopPageTypes';

const PreviewCardCollection = ({ title, items }: ShopType) => {
    const classes = previewCardCollectionStyles();
    return (
        <Grid className={classes.collectionPreview}>
            <Typography variant="h4" className={classes.title}>
                {title.toUpperCase()}
            </Typography>
            <Grid className={classes.preview}>
                {items
                    ?.filter((item, idx) => idx < 4)
                    .map(({ id, name, imageUrl, price }: ShopItemType) => {
                        return (
                            <PreviewCard
                                key={id}
                                name={name}
                                imageUrl={imageUrl}
                                price={price}
                            />
                        );
                    })}
            </Grid>
        </Grid>
    );
};

export default PreviewCardCollection;
