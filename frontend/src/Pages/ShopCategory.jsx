import React, { useContext, useState,useEffect } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ITEMS_PER_PAGE = 12;

 const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = all_product.filter(item => props.category === item.category);
    setFilteredProducts(filtered);
    setCurrentPage(1); 
  }, [all_product, props.category]);

  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className='shop-category'>
        <img className='shopCategory-banner' src={props.banner} alt=''/>
      <div className='shopCategory-indexShot'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='shopCategory-sort'>
          Sort by <img src={dropdown_icon} alt=''/>
        </div>
      </div>
      <div className='shopCategory-products'>
        {visibleProducts.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} price={item.new_price} category={item.category}/>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
          <span>{currentPage} / {totalPages}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
      )}
    </div>
  )
}
export default ShopCategory