import React from 'react'
import './Item.css'

 const Item = (props) => {
  return (
    <div className='item'>
            <img className='product_image' src={props.image} alt=''/>
        <p>{props.name}</p>
        <div className='item-price-quantity'>
            <div className='item-price'>
                {props.new_price}
            </div>
            <div className='item-quantity'>
                {props.old_price}
            </div>
        </div>
    </div>
  )
}
export default Item