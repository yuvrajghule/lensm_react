import NavBar from "./NavBar";
import "./home.css";
export default function Orders({order,setcart}){
  function handlePay(){
    
  }
    return(
        <>
        <NavBar />
        { order.length ?
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
                      {order.map((item, index) => (
                        <tr key={index}>
                          
                          <td>{index + 1}.&nbsp;&nbsp;{item.productName}</td>
                          <td>{item.price}</td>
                          <td>{item.quantity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  </div>
                  <button onClick={handlePay} className="placeButton">Pay</button>
                  </div>
                 
                  </div> : <h1>No any order placed yet</h1> }
                  

        </>
    )
}