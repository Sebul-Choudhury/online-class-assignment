import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClipboardCheck} from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for (let i=0; i< cart.length; i++)
    {
    const product = cart[i];
    total = total + product.price;
    }
   const totalPrice = (total).toFixed(2);
    function checkout() {
        alert("Checkout Success!")
    }

   
    return (
        <div className = "cart">
            <h4>Course Summary</h4>
            <p>Items Ordered : {cart.length} </p>
            <p> Total Course Price: ${totalPrice}</p>
            <Button onClick = {checkout}><FontAwesomeIcon icon={faClipboardCheck} />Checkout</Button>
            
            
      

        </div>
    );
      
      
};

export default Cart;


