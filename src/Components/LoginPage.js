import { useState, useEffect } from "react";
import "./login.css";
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
export default function LoginPage(props) {
    const navigate = useNavigate();
    const [id, setid] = useState("")
    const [pass, setpass] = useState("")
    const [credential, setCredential] = useState([]);

    useEffect(() => {
        // Fetching user credentials from API
        axios.get('http://localhost:8080/api/getcred')
            .then(response => setCredential(response.data))
            .catch(error => console.error(error));
    }, []);


    function handleLogin() {
        var l=false;
        credential.map((cred) =>{
            if (cred.email === id && cred.password === pass) {
                l=true

            }
        });

        if (l) {
            props.changeLog()
            navigate("/home")
            console.log("logged in")
        }

        else {
            console.log("logged out")
            console.log(credential.email)


        }
    }
    return (
        <>
            <div className="header">Login</div>
            <div id="loginBox">
                <input onChange={(e) => setid(e.target.value)} className="input" id="email" placeholder="Enter email"></input><br />
                <input onChange={(e) => setpass(e.target.value)} type="password" className="input" id="password" placeholder="Enter password"></input>
                <div><button id="loginButton" onClick={handleLogin}>Login</button></div>
                <div>New user?<Link to="/register" style={{ textDecoration: 'none' }} > Sign Up</Link></div>

            </div>
        </>

    );
}