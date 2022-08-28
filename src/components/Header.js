import React, { useState } from 'react'
import './Header.css'
import logo from '../images/logo.svg'
import cartSvg from '../images/icon-cart.svg'
import profile from '../images/image-avatar.png'
import Cart from './Cart'
import { useStateValue } from '../contextReducer/StateProvider'
import { data } from '../data/Images'

function Header() {
  const [toggle, setToggle] = useState(false);

  const [{ basket },] = useStateValue();

  const totalCount = () => {
    let tot = 0;
    for (const product of basket) {
      tot += product.count;
    }
    return tot
  }

  const { products } = data;

  const showCart = () => {
    setToggle(!toggle)
  }

  return (
    <div className='header'>
        <div className='header__left'>
            <img className='sneaker__logo' src={ logo } alt='sneakers logo' />

            <div className='links'>
                <div className='link'>
                  Collections
                  <div className='line__hover'></div>
                </div>

                <div className='link'>
                  Men
                  <div className='line__hover'></div>
                </div>

                <div className='link'>
                  Women
                  <div className='line__hover'></div>
                </div>

                <div className='link'>
                  About
                  <div className='line__hover'></div>
                </div>

                <div className='link'>
                  Contact
                  <div className='line__hover'></div>
                </div>
            </div>
        </div>

        <div className='header__right'>
          <div className='cart__info' onClick={showCart}>
            <img className='cart__logo' src={ cartSvg } alt='cart logo' />
            <div className='number__count'>{ basket?.length === 0 ? 0 : totalCount()}</div>
          </div>

          <img className='profile__logo' src={ profile } alt='profile logo' />
        </div>

        <div className={toggle ? 'show__cart' : 'hide__cart'}>
          {
            products.map((item, index) =>(
              <Cart item={item} key={index}/>
            ))
          }
        </div>
    </div>
  )
}

export default Header