import React from 'react'
import PostRating from '../Rating/PostRating'


const FavouritesPostListItemExtended = ({
    post,
    postsRating,
    removePostFromFavourites,
    changePostRating,
    // name,
    // description,
    // category,
    // author,
    // initRating,
    // image,
    // urlLink,
    // date,
    // urlLinkHead,
    // addPostToFavourites,
    // id,
    isLiked,

}) => (
    <div className="blog-box row">
        <div className="col-md-9">
                <button className="btn btn-primary">
                        {isLiked ? <span>&#9829;</span> : <span>&#9825;</span>}
                </button>
            <div className="post-media">
                <img src={post.image} alt={post.name} className="img-fluid"/>
                <div className="hovereffect"></div>
            </div>
            <div>
                <p>
                    <h4 className="bg-aqua"> {post.name} </h4> 
                </p>
                <p title="1 means best article you've ever read. 10 means worst one ever.">
                        Initial marks: <span className="bold"> {post.initRating} </span> 
                </p>
                <p title="1 means best article you've ever read. 10 means worst one ever.">
                        Granted marks: <span className="bold"> {postsRating} </span> 
                        
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
                <p title="1 means best article you've ever read. 10 means worst one ever.">
                        Granted marks: <span> {(post.initRating * postsRating)} </span> 
                </p>
                <button className="btn btn-primary marginSmall" onClick={()=>removePostFromFavourites(post.id)}>Remove from Favourites</button>
                
            </div>
        </div>
    </div>
)

export default FavouritesPostListItemExtended

