import NavBar from "./NavBar";
// import "./home.css";
import Carts from "./Carts"
import { useEffect, useState } from 'react';
import "../Styles/cart.css"


export default function Cart({cart,order,setorder,setcart}){
  const [ccart,setccart]=useState([]);
function handleOrder(){

  // alert("order placed successfylly");
  setcart({ccart,cart})
  setorder(cart);
  setcart([]);
  

}
    return(
        <>
        <NavBar />
        {cart.length ?
        <div className="frame1">
        <div className="cartGrid">
          
        <div className="cartTable">
                    <table>
                    <thead >
                      <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item, index) => (
                        <tr key={index}>
                          
                          <td>{index + 1}.&nbsp;&nbsp;{item.productName}</td>
                          <td>{item.price}</td>
                          <td>{item.quantity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  </div>
                  <button onClick={handleOrder} className="placeButton">Place order</button>
                  </div>
                 
                  </div> : <h1>Cart is empty</h1> }
                  

        </>
    )
}