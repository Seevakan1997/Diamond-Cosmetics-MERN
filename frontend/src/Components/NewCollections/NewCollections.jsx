import React, { useEffect, useState } from 'react'
import './NewCollections.css'
import Item from '../Item/Item'

 const NewCollections = () => {

    const [new_collections,setNew_Collections] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/newcollection').then((response)=>response.json()).then((data)=>setNew_Collections(data))
    },[])

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

    useEffect(() => {
        document.documentElement.style.setProperty('--items-count', visibleItems.length);
    }, [visibleItems]);

  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className='collections'>
            {visibleItems.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} category={item.category}/>
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