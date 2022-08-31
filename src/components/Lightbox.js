import React, { useEffect, useState } from 'react'
import './Lightbox.css'

const Lightbox = ({ children, item, ind, Wrapper = 'div'}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const toggleIsOpen = (e) => {
    setIsOpen(!isOpen);
  };

  const nextImage = () => {
    if (index >= item.src.length - 1){
      setIndex(0);  
    } else {
      setIndex(index + 1);
    }
  }

  const prevImage = () => {
    if (index <= 0) {
      setIndex(item.src.length - 1);
    } else {
      setIndex(index - 1)
    }
  }

  useEffect(() => {
    setIndex(ind)
  },[ind,isOpen])

  return (
    <Wrapper onClick={toggleIsOpen}>
      {children}
      {isOpen ? 
        <div className='lightbox'>
          <div>
          <img 
                className='lightbox__image' 
                src={ item.src[index] }
                alt='lightbox__icon' 
            />
          </div>
          <div onClick={(e) => e.stopPropagation()}>
            {
              item.thumsrc.map((thumb, pos) => (
                  <img 
                      key={pos}
                      onClick={() => setIndex(pos)}
                      style={index === pos ? {opacity: 0.4, border: '2px solid hsl(26, 100%, 55%)'} : null} 
                      className='lightbox__scroll__image' 
                      src={ thumb }  
                      alt='scroll thumbnail' />
              ))
            }
          </div>
          
          <div className='lightbox__arrows' onClick={(e) => e.stopPropagation()}>
            <div className='left__arrow' onClick={prevImage}>
              <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/>
              </svg>
            </div>

            <div className='right__arrow' onClick={nextImage}>
              <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/>
              </svg>
            </div>
          </div>
          
          <div className='lightbox__close'>
            <svg width="14" height="18" className='close__button'>
              <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="white" fillRule="evenodd"/>
            </svg>
          </div>
        </div>
        : null
      }
    </Wrapper>
  )
}

export default Lightbox