import React from 'react'
import '../Styles/HotItemCard.css'
const HotItemCard = ({name,price,image,index}) => {
  return (
    <div className='HotItemCard'>
        <img src={image} alt= { `${index} item` }/>
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default HotItemCard