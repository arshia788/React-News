import React, {useContext} from 'react';
import {Container, makeStyles, Typography } from '@material-ui/core';
import { Bookmark, ExitToApp,List, Home, Person, PhotoCamera, PlayCircleOutline, Settings, ShopTwo, Storefront, TabletMac } from '@material-ui/icons';

import { NavbarColor } from '../context/ItemProvider';

const useStyles=makeStyles((theme)=>({

    container:{
        transition:'all .3s ease',
        // marginRight:theme.spacing(10),
        paddingTop:theme.spacing(10),
        backgroundColor: (props)=> (props.navColor ? 'black':'navy'),
        height:'100vh',
        position:'fixed',
        width:'300px',
        top:'0px',
        left:'0',
        [theme.breakpoints.down('md')]:{
            width:'200px',

        },
        [theme.breakpoints.up('sm')]:{
            backgroundColor:'white',
            color:'#555',
            border:'1px solid #f8f8f8',
        },
        [theme.breakpoints.down('sm')]:{
            width:'90px',
            height:'auto',
        }
    }
    ,


    item:{
        display:'flex',
        alignItems:'center',
        marginBottom:theme.spacing(4),
        [theme.breakpoints.up('sm')]:{
            marginBottom:theme.spacing(3),
            cursor:'pointer',
        }
    },


    text:{
        color:'#fff',
        transition:'all .3s ease',
        [theme.breakpoints.down('sm')]:{
            display:'none'
        }
    },

    icon:{
    
        transition:'all .3s ease',
        color:(props)=> (props.navColor ? 'crimson':'#fff'),
        fontWeight:'500',
        marginRight:theme.spacing(1),
        [theme.breakpoints.up('sm')]:{
            fontSize:'18px'
        },
        [theme.breakpoints.down('sm')]:{
            marginBottom:'150px',
        }
    },

    
}))

const RightBar = () => {

    const {navColor, changeColor}= useContext(NavbarColor)

    const classes= useStyles({navColor})

    return (

        <Container className={classes.container}>

            <div className={classes.item}>
                <Home className={classes.icon}/>
                <Typography  className={classes.text}>home </Typography>
            </div>

            <div className={classes.item}>
                <Person className={classes.icon}/>
                <Typography className={classes.text}>freinds </Typography>
            </div>

            <div className={classes.item}>
                <List className={classes.icon}/>
                <Typography className={classes.text}>video </Typography>
            </div>

            <div className={classes.item}>
                <PhotoCamera className={classes.icon}/>
                <Typography className={classes.text}>photo </Typography>
            </div>

            <div className={classes.item}>
                <PlayCircleOutline className={classes.icon}/>
                <Typography className={classes.text}>outline </Typography>
            </div>

            <div className={classes.item}>
                <TabletMac className={classes.icon}/>
                <Typography className={classes.text}>mac </Typography>
            </div>

            <div className={classes.item}>
                <Bookmark className={classes.icon}/>
                <Typography className={classes.text}>collections</Typography>
            </div>

            <div className={classes.item}>
                <Storefront className={classes.icon}/>
                <Typography className={classes.text}>store </Typography>
            </div>

            <div className={classes.item}>
                <Settings className={classes.icon}/>
                <Typography className={classes.text}>setting </Typography>
            </div>

            <div className={classes.item}>
                <ExitToApp className={classes.icon}/>
                <Typography className={classes.text}>exit </Typography>
            </div>
            

        </Container>
    );
};

export default RightBar;