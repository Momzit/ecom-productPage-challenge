import React from 'react'
import './CartProduct.css'

function CartProduct({ image, id, price, title, count }) {
  return (
    <div className='cart__product'>
        <div className='item__image'>
            <img src= {image} alt='item avatar' />
        </div>

        <div className='item__description'>
            <p>{title}</p>
            <span>${price} x {count} <strong style={{ color: 'black' }}>${price*count}</strong></span>
        </div>
    </div>
  )
}

export default CartProduct