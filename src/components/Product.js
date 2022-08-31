import React, { useState } from 'react'
import Lightbox from './Lightbox';
import './Product.css'

function Product({ item }) {

    const [ index, setIndex ] = useState(0);

  return (
    <div className='home__left'>
        
        <div className='main__image'>
            <Lightbox item={item} ind={index}>
                <img 
                    className='thumbnail' 
                    src={ item.src[index] }
                    alt='thumbnail' 
                />
            </Lightbox>
        </div>
        

        <div className='small__images'>
            {
                item.thumsrc.map((thumb, pos) => (
                    <img 
                        key={pos}
                        onClick={() => setIndex(pos)}
                        style={index === pos ? {opacity: 0.5, border: '2px solid hsl(26, 100%, 55%)', zIndex: 200} : null} 
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