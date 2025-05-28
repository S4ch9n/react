//onChange = event handler use primarily with form element
// ex . <input> , <textarea> , <sekect>, <radio>
// Triggers a function every time the value of the input change
import { func } from "prop-types";
import React, {useState} from "react";

function MyComponent(){
  const [name , setName] = useState("User");

  const [quantity , setQuantity] = useState(0);

  const [comment,setComment] = useState("");

  const [payment , setPayment] = useState("");

  const [shipping,setShipping] = useState("");



  function hanldeNameChange(e){
    setName(e.target.value)
  }

  function handleQuantityChange(e){
    setQuantity(e.target.value)
  }

  function hanldeCommentChange(e){
    setComment(e.target.value)
  }
  function handlePaymentChange(e){
    setPayment(e.target.value)
  }
  function handleShippingChange(e){
    setShipping(e.target.value)
  }
  return(
    <div>
      <input value={name}  onChange={hanldeNameChange}/>
      <p>Name : {name}</p>
      <br/>
      <input value={quantity} onChange={handleQuantityChange} type="number"/>
      <p>Quantity : {quantity} </p>
      <br/>
      <textarea value={comment} onChange={hanldeCommentChange}placeholder="Enter instruction"/>
      <p>Comment : {comment}</p>
      <br/>
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="giftrcard">Giftcard</option>
      </select>
      <p>Payment : {payment}</p>
      <br/>

      <label>
        <input type="radio" value="Pick up"checked={shipping == "Pick up"} onChange={handleShippingChange} />Pick up
      </label>
      <br/>
      <label>
      <input type="radio" value="Delivery"checked={shipping == "Delivery"} onChange={handleShippingChange} />Delivery
      </label>
      <p>Shipping : {shipping}</p>
    </div>
  );
}
export default MyComponent