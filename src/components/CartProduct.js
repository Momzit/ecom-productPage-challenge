import React from 'react'
import './CartProduct.css'

function CartProduct({ title, image, price, count }) {
  return (
    <div className='cart__product'>
        <div className='item__image'>
            <img src= {image[0]} alt='Avatar' />
        </div>

        <div className='item__description'>
            <p>{title}</p>
            <span>${price} x {count} <strong style={{ color: 'black' }}>${price*count}</strong></span>
        </div>
    </div>
  )
}

export default CartProduct