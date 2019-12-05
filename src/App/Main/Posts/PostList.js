import React from 'react'
import PostListItem from './PostListItem'
import posts from './posts'


const PostList = ({
    addPostToFavourites,
    postsLikeState,
    removeLike,
    addLike
}) => {
    return (
        <div>
            <h1 className="page-title">Posts List</h1>
            <div className="row">
                {
                    posts.map(({
                        id,
                        name,
                        description,
                        capacity,
                        price,
                        type,
                        image
                    })=> (
                        <div className="col-lg-6" key={id}>
                            <PostListItem
                                id={id}
                                name={name}
                                description={description}
                                capacity={capacity}
                                type={type}
                                price={price}
                                image={image}
                                addPostToFavourites={addPostToFavourites}
                                isLiked={postsLikeState[id]}
                                removeLike={removeLike}
								addLike={addLike}
                            />
                        </div> 
                    ))
                }

            </div>
        </div>
    )
}

export default PostList