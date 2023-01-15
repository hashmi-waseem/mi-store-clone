import React from 'react'
import '../Styles/StarProducts.css'

const StarProducts = ({StarProduct}) => {
  return (
    <div className='star'>
        <div> <a href={StarProduct[0].url}>  <img src={StarProduct[0].image} alt="1st Product"/> </a> </div>

        <div>
            <a href={StarProduct[1].url}>  <img src={StarProduct[1].image} alt="2nd Product"/> </a>
            <a href={StarProduct[2].url}>  <img src={StarProduct[2].image} alt="3rd Product"/> </a>
            <a href={StarProduct[3].url}>  <img src={StarProduct[3].image} alt="4th Product"/> </a>
        </div>
    </div>
  )
}

export default StarProducts
