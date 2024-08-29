import React,{useState} from "react";
import './App.css';

import { FaUserAlt } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";


function Content(){
    const [count1,setcount]=useState(0);
    const [count2,setcount1]=useState(0);
    const [count3,setcount2]=useState(0);
    return(
        <div id="overall">
            <div id="card1" onClick={()=>setcount(count1+1)}>
                <a><FaUserAlt /></a>
                <p>{count1}</p>
                <h3>Regular Student</h3>
            </div>
            <div id="card2" onClick={()=>setcount1(count2+1)}>
            <a><FaUserTie /></a>
            <p>{count2}</p>
            <h3>Regular Student</h3>
            </div >
            <div id="card3" onClick={()=>setcount2(count3+1)}>
            <a><FaPerson /></a>
            <p>{count3}</p>
            <h3>Regular Student</h3>
            </div>
        </div>
    )
}
export default Content;