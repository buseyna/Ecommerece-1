import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addCart, deleteCart, removeCart} from "../redux/actions/eActions";

const Cart = () => {
  
    const dispatch= useDispatch();
    const Add = (product) =>{
        dispatch(addCart(product)); }
    const Delete = (product) =>{
        dispatch(deleteCart(product));    } 
    const Remove = (product) => {
        dispatch(removeCart(product)); }
    const cart = useSelector((state)=> {
        return state.Cart});

    return ( 
        <div>{cart.length > 0 ? cart.map((Product) => {
                        return (<div >
                                < div>
      <img src={Product.image}
        alt={Product.title}/>
      <div>
        <p>{Product.title}</p>
        <p>{Product.description}</p>
        <p>$ {Product.price}</p>
      </div>
      </div>
         <p> Quantity: {Product.qty} </p>
             <button  onClick={() => Delete(Product)} className="btn btn-outline-dark "> - </button> 
             <button onClick={() => Add(Product)} className="btn btn-outline-dark me-4 "> + </button>
  <button onClick={() =>Remove (Product)} className="btn btn-outline-dark me-4 ">Remove Cart </button>
  </div>
                         ) }):<h1 >Cart is Empty</h1>
            }
        </div>
        );
}
export default Cart;