import React, { useState } from 'react'
import './Header.css'
import logo from '../images/logo.svg'
import cartSvg from '../images/icon-cart.svg'
import profile from '../images/image-avatar.png'
import Cart from './Cart'
import { useStateValue } from '../contextReducer/StateProvider'

function Header() {
  const [toggle, setToggle] = useState(false);

  const [{ basket },] = useStateValue();

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
            <div className='number__count'>{ basket?.length}</div>
          </div>

          <img onClick={showCart} className='profile__logo' src={ profile } alt='profile logo' />
        </div>

        <div className={toggle ? 'show__cart' : 'hide__cart'}>
          <Cart />
        </div>
    </div>
  )
}

export default Header