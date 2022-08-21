import React, { useContext, createContext } from 'react';
import { AppBar,Switch,
    makeStyles, 
    Toolbar,
    Typography,
    InputBase, Avatar, 
    } from '@material-ui/core';

import { Cancel, Search } from '@material-ui/icons';
import {Link} from 'react-router-dom'


import { SearchNews } from '../context/ItemProvider';
import { ItemGoods } from '../context/ItemProvider';
import { NavbarColor } from '../context/ItemProvider';
import { ChangeInput } from '../context/ItemProvider';
import news from '../image/images.png';


const useStyles= makeStyles((theme)=>({
    
   container:{
       transition:'all .3s ease',
       display:'flex',
       justifyContent:'space-between',
       alignItems:'center',
       backgroundColor:(props)=> (props.navColor ? 'black':'navy')
   },

   sizeLg:{
       color:(props)=> (props.navColor ? 'crimson':'#fff'),
       display:'block',
       [theme.breakpoints.down('sm')]:{
           display:'none'
       }
   },

   sizeSm:{
       color:(props)=> (props.navColor ? 'crimson':'#fff'),
       display:'none',
       [theme.breakpoints.down('sm')]:{
           display:'block'
       }
   },

   searchDiv:{
       display:'flex',
       alignItems:'center',
       width:'50%',
       borderRadius:theme.shape.borderRadius,

       border: (props)=> (props.navColor ?'1px solid crimson' : '1px solid #fff'),
       padding:'3px',

       [theme.breakpoints.down('xs')]:{
           display:(props)=>(props.deleteSearch ? 'flex':'none')
       }
   },

   input:{
       color:'#fff',
       width:'95%',
       marginRight:theme.spacing(1)
   },

   cancel:{
       display:'none',
       color:(props)=> (props.navColor ? 'crimson':'#fff'),
       [theme.breakpoints.down('xs')]:{
           display:'block'
       }
   },
   
   icon:{
       display:(props)=>(props.deleteSearch ? 'none':'flex'),
       alignItems:'center',
   },

   search:{

       display:'none',
       marginLeft:theme.spacing(1),
       [theme.breakpoints.down('xs')]:{
           display:'block'
       }
   },
   leftbar:{
        display:'block',
    [theme.breakpoints.down('xs')]:{
        display:'none'
    }
   },

   link:{
    color:'#fff',
    textDecoration:'none',
    cursor:'pointer'
   },

}))


export const filterNews= createContext();

const Nabvar = ({children}) => {

    // news
    const NewsSearch = useContext(ItemGoods);

    const {navColor, changeColor}= useContext(NavbarColor)
    const {deleteSearch, changeInputSearch}= useContext(ChangeInput)
    const classes = useStyles({navColor,deleteSearch})

    // input
    const {input, setInput}= useContext(SearchNews)

    
    const inputSearchNews=(event)=>{
        setInput(event.target.value)
    }
    
    console.log(input)

    const filterItems= NewsSearch.filter(item=> item.title.toLowerCase().includes(input.toLowerCase()))

   return (
       <div>
           <AppBar>

               <Toolbar className={classes.container}>

                       <Link to='/news' className={classes.link}>
                            <Typography variant='h5' component='h1' className={classes.sizeLg}>
                                    news
                            </Typography>

                       </Link>

                       <Link to='/news' className={classes.link}>
                   <Typography variant='h5' component='h1' className={classes.sizeSm}>
                       News
                   </Typography>
                       </Link>

                   <div className={classes.searchDiv}>
                       <Search />
                       <InputBase value={input} onChange={inputSearchNews} placeholder='search...' className={classes.input}/>
                       <Cancel
                        onClick={()=> changeInputSearch(deleteSearch)} 
                        className={classes.cancel}/>
                   </div>

                   <div className={classes.icon}>
                       <Search onClick={()=> changeInputSearch(deleteSearch)  } 

                       className={classes.search} />
                       <Avatar 
                        alt='news'
                        size='large'
                        className={classes.img} 
                        src={news}
                        />
                   </div>

                   <Switch
                      onClick={()=> changeColor(!navColor)}
                      name="checkedA"
                      inputProps={{ 'aria-label': 'dark mod' }}
                    />

               </Toolbar>
           </AppBar>
           
            <filterNews.Provider value={filterItems}>
                {children}
            </filterNews.Provider>
           
       </div>
   );
};

export default Nabvar;