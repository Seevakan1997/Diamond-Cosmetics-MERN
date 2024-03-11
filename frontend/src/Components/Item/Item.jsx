import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

 const Item = (props) => {
  return (
    <div className='item'>
            <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} className='product_image' src={props.image} alt=''/></Link>
        <p>{props.name} <span>({props.category})</span></p>
        <div className='item-price-quantity'>
            <div className='item-price'>
                Rs.{props.price}
            </div>
            
        </div>
    </div>
  )
}
export default Item