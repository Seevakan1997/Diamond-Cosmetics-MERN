import React, { useEffect, useState } from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

 const RelatedProducts = () => {
  const [relatedproducts,setRelatedProducts] = useState([]);

    useEffect(()=>{
      fetch('http://localhost:4000/relatedproducts').then((response)=>response.json()).then((data)=>setRelatedProducts(data));

    },[])
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr/>
        <div className='relatedproducts-item'>
            {relatedproducts.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} category={item.category}/>
            })}
        </div>
    </div>
  )
}
export default RelatedProducts