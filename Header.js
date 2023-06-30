import React from "react";
import logo from './logo.jpg'
import './css/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";

const Header = () =>{
return(
    <div className="Header">
        <div className="Header__left">
            <img src={logo} alt="logo"></img>
            <h2>My WebLink</h2>
        </div>
        <div className="Header__middle">
            <div className="search_mail">
                <IconButton>
                    <SearchIcon></SearchIcon>
                </IconButton>
                <input type="text" placeholder="search_mail"/>
            </div>

        </div>
    </div>
)

}

export default Header;

