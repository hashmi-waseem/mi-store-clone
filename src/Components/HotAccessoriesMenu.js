import React from 'react'
import {Link} from 'react-router-dom'
import '../Styles/HotAccessoriesMenu.css'

const HotAccessoriesMenu = () => {
  return (
    <div className='menu'>
        <Link className="HotAccessoriesLink" to="/music">Music Store</Link>
        <Link className="HotAccessoriesLink" to="/music">Smart Devices</Link>
        <Link className="HotAccessoriesLink" to="/music">Home</Link>
        <Link className="HotAccessoriesLink" to="/music">Life Style</Link>
        <Link className="HotAccessoriesLink" to="/music">Mobile Accessories</Link>
    </div>
  )
}

export default HotAccessoriesMenu