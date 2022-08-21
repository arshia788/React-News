import React from 'react';
import {makeStyles,Container,Typography } from '@material-ui/core';


const useStyles=makeStyles((theme)=>({
    container:{
        paddingTop:theme.spacing(10)
    }
}))

const Leftbar = () => {

    const classes= useStyles()

    return (
        
        <Container className={classes.container}>

            <div className={classes.item}>
                
            </div>
            

        </Container>
    );
};

export default Leftbar;