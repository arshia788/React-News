import React, { useContext } from 'react';
import {makeStyles, Typography } from '@material-ui/core';

import { ItemGoods } from '../context/ItemProvider';
import { NavbarColor } from '../context/ItemProvider';
import PartNews from './PartNews';

const useStyle=makeStyles((theme)=>({
    
    container:{
        paddingTop:theme.spacing(10),
        padding:theme.spacing(4),
        // border:'1px solid black',
    },

    card:{
        width:'100%',
        padding:'10px',
        borderRadius:'10px',
        backgroundColor:(props)=> (props.navColor ? 'black':'#fff'),  
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        
    },
    
    img:{
        width:'100%',
        height:'500px',
        objectFit:'cover',
        borderRadius:'7px',
    },

    title:{
        color:(props)=> (props.navColor ? '#fff':'black')
    },

    item:{
        marginTop:'20px',
        textAlign:'left',
    },

    line:{
        width:'90%',
        border:'none',
        height:'1px',
        backgroundColor:(props)=> (props.navColor ? 'crimson':'black'),
        marginLeft:'5px'
    },
    text:{
        color:(props)=> (props.navColor ? '#fff':'black')
    },
    boxNews:{
        width:'100%',
        paddingLeft:'5px',
        marginTop:'20px',
        height:'500px',
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-between',
        padding:'4px',
        [theme.breakpoints.down('sm')]:{
            display:'block',
        }
    }
}))

const ShowExacNew = ({id}) => {

    const {navColor} = useContext(NavbarColor)

    const code = id;
    const product = useContext(ItemGoods);
    const finalGood= product[code-1];
    const {image, title}= finalGood;

    const classes= useStyle({navColor})

    return (
        <div className={classes.container}>

            <div className={classes.card}>
                <img src={image}  className={classes.img} />

                <div className={classes.item}>
                    <Typography  variant='h4' className={classes.title}>
                        {title}
                    </Typography>
                    <hr className={classes.line}/>
                </div>

                <div className={classes.item} >
                    <p className={classes.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    </p>
                </div>

            </div>

            <div className={classes.boxNews}>
                
                {
                    product.map(item=> <PartNews key={item.id} data={item}/>)
                } 
                   

            </div>


        </div>
    );
};

export default ShowExacNew;