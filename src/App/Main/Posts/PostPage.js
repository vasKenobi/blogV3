import React from 'react'
import posts, { getPostsMap } from './posts'

const PostPage = ({
    match,
    postsMap = getPostsMap(posts)
}) => {
    console.log(match)
    return (
        <div>
            <h1 className="page-title">{postsMap[match.params.postId].name} </h1>
        </div>
    )
}

export default PostPage