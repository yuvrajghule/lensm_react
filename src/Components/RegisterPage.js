import { useState } from "react";
import "./login.css";
import {Link} from "react-router-dom";
import axios from 'axios';

export default function RegisterPage(){
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [mobilenumber, setMobileNumber] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();
        
          
    try {
        const response = await fetch('http://localhost:8080/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            username,
            mobilenumber,
            password,
          }),
        });
          
          if (response.ok){
            // Signup successful
            // Perform any action, such as displaying a success message or redirecting
            console.log("signup successfully")
            console.log(email)
            console.log(mobilenumber)
            alert("signup successfully")

          }
          else
          {
            console.log("signup failed")
            console.log(email)
            console.log(mobilenumber)
            // Signup failed
            // Perform any action, such as displaying an error message
          }
        } catch (error) {
            console.log(error)
          // Handle request error
          // Perform any action, such as displaying an error message
        }
      };
    return(
        <>
        
        <div className="header">Register</div>
        <div id="registerBox">
        <h1 style={{color: "blue"}}>Sign Up</h1>
        <form onSubmit={handleSignup}>
        <input className="input" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email"></input><br />
        <input className="input" id="username" onChange={(e) => setUsername(e.target.value)} placeholder="Enter username"></input><br />
        <input className="input" onChange={(e) => setMobileNumber(e.target.value)} id="mobileNumber" placeholder="Enter Mobilenumber"></input><br />

        <input className="input" type="password" onChange={(e) => setPassword(e.target.value)} id="password" placeholder="password"></input><br />
        <input className="input" type="password" onChange={(e) => setCpassword(e.target.value)} id="cpassword" placeholder="Confirm password"></input><br />
      
        <div><button id="submitButton">Submit</button></div>
        </form>

        <div>Already a User?<Link to="/" style={{textDecoration: 'none'}}> Login</Link></div>
        </div>
        </>
    );
}