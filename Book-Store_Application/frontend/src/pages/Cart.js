import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    alert(`Checkout Successful! Total: ₹${totalPrice}`);
    clearCart();
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item._id} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
              <h4>{item.title}</h4>
              <p>₹{item.price}</p>
              <button onClick={() => removeFromCart(item._id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ₹{totalPrice}</h3>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
