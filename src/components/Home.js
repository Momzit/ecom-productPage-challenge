import React from 'react'
import './Home.css'
import { data } from '../data/Images'
import Details from './Details'
import Product from './Product'

function Home() {

    const { products } = data

  return (
    <div className='home__container'>
        <div>
            <hr></hr>
        </div>
        {
            products.map((item, index) => (
            <div className='home' key={item.id+2}>

                <Product item={item} key={item.id}/>

                <Details
                    key={index} 
                    product={item}
                />
            </div>
            ))
        }
    </div>
  )
}

export default Home