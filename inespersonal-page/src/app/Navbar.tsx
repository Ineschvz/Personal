import React,  {useState} from "react"; 

const Navbar = () => {
    return (
        <div className= "flex justify-between items-center w-full border border-pink-500"> 
        <div className="flex-auto outline outline-pink-500 "> 
            About me 
        </div>
        <div className="flex-auto outline outline-pink-500"> 
            Skills
        </div>
        <div className="flex-auto outline outline-pink-500"> 
            Projects
        </div>
        </div>
    )
} 

export default Navbar;