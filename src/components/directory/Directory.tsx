import React from 'react';
import { Grid } from '@mui/material';
import directoryMenuStyles from './directoryStyles';
import { DirectorySectionTypes } from '../../types/homePageTypes';
import MenuItems from '../menuItems/MenuItems';

const Directory: React.FunctionComponent<{}> = () => {
    const classes = directoryMenuStyles();
    const sections: DirectorySectionTypes[] = [
        {
            title: 'Hats',
            imageUrl:
                'https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            id: 0,
        },
        {
            title: 'Jackets',
            imageUrl:
                'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=680&q=80',
            id: 1,
        },
        {
            title: 'Sneakers',
            imageUrl:
                'https://images.unsplash.com/photo-1559050993-d4e4fbf11769?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
            id: 2,
        },
        {
            title: 'Womens',
            size: 'large',
            imageUrl:
                'https://images.unsplash.com/photo-1513094735237-8f2714d57c13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            id: 3,
        },
        {
            title: 'Mens',
            size: 'large',
            imageUrl:
                'https://images.unsplash.com/photo-1537261131936-3cdff36a1ac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            id: 4,
        },
    ];

    return (
        <Grid className={classes.directoryMenu}>
            {sections.map(
                ({ id, title, imageUrl, size }: DirectorySectionTypes) => {
                    return (
                        <MenuItems
                            title={title}
                            key={id}
                            imageUrl={imageUrl}
                            size={size || ''}
                        />
                    );
                },
            )}
        </Grid>
    );
};

export default Directory;
