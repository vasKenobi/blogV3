 import React from 'react'

 const PostRating = ({
     onDecrementClick,
     onIncrementClick,
     postsRating,
     minCount
 }) => {
     return (
        <div className="input-group input-group-sm mb-3">
            <button className="btn-xs btnRate" 
                onClick={()=>onDecrementClick()}
                disabled={postsRating <= minCount}
            >-</button>
            <input className="text-center" type="text" value={postsRating} readOnly/>
            <button className="btn-xs btnRate" 
                onClick={()=>onIncrementClick()}
                disabled={postsRating >= 10}
            >+</button>
        </div>
     )
 }

 export default PostRating