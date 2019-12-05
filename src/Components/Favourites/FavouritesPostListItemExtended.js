import React from 'react'
import './FavouritesPostListItemExtended.css'
import PostRating from '../Rating/PostRating'


const FavouritesPostListItemExtended = ({
    product,
    productsCount,
    removePostFromFavourites,
    changeProductQuantity
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
                        Price for one item: <span className="bold">$ {product.price} </span> 
                </p>
                <p className="cart-extended-count">
                        Selected quantity: <span className="bold"> {productsCount} </span> 
                        
                </p>
                <PostRating
                    productsCount={productsCount}
                    onDecrementClick={()=>{
                        if(productsCount===1) {
                            removePostFromFavourites(product.id)
                        } else {
                            changeProductQuantity(product.id,productsCount-1)
                        }
                    }}
                    onIncrementClick={()=>changeProductQuantity(product.id,productsCount+1)}
                    minCount={0}
                />
                <p className="cart-extended-sum">
                        Sum for this item: <span className="bold sum-price">$ {(product.price * productsCount)} </span> 
                </p>
                <button onClick={()=>removePostFromFavourites(product.id)}>Delete Product</button>
                
            </div>
        </div>
    </div>
)

export default FavouritesPostListItemExtended

