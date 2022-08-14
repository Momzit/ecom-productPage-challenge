import React, { useState } from 'react'
import './Product.css'

function Product({ item }) {

    const [ index, setIndex ] = useState(0);

  return (
    <div className='home__left'>
        <div className='main__image'>
            <img 
                className='thumbnail' 
                src={ item.src[index] }
                alt='thumbnail' 
            />
        </div>

        <div className='small__images'>
            {
                item.thumsrc.map((thumb, pos) => (
                    <img 
                        onClick={() => setIndex(pos)}
                        style={index === pos ? {opacity: 0.5, border: '2px solid hsl(26, 100%, 55%)'} : null} 
                        className='scroll__image' 
                        src={ thumb }  
                        alt='scroll image1' />
                ))
            }
        </div>
    </div>
  )
}

export default Product