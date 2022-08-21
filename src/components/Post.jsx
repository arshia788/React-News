import React from 'react';
import {Link} from 'react-router-dom';
import { useContext } from 'react';

import {makeStyles ,
    Typography, 
    Card, 
    CardActionArea, 
    CardContent, 
    CardMedia, 
    CardActions, 
    Button,
} from '@material-ui/core';

import {NavbarColor} from '../context/ItemProvider';


const useStyles=makeStyles((theme)=>({
    media:{
        height:'300px',
        [theme.breakpoints.down('sm')]:{
            height:'150px'
        },
        objectFit:'cover'
    },
    
    card:{
        backgroundColor:(props)=> (props.navColor ? 'black':'#fff'),
        marginBottom:theme.spacing(5)
    }
,

    link:{
        fontSize: '1.1rem' ,
        textDecoration:'none',
        padding:'3px 10px',
        backgroundColor:(props)=> (props.navColor ? 'crimson':'navy'),
        borderRadius:'3px',
        color:'#fff',
        '&:hover':{
            opacity:'.9'
        }
    },

    line:{
        border:'none',
        height:'1px',
        backgroundColor:(props)=> (props.navColor ? 'crimson':'black'),
    },
    text:{
        color:(props)=> (props.navColor ? '#fff':'black')
    }

}))




const Post = ({title,axe,id}) => {

    const {navColor} = useContext(NavbarColor)

    
    const classes= useStyles({navColor})

    return (

        <Card className={classes.card}>

            <CardActionArea>

                <CardMedia 
                className={classes.media}
                image={axe}
                alt='first post'
                />

                <CardContent>
                    <Typography gutterBottom variant='h5'  className={classes.text} >{title}</Typography>
                    <hr className={classes.line}/>

                    <Typography variant='body2' className={classes.text}>this is lorem ipsuom for the material course this is lorem ipsuom for the material coursethis is lorem ipsuom for the material coursethis is lorem ipsuom for the material coursethis is lorem ipsuom for the material coursethis is lorem ipsuom for the material coursethis is lorem ipsuom for the material coursethis is lorem ipsuom for the material coursethis is lorem ipsuom for the material coursethis is lorem ipsuom for the material coursethis is lorem ipsuom for the material coursethis is lorem ipsuom for the material coursev</Typography>
                </CardContent>


                <CardActions>

                    <Link className={classes.link} to= {`/news/${id}`}>
                        click
                    </Link>

                </CardActions>

            </CardActionArea>
        </Card>
    );
};

export default Post;