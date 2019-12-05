 import React from 'react'

 const ProductQuantity = ({
     onDecrementClick,
     onIncrementClick,
     postsRating,
     minCount
 }) => {
     return (
        <div className="product-quantity">
            <button 
                onClick={()=>onDecrementClick()}
                disabled={postsRating <= minCount}
            >-</button>
            <input type="text" value={postsRating} readOnly/>
            <button 
                onClick={()=>onIncrementClick()}
                disabled={postsRating >= 10}
            >+</button>
        </div>
     )
 }

 export default ProductQuantity