import React from 'react'
import './FavouritesPostListItemExtended.css'
import PostRating from '../Rating/PostRating'


const FavouritesPostListItemExtended = ({
    post,
    postsRating,
    removePostFromFavourites,
    changePostRating
}) => (
    <div className="cart-product-list-item-description">
        <div className="row">
            <div className="col-lg-3">
                <img src={post.image} alt={post.name}/>
            </div>
            <div className="col-lg-9">
                <p className="cart-extended-name">
                    <span> {post.name} </span> 
                </p>
                <p className="cart-extended-price">
                        initRating for one item: <span className="bold">$ {post.initRating} </span> 
                </p>
                <p className="cart-extended-count">
                        Selected quantity: <span className="bold"> {postsRating} </span> 
                        
                </p>
                <PostRating
                    postsRating={postsRating}
                    onDecrementClick={()=>{
                        if(postsRating===1) {
                            removePostFromFavourites(post.id)
                        } else {
                            changePostRating(post.id,postsRating-1)
                        }
                    }}
                    onIncrementClick={()=>changePostRating(post.id,postsRating+1)}
                    minCount={0}
                />
                <p className="cart-extended-sum">
                        Sum for this item: <span className="bold sum-price">$ {(post.initRating * postsRating)} </span> 
                </p>
                <button onClick={()=>removePostFromFavourites(post.id)}>Remove from Favourites</button>
                
            </div>
        </div>
    </div>
)

export default FavouritesPostListItemExtended

