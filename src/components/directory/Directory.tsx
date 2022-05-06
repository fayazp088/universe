import React from 'react';
import { Grid } from '@mui/material';
import directoryMenuStyles from './directoryStyles';
import { DirectorySectionTypes } from '../../types/homePageTypes';
import MenuItems from '../menuItems/MenuItems';

const Directory = () => {
    const classes = directoryMenuStyles();
    const sections: DirectorySectionTypes[] = [
        {
            title: 'Hats',
            imageUrl: '/images/hats.png',
            id: 0,
            linkUrl: 'hats',
        },
        {
            title: 'sneakers',
            imageUrl: '/images/sneakers.png',
            id: 1,
            linkUrl: '',
        },
        {
            title: 'Jackets',
            imageUrl: '/images/jackets.png',
            id: 2,
            linkUrl: '',
        },
        {
            title: 'Womens',
            size: 'large',
            imageUrl: '/images/womens.png',
            id: 3,
            linkUrl: '',
        },
        {
            title: 'Mens',
            size: 'large',
            imageUrl: '/images/men.png',
            id: 4,
            linkUrl: '',
        },
    ];

    return (
        <Grid className={classes.directoryMenu}>
            {sections.map(
                ({
                    id,
                    title,
                    imageUrl,
                    size,
                    linkUrl,
                }: DirectorySectionTypes) => {
                    return (
                        <MenuItems
                            title={title}
                            key={id}
                            imageUrl={imageUrl}
                            size={size || ''}
                            linkUrl={linkUrl}
                        />
                    );
                },
            )}
        </Grid>
    );
};

export default Directory;
