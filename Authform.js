import React, { useState } from "react"

export default function Authform() {
  const [IsLogin, setIsLogin] = useState(true);
  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button className= {IsLogin? 'active':""} onClick={()=> setIsLogin
            (true)}>Login</button>
          <button className={!IsLogin ? 'active':""} onClick={()=> setIsLogin
            (false)}>SignUp</button>
            
        </div>
        {IsLogin ? <>
          <div className="form">
          <h2>Login Form</h2>
          <input type="email" placeholder="Email"/>
          <input type='password' placeholder="Password"/>
          <a href="www.vdfhvbdfhv.com" > forgot Password?</a>
          <button>Login</button>
          <p>
           Not a member? <a href="#" onClick={()=> setIsLogin(false)}>
                   Signup now
             </a>
          </p>
          <div className="designer">
          <h5>~ Designed by Farhan</h5>
          </div>
          

          </div>
          </> : <>
          <div className="hello">
          <h2 >Signup Form</h2> 
          <input type="email" placeholder="Email"/>
          <input type='password' placeholder="Password"/>
           <input type='password' placeholder="Confirm Password"/>
           <button>Signup</button>
           <h5>~ Designed by Farhan</h5>
       
          </div>
          
    
          
          </>}
      </div>
    </div>
  );
};
