import React from 'react'

const Cart = (props) => {
  const { cartItems, addItem, removeItem } = props
  const itemPrice = cartItems?.reduce((pv, cv) => pv + cv.qty * cv.price, 0)
  const taxPrice = itemPrice * 0.05;
  const shippingPrice = itemPrice > 2000 ? 0 : 20;
  const totalPrice = itemPrice + taxPrice + shippingPrice;

  return (
    <aside>
      <h2>Cart Items</h2>
      <div>
        {(!cartItems || cartItems.length === 0) && <div>Cart is empty.</div>}

        {/* if cart has item */}
        {cartItems?.map(item => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => removeItem(item)} className='remove'>
                -
              </button>
              <button onClick={() => addItem(item)} className='add'>
                +
              </button>
            </div>
            <div className="col-2 text-right">
              {item.qty} x ${item.price}
            </div>
          </div>
        ))}

        {/* if item in cart */}
        {cartItems?.length !== 0 && (
          <>
            <hr />
            <div className="row">
              <div className="col-2">Item Price</div>
              <div className="col-1 text-right">${itemPrice}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">${shippingPrice}</div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice}</strong>
              </div>
            </div>

            <hr />

            <div className="row">
              <button onClick={() => alert('Implement Checkout Later!')}>Checkout</button>
            </div>
            
          </>
        )}
      </div>

    </aside>
  )
}

export default Cart
