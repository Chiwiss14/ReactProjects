import React, {useState} from 'react';
//The onChange event handler is commonly used in React to handle user input for form elements such as text inputs, checkboxes, and select dropdowns. It listens for changes in the value of an input element and triggers a function in response.

function Onchange (){

    const [name, setName] = useState("Guest");
    const[quantity, setQuantity] = useState(1);
    const[comment, setComment] = useState("");
    const[payment, setPayment] = useState("");
    const[shipping, setShipping] = useState("");

    //const updateName = (e) => {
   //     setName(e.target.value);
  //  }

    function handleNameChange(e){
        setName(e.target.value);
    }

    function handleQuantityChange(e){
        setQuantity(e.target.value);
    }

    function handleCommentChange(e){
        setComment(e.target.value);
    }

    function handlePaymentChange(e){
        setPayment(e.target.value);
    }

    function handleShippingChange(e){
        setShipping(e.target.value);
    }

    return(
        <div>
            <input type={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input type={quantity} onChange={handleQuantityChange} type="number" />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} 
            placeholder='Enter delivery instruction'/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}> 
                <option value="">Select An option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Cash">Cash</option>
                <option value="Paypal">Paypal</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" name="shipping" value="Pick Up"
                            checked={shipping==="Pick Up"}                         
                     onChange={handleShippingChange}     />
                Pick Up
            </label> <br/>

            <label>
            <input type="radio" name="shipping" value="Delivery"
                            checked={shipping==="Delivery"}                         
                     onChange={handleShippingChange}    />
                Delivery
                <p>Shipping: {shipping}</p>
            </label>

        </div>
    );

}

export default Onchange;