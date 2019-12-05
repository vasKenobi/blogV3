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
        <div className="blog-list clearfix">
                {
                    posts.map(({
                        id,
                        name,
                        description,
                        category,
                        initRating,
                        author,
                        urlLinkHead,
                        urlLink,
                        date,
                        image,
                    })=> (
                        <div key={id}>
                            <PostListItem
                                id={id}
                                name={name}
                                description={description}
                                category={category}
                                author={author}
                                initRating={initRating}
                                image={image}
                                addPostToFavourites={addPostToFavourites}
                                isLiked={postsLikeState[id]}
                                removeLike={removeLike}
                                addLike={addLike}
                                date={date}
                                urlLinkHead={urlLinkHead}
                                urlLink={urlLink}
                            />
                            <hr className="invis"/>
                        </div> 
                    ))
                }

            </div>
        
    )
}

export default PostList