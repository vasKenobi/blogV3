import React from 'react'
import './FavouritesPostListItemExtended.css'
import PostRating from '../Rating/PostRating'


const FavouritesPostListItemExtended = ({
    product,
    postsRating,
    removePostFromFavourites,
    changePostRating
}) => (
    <div className="cart-product-list-item-description">
        <div className="row">
            <div className="col-lg-3">
                <img src={product.image} alt={product.name}/>
            </div>
            <div className="col-lg-9">
                <p className="cart-extended-name">
                    <span> {product.name} </span> 
                </p>
                <p className="cart-extended-price">
                        initRating for one item: <span className="bold">$ {product.initRating} </span> 
                </p>
                <p className="cart-extended-count">
                        Selected quantity: <span className="bold"> {postsRating} </span> 
                        
                </p>
                <PostRating
                    postsRating={postsRating}
                    onDecrementClick={()=>{
                        if(postsRating===1) {
                            removePostFromFavourites(product.id)
                        } else {
                            changePostRating(product.id,postsRating-1)
                        }
                    }}
                    onIncrementClick={()=>changePostRating(product.id,postsRating+1)}
                    minCount={0}
                />
                <p className="cart-extended-sum">
                        Sum for this item: <span className="bold sum-price">$ {(product.initRating * postsRating)} </span> 
                </p>
                <button onClick={()=>removePostFromFavourites(product.id)}>Remove from Favourites</button>
                
            </div>
        </div>
    </div>
)

export default FavouritesPostListItemExtended

