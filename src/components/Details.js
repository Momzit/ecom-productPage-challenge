import React, { useState } from 'react'
import { useStateValue } from '../contextReducer/StateProvider';

function Details({ product }) {

    const [, dispatch] = useStateValue();
    const [increament, setIncreament] = useState(0);

    const addToCart = () => {
        if (increament > 0) {
            dispatch({
                type: 'ADD_TO_BASKET',
                id: product.id,
                item: product,
                qnty: increament,
            })
        }
        setIncreament(0)
    }
    
    const quantityDecrease = () => {
        if (increament > 0) {
            setIncreament((prevState) => prevState - 1)
        }
    }

    const quantityIncrease = (id) => {
        setIncreament((prevState) => prevState + 1)
    }
  return (
    <div className='home__right'>
        <h3>SNEAKER COMPANY</h3>

        <div className='header__title'>
            <h1>Fall Limited Edition</h1>
            <h1>Sneakers</h1>
        </div>

        <div className='paragraph'>
            <p>These low-profile sneakers are your perfect casual wear</p>
            <p>companion. Featuring a durable rubber outer sole, they'll</p>
            <p>withstand everything the weather can offer.</p>
        </div>

        <div className='price'>
            <div className='discount'>
                <h1>${product.price}</h1>
                <h2>50%</h2>
            </div>
            <h3>$125.00</h3>
        </div>

        <div className='cart__button'>
            <button onClick={quantityDecrease} className='plus__minus'><h1>-</h1></button>
            <h3>{increament}</h3>
            <button onClick={quantityIncrease} className='plus__minus'><h2>+</h2></button>
            <button onClick={addToCart} className='add__to__cart'>
                <svg className='svg__icon'>
                    <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"/>
                </svg>
                Add to cart
            </button>
        </div>
    </div>
  )
}

export default Details