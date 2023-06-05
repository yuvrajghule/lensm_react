import {NavLink} from "react-router-dom";
import "./home.css";
export default function NavBar({Logout}){
    return(
        <>
        <div className="navbar">
            <NavLink style={{fontSize:"25px", paddingTop: "9px"}} className="link" to="/">Lens Mart</NavLink>
            <NavLink id="productHomeButton" className="link" to="/home">Home</NavLink>
            <NavLink id="productCartButton" className="link" to="/cart">Cart</NavLink>
            <NavLink id="productOrderButton" className="link" to="/orders">My Orders</NavLink>
            <NavLink id="logout" className="link" to="/" onClick={Logout}>Logout</NavLink>

        </div>
        </>
    )
}