import React from 'react'

const FavouritesPostListItem = ({
    postsRating,
    post
}) => {
    return (
        <div>{post.name} : {postsRating}</div>
    )
}

export default FavouritesPostListItem