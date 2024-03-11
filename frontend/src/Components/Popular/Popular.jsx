import React, { useEffect, useState } from 'react'
import './Popular.css'
import Item from '../Item/Item'

 const Popular = () => {

    const [popularproducts,setPopularProducts] = useState([]);

    useEffect(()=>{
      fetch('http://localhost:4000/popularitems').then((response)=>response.json()).then((data)=>setPopularProducts(data));

    },[])

  return (
    <div className='popular'>
        <h1>POPULAR ITEMS</h1>
        <hr/>
        <div className='popular-item'>
            {popularproducts.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} category={item.category}/>
            })}
        </div>
    </div>
  )
}
export default Popular