import React from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'
import { useState } from 'react'

const AddProduct = () => {
    const [image,setImage] = useState(false);
    const [productDetails,setProductDetails] = useState({
        name:"",
        image:"",
        category:"face",
        price:"",
        description:"",
        directions:"",

    }) 

    const imageHandler = (e)=>{
        setImage(e.target.files[0]);
    }
    
    const changeHandler = (e)=>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }

    const Add_Product = async ()=>{
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product',image);

        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        }).then((resp)=>resp.json()).then((data)=>{responseData=data});

        if(responseData.success){
            product.image = responseData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/addproduct',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(product),
            }).then((resp)=>resp.json()).then((data)=>{
                data.success?alert("Product Added"):alert("Failed")
            }); 
        }
    }

  return (
    <div className='add-product'>
      <div className='addproduct-itemfield'>
        <p>Product Title</p>
        <input value={productDetails.name} onChange={changeHandler} type='text' name='name' placeholder='Type here'/>
      </div>
      <div className='addproduct-price'>
        <div className='addproduct-itemfield'>
            <p>Price</p>
            <input value={productDetails.price} onChange={changeHandler} type='text' name='price' placeholder='Type here'/>
        </div>
      </div>
      <div className='addproduct-itemfield'>
        <p>Category</p>
        <select value={productDetails.category} onChange={changeHandler} name='category' className='addproduct-selector'>
            <option value="face">Face</option>
            <option value="lips">Lips</option>
            <option value="body">Body</option>
            <option value="hair">Hair</option>

        </select>
      </div>
      <div className='addproduct-itemfield'>
        <p>Description</p>
        <input value={productDetails.description} onChange={changeHandler} type='text' name='description' placeholder='Type here'/>
      </div>
      <div className='addproduct-itemfield'>
        <p>How To Use</p>
        <input value={productDetails.directions} onChange={changeHandler} type='text' name='directions' placeholder='Type here'/>
      </div>
      <div className='addproduct-itemfield'>
        <label htmlFor='file-input'>
            <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-thumnail-img' alt=''/>
        </label>
        <input type='file' onChange={imageHandler} name='image' id='file-input' hidden/>
      </div>
      <button onClick={()=>{Add_Product()}} className='addproduct-btn'>ADD</button>
    </div>
  )
}

export default AddProduct