import React, {useState, createContext} from 'react';

import city from '../image/bg.jpg'
import camera from '../image/2.jpg'
import coffe from '../image/3.jpg'
import dark from '../image/dark.jpg'
import wellcome from '../image/wellcome.jpg'
import state from '../image/1.jpg'

export const NavbarColor = createContext()
export const ChangeInput = createContext()
export const ItemGoods   = createContext()
export const SearchNews  = createContext() 


const ItemProvider = ({children}) => {

    const [navColor, setNavColor]=useState(false)
    const [deleteSearch, setDeleteSearch]=useState(false)

    const [input, setInput]= useState('')

    const [products , setProducts ]= useState([
        {id:1 , image:city, title:'the new cities'},
        {id:2 , image:coffe, title:'the new camera'},
        {id:3 , image:camera, title:'the new coffe'},
        {id:4 , image:dark, title:'the new world'},
        {id:5 , image:wellcome, title:'the new star traks'},
        {id:6 , image:state, title:'the new state'},
    ]
    )

    const changeColor=()=>{
        setNavColor(!navColor)
        console.log(navColor)
    }


    const changeInputSearch=()=>{
        setDeleteSearch(!deleteSearch)
        console.log(deleteSearch)
    }


    return (
        <NavbarColor.Provider value={{navColor,changeColor}}>
            <ChangeInput.Provider value={{deleteSearch,changeInputSearch }}>
                <ItemGoods.Provider value={products}>
                    <SearchNews.Provider  value={{input, setInput}}>
                        {children}
                    </SearchNews.Provider>
                </ItemGoods.Provider>
            </ChangeInput.Provider>
        </NavbarColor.Provider>
    );
};

export default ItemProvider;