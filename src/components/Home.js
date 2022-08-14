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
            products.map((item) => (
            <div className='home'>

                <Product item={item} key={item.id}/>

                <Details
                    key={item.id} 
                    product={item}
                />
            </div>
            ))
        }
    </div>
  )
}

export default Home