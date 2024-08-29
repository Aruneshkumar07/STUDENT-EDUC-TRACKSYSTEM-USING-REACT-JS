import React from "react";
import './App.css';
import { LuUsers2 } from "react-icons/lu";
import { RiCurrencyFill } from "react-icons/ri";
import { RiDiscountPercentFill } from "react-icons/ri";
import { BsFillClipboardDataFill } from "react-icons/bs";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

function SideNav(){
    return (
        <div className="sidenav">
            <div className='logo'>
                <img src="https://w7.pngwing.com/pngs/338/27/png-transparent-savannah-college-of-art-and-design-art-school-school-emblem-label-logo.png"></img>
            </div> 
            <div className='menu'>
            <ul>
                <li><a href="/"><LuUsers2 /></a></li>
                <li><a href="#doctors"><RiCurrencyFill /></a></li>
                <li><a href="#patients"><RiDiscountPercentFill /></a></li>
                <li><a href="#patients"><AiOutlineAppstoreAdd /></a></li>
                <li><a href="#appointments"><BsFillClipboardDataFill /></a></li>
            </ul>
            </div>        
        </div>
    );
};

export default SideNav;