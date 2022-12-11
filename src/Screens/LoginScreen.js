import React, { useState } from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen';
function LoginScreen() {
  const [signIn , setsignIn] = useState(false);
  return (
    <div className='loginScreen'>
        <div className='loginScreen_background'>
            <img className='loginScreen_logo' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='' />
            <button onClick={()=>setsignIn(true)} className='loginScreen_Button'>Sign In</button>
            <div className='loginScreen_fix'></div>
            <div className='loginScreen_content'>
              {signIn?(
                <SignUpScreen/>  
              ):(
                 <>
                <h1>Unlimited films,TV programmes and more. </h1>
                <h2>Watch anywhere. Cancel at any time.</h2>
                <h3>Ready to watch? Enter your email to crate or restart your membership.</h3>
                <div className='loginScreen_input'>
                  <form>
                    <input type="email" placeholder="Email Adress" />
                    <button onClick={()=>setsignIn(true)} className='loginScreen_form_button '>
                      GET STARTED</button>
                  </form>
                </div>
               </>
              )}
             
            </div>
        </div>
    </div>
  );
}

export default LoginScreen ;