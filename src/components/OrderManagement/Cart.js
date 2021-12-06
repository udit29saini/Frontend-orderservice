import Button from '@restart/ui/esm/Button';
import "./Cart.css";
import { useState,useEffect } from 'react';

const Cart = (props) => {
  const [cart,setCart] =useState({});
  const [product,setProduct]= useState([]);

  useEffect(() => {
      
    document.title = "view Cart";
    getCart();
    
  }, []);

  const getCart = async () => {
    try {
      let url = `http://localhost:8091/cart/getCart`;

      const res = await fetch(url);
      const data = await res.json();
      console.log("data", data);
      setCart(data);
      console.log("cart", cart);
      setProduct(data.products);
      console.log("Product", product);
    } 
    catch (error) {
      console.log(error);
    }      
  };


  
  console.log("cart1",cart)
  return (
    <div className="cartPage">
      <div className="header"><h1 className="text-center">Cart</h1></div>
      <div className="wholeCart">
        <div className="cartItems">
          {
            product.length>0?
            product.map((o)=>
              <div key={o.id} className="item">
                <div class="card text-center">
                  <div class="card-header">
                    {o.id}
                  </div>
                  <div class="card-body styleItem">
                    <div class="imageClass">
                      <p><img src={o.imageUrl} alt="Example1" width="193" height="130"/></p>
                    </div>
                    <div className="itemInfo">
                      <h5 class="card-title">{o.name}</h5>
                      <p class="card-text">{o.categoryId}</p>
                    </div>
                    
                    <div className="indeClass">
                      <a href="#" class="btn btn-primary">-1</a>
                      <a class="btn">{o.qty}</a>
                      <a href="#" class="btn btn-primary">+1</a>
                    </div>
                    
                  </div>
                  <div class="card-footer text-muted">
                    ₹. {o.price}
                  </div>
                </div>
              </div>
            ):<div>NO Items in cart</div>      
          }
        </div>
        <div className="cartInfo">
          <div className="ui cards cardClasss">
            <div className="card">
              <div className="content">
                <a className="header">Cart ID: {cart.cartId}</a>
                <div class="meta">
                  <span className="date">Amount: </span>
                </div>
                <div className="description">
                Shipping Address: {}
                <br/>
                Billing Address: {}
                <br/>
                Order Date: {}
                </div>
              </div>
              <div class="extra content">
                <h4>Checkout Amount : {cart.checkoutAmount} ₹</h4>
              </div>
              <div className="extra content">
                <div className="ui two buttons">
                  <a href="/Product" className="positive ui button"  color="primary">Add More Items</a>
                  {/* <Button onClick={()=>addP(o)} color="primary" >ADD</Button> */}

                  <div className="negative ui button" >Checkout</div>
                  {/* <Button color="danger" onClick={()=>deleteP(o)}>Delete</Button> */}
                </div>
              </div>
            </div>    
          </div>
        </div>
      </div>
      {/* <div className="cartBottom">
        <h1>vip</h1>
        
      </div> */}
    </div>
  )
}

export default Cart
