import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import { BrowserRouter as Router , Switch  , Route} from "react-router-dom";
import LoginScreen from './Screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch,useSelector } from 'react-redux';
import {login,logout, selecUser} from "./features/userSlice"
import ProfileScreen from "./Screens/ProfileScreen"

function App() { 
  const user = useSelector(selecUser);
  const dispatch = useDispatch();
  useEffect(() =>{
    const unsbuscribe = auth.onAuthStateChanged((userAuth)=>{ //listen to any changes
      if(userAuth){ 
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,
        }));
       
      }else {
        dispatch(logout() )
      }
    });
    return unsbuscribe;
  },[dispatch]);
  return (
    <div className="app">
     
       <Router>
        {!user?(
          <LoginScreen />
        ):  (
        <Switch>
          <Route  path="/Profile">
             <ProfileScreen />
          </Route>
            <Route exact path ="/">
            <HomeScreen/>
          </Route>  
      </Switch> 
       )}
     </Router>   
    </div>
   
      
  );
  }  

export default App; 
