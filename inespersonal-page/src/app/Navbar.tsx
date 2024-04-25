import React,  {useState} from "react"; 
import { ControlButton } from "reactflow";

const Navbar = () => {
    return (
        <nav className= "flex justify-between items-center w-full border border-pink-500"> 
        <button className="flex-auto outline outline-pink-500 "> 
            About me 
        </button>
        <button className="flex-auto outline outline-pink-500"> 
            Skills
        </button>
        <button className="flex-auto outline outline-pink-500"> 
            Projects
        </button>
        </nav>
    )
} 

export default Navbar;