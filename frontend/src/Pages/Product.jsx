import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import {useParams} from 'react-router-dom'
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDetails from '../Components/ProductDetails/ProductDetails';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

 const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId))


  return (
    <div className=''>
      <Breadcrum product={product}/>
      <ProductDetails product={product}/>
      <RelatedProducts/>
    </div>
  )
}
export default Product