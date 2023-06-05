import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import "./home.css";
import axios from 'axios';

import Product from "./Product";

export default function Home({Logout,cart,setcart}) {
    
    // const [cart, setcart]=useState([]);
    const [product, setproduct] = useState([])


    useEffect(() => {
        // Fetch getproductproduct details from the API
        fetch('http://localhost:8080/api/getproduct')
          .then(response => response.json())
          .then(data => setproduct(data))
          .catch(error => console.log(error));
          
          console.log(product)
      }, []);

    if(!product){
        return <div>Loading</div>
    }
    return (
        <>
            <NavBar Logout={Logout}/>
            <div id="productHomeBody" className="homePage">
                <h1 style={{color: "white", fontFamily: 'Gill Sans'}}>Welcome</h1>
                {product.map((prod,id) => (
                    <Product prod={prod} cart={cart} setcart={setcart} key={id}/>
                ))}
            </div>
        
        </>
    )
}