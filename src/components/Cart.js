import React from 'react'
import './Cart.css'
import { useStateValue } from '../contextReducer/StateProvider';
import CartProduct from './CartProduct';

function Cart() {

    const [{ basket }, dispatch] = useStateValue();

    const removeItem = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: 1,
        })
    }

  return (
    <div className='cart'>
        {basket?.length === 0 ? (
            <>
                <div className='cart__title'>
                    <h2>Cart</h2>
                </div>
                <hr></hr>
                <div className='cart__body'>
                    <h2>Your cart is empty.</h2>
                </div>
            </>
        ) : (
            <>
                <div className='cart__title'>
                    <h2>Cart</h2>
                </div>
                <hr></hr>
                <div className='filled__cart__body'>
                    <div className='row1'>
                        {
                            basket?.map(item => (
                                <CartProduct 
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    count={item.count}
                                />
                            ))
                        }

                        <div onClick={removeItem} className='delete__icon'>
                            <svg width="14" height="16" className='delete__icon'> 
                            <path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" /> 
                            </svg>
                        </div>
                    </div>

                    <div className='row2'>
                        <button className='checkout__button'>Checkout</button>
                    </div>
                </div>
            </>
        )}
    </div>
  )
}

export default Cart