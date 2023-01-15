import React from 'react'
import HotItemCard from './HotItemCard'
import '../Styles/HotAccessories.css'

const HotAccessories = ({cover,normal}) => {
  return (
    <div className='hot'>
        <div className='cover'>
            <img src={cover} alt="cover"/>
        </div>
        <div>
            {normal.map((item,index)=>(
                <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
            ))}
            <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg"/>
        </div>
    </div>
  )
}

export default HotAccessories