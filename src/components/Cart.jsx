import React from 'react'
import '../styles/cart.scss'
import '../styles/mediaquery.scss'
import {AiFillDelete} from 'react-icons/ai';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';


const Cart = () => {

  const {cartItems}=useSelector((state)=>state.cart)
  const dispatch = useDispatch();

//   const dispatch = useDispatch();

//   const addToCartHandler = (id) => {
//     dispatch({ type: 'cart/addToCart', payload: id });
// };

  const increment = (id) => {
    dispatch({ type: 'cart/incrementQuantity', payload: {id} });
  };

  const decrement = (id) => { 
    dispatch({type:'cart/decrementQuantity',payload:{id}});
  }

  const deleteHandler=(id) =>{
    dispatch({ type: 'cart/deleteQuatity', payload: {id} });
  }

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = cartItems.length > 0 ? 20*(cartItems.length) : 0;
  const tax = subtotal * 0.01;
  const total = subtotal + shipping + tax;
  return (
    <div className='cart'>
      <main>

        {
          cartItems.length>0 ? (
            cartItems.map((i)=>(
              <CartItem
                imgSrc={i.imgSrc}
                name={i.name}
                price={i.price}
                qty={i.quantity}
                id={i.id}
                key={i.id}
                increment={increment}  /* Pass increment as prop */
                decrement={decrement} 
                deleteHandler={deleteHandler}
              />

            ))
          ): (
            <h1>No items in the cart.</h1>
          )
        }
        
        
      </main>
      <aside>
        <h2>Subtotal: ₹{subtotal.toFixed(2)}</h2>
        <h2>Shiping:₹{shipping.toFixed(2)}</h2>
        <h2>Tax:₹{tax.toFixed(2)}</h2>
        <h2>Total:₹{total.toFixed(2)}</h2>
      </aside>
    </div>
  )
}

const CartItem=({imgSrc,name,price,qty,decrement,increment,deleteHandler,id})=>(
  <div className='cartItem'>
    <img src={imgSrc} alt='Item'/>
    <article>
      <h3>
        {name}
      </h3>
      <p>${price}</p>
    </article>

    <div>
      <button onClick={()=>decrement(id)}>-</button>
      <p>{qty}</p>
      <button onClick={()=>increment(id)}>+</button>
    </div>

    <AiFillDelete onClick={()=>deleteHandler(id)}/>
  </div>
)

export default Cart