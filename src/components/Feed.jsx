import React,{useContext, useState} from 'react';
import {makeStyles ,Container,Typography} from '@material-ui/core';
import Post from './Post';

import { ItemGoods } from '../context/ItemProvider';
import { filterNews } from './Nabvar';


const useStyles=makeStyles((theme)=>({
    container:{
        paddingTop:theme.spacing(10)
    }
}))

const Feed = ( {data} ) => {

    const newsSearch= useContext(filterNews)
    const products = useContext(ItemGoods) 

    const classes= useStyles()

    return (
        <Container className={classes.container}>

            
            <div className={classes.item}>

               {
                    newsSearch.map(item=> <Post key={item.id} id={item.id} axe={item.image} title={item.title}/>)
               }

            </div>
        

        </Container>
    );
};

export default Feed;