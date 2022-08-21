import React from 'react';

import { Switch, Route } from 'react-router-dom';
import {Grid, makeStyles } from '@material-ui/core';

import Leftbar from './Leftbar';
import RightBar from './RightBar';
import Feed from './Feed';

const Landing = () => {

    return (
        <div>

            <Grid container >

                <Grid item sm={3} xs={2}>
                    <RightBar />
                </Grid>
                
                <Grid item sm={9} xs={10}>
                    <Feed />

                </Grid>

                

            </Grid>
            
        </div>
    );
};

export default Landing;