import { Grid } from '@mui/material';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import appStyles from './appStyles';
import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import Shop from './pages/shop/Shop';

function App() {
    const classes = appStyles();
    return (
        <Grid className={classes.app}>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="shop" element={<Shop />} />
            </Routes>
        </Grid>
    );
}

export default App;
