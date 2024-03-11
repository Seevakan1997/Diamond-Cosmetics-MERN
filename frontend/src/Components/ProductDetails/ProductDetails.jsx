import React, { useContext } from 'react'
import './ProductDetails.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

 const ProductDetails = (props) => {
    const {product} = props;
    const {addToCart}= useContext(ShopContext);

    if (!product) {
        return <div>Loading...</div>;
    }

  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='productdisplay-img'>
                <img className='productdisplay-main-img' src={product.image} alt=''/>
            </div>
        </div>
        <div className='productdisplay-right'>
            <h1>{product.name}</h1><p className='productdisplay-category'><span>({product.category})</span></p>
            <div className='productdisplay-right-stars'>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_dull_icon} alt=''/>
                <p>(122)</p>
            </div>
            
            <div className='productdisplay-right-details'>
                <div className='productdisplay-price'>Rs.{product.price}</div>
            </div>
            <div className='productdisplay-description'>
            {product.description}
            </div>
            <h2>How To Use:</h2>
            <div className='productdisplay-usage'>
            {product.directions}
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            
        </div>
    </div>
  )
}
export default ProductDetails