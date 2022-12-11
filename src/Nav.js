import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import './nav.css'

function Nav() {
    const [show , handleShow] = useState(false)
    const history = useHistory()
    const transitionNavBar=() =>{
        if(window.scrollY>50){ //windows.scrollY > 100  wa9teli nscrolliw 100px verticalement l action tsir 
        handleShow(true);
        }
        else {
            handleShow(false)
        }
    };
    useEffect(() => {
        window.addEventListener("scroll",transitionNavBar);
        return()=>window.removeEventListener("scroll",transitionNavBar);
    },[]);
  return (
    <div className= {`nav ${show &&"nav_black"}`}>
        <div className='nav_content'>
           <img onClick={()=>history.push("/")}
            className='nav_logo' 
           src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
            alt=''></img>
            <img onClick={ ()=>history.push("/profile")} 
            className='nav_avatar' 
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
             alt=''></img>
         </div>
    </div>
  )
}

export default Nav