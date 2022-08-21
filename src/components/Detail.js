import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';

import RightBar from './RightBar';
import ShowExacNew from './ShowExacNew';


const useStyle=makeStyles((theme)=>({

    container:{
        paddingTop:theme.spacing(),
        position:'sticky',
        top:'0',
        Height:'100vh'
    },

}))

const Detail = (props) => {

    const classes= useStyle()
    const id= props.match.params.id

    return (

        <Grid container className={classes.container}  >

            <Grid item sm={3} xs={2} className={classes.left} >
                <RightBar />
            </Grid>

            <Grid item sm={9} xs={10} className={classes.right}>
                < ShowExacNew id={id} />
            </Grid>


        </Grid>
    );
};

export default Detail;