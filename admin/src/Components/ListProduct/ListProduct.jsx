import React from 'react'
import './ListProduct.css'
import { useState } from 'react'
import { useEffect } from 'react';
import cross_icon from '../../assets/cross-icon.png'
import edit_icon from '../../assets/edit-icon.png'

const ListProduct = () => {

    const [allproducts,setAllProducts] = useState([]);

    const fetchInfo = async()=>{
        await fetch('http://localhost:4000/allproducts')
        .then((res)=>res.json())
        .then((data)=>{setAllProducts(data)});
    }
    
    useEffect(()=>{
        fetchInfo();
    },[])

    const remove_product = async (id)=>{
        await fetch('http://localhost:4000/removeproduct',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({id:id}),
        })
        await fetchInfo();
    }

    

  return (
    <div className='list-product'>
      <h1>All products List</h1>
      <div className='listproduct-format-main'>
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Category</p>
        {/* <p>Description</p>
        <p>Direction</p> */}
        <p>Edit</p>
        <p>Remove</p>
      </div>
      <div className='listproduct-allproducts'>
        <hr/>
        {allproducts.map((product,index)=>{
            return <><div key={index} className='listproduct-format-main listproduct-format'>
                <img className='listproduct-product-icon' src={product.image} alt=''/>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.category}</p>
                {/* <p>{product.description}</p>
                <p>{product.directions}</p> */}
                <img src={edit_icon} alt='' className='listproduct-edit-icon'/>
                <img onClick={()=>{remove_product(product.id)}} src={cross_icon} alt='' className='listproduct-remove-icon'/>
            </div>
            <hr/>
            </>
        })}
      </div>

    </div>
  )
}

export default ListProduct
