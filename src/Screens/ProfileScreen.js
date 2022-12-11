import React from "react";
import './ProfileScreen.css';
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { selecUser } from "../features/userSlice";
import { auth } from "../firebase";

function ProfileScreen() {
    const user = useSelector(selecUser);
    return(
        <div className="profileScreen">
          <Nav />
          <div className="profileScreen_body">
            <h1>Edit Profile</h1>
            <div className="profileScreen_info">
                <img
                src="https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png"
                alt=""
                />
                <div className="profileScreen_details">
                    <h2>{user.email}</h2>
                
                <div className="profileScreen_plans">
                    
                   <button onClick={() => auth.signOut()}
                    className="profileScreen__signout">Sign Out</button>
                </div>

            </div>
             </div>
          </div>
        </div>
    )
}

export default ProfileScreen ;