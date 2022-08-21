import React, { useContext } from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';

import axe from '../image/2.jpg';
import { Link } from 'react-router-dom';


import { ItemGoods } from '../context/ItemProvider';
import { NavbarColor } from '../context/ItemProvider';



const useStyles= makeStyles((theme)=> ({
    container:{
        borderRadius:'5px',
        overflow:'hidden',
        width:'32%',
        height:'250px',
        background:'#fff',
        backgroundColor:(props)=> (props.navColor ? 'black':'#fff'),  
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        marginLeft:'5px',
        marginTop:'10px',
        transition:'all .3s ease',

        [theme.breakpoints.down('sm')]:{
            width:'100%'
        }
    },
    img:{
        width:'100%',
        height:'150px',
        objectFit:'cover',
    },
    part:{
        padding:'5px',
        textAlign:'center'
    },

    link:{
        backgroundColor: (props)=> (props.navColor ? 'crimson':'navy'),
        fontSize: '1rem',
        textDecoration:'none',
        padding:'3px 10px',
        borderRadius:'4px',
        color:'#fff',
    },
    text:{
        transition:'all .3s ease',
        marginBottom:theme.spacing(2),
        color:(props)=> (props.navColor ? '#fff': 'black')
    },
    // button:{
    //     transition:'all .3s ease',
    // }


}))

const PartNews = ({data}) => {

    const {navColor}= useContext(NavbarColor)

    const classes= useStyles({navColor})

    return (

        <div className={classes.container} >
            <img src={data.image}  className={classes.img}/>
            <div className={classes.part}>
                <Typography className={classes.text} >want to read more ?</Typography>
                {/* <Button size='small' variant='contained' className={classes.button}> */}

                    <Link to={`/news/${data.id}`} className={classes.link}>clicck</Link>

                {/* </Button> */}
            </div>
        </div>

    );
};

export default PartNews;