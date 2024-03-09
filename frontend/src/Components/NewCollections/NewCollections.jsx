import React, { useState } from 'react'
import './NewCollections.css'
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'

 const NewCollections = () => {
    const ITEMS_PER_PAGE = 8;
    const [currentPage, setCurrentPage] = useState(1);

    const totalItems = new_collections.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const visibleItems = new_collections.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className='collections'>
            {visibleItems.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.new_price} category={item.category}/>
            })}
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
export default NewCollections