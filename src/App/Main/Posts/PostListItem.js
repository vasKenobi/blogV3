import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import PostRating from '../../../Components/Rating/PostRating';



class PostListItem extends Component {
    state = {
        postsRating:1,
    }
    
    onIncrementClick = () => {
        this.setState((prevState)=>({
            postsRating:prevState.postsRating + 1
        }))
    }

    onDecrementClick = () => {
        this.setState((prevState)=>({
            postsRating:prevState.postsRating - 1
        }))
    }
    renderLike = () => {
        const  {
            isLiked,
            id,
            removeLike,
            addLike,
        } = this.props
        if(isLiked) {
            removeLike(id)
        } else {
            addLike(id)
        }
    }


    render() {
        const {
            name,
            description,
            category,
            author,
            initRating,
            image,
            addPostToFavourites,
            id,
            isLiked,
        } = this.props

        return (
            <div className="blog-box row">
                <div className="col-md-4">
                    <div className="post-media">
                        <img src={image} alt="" className="img-fluid"/>
                        <div className="hovereffect"></div>
                    </div>
                </div>
                
                <div className="blog-meta big-meta col-md-8">
                    <button class="btn btn-primary" onClick={()=>this.renderLike()}>
                        {isLiked ? <span>&#9829;</span> : <span>&#9825;</span>}
                    </button>
                    <h4 className="bg-aqua">
                        <Link to={`/posts/${id}`}>{name}</Link>
                    </h4>
                    <div>{description}</div>
                    <div>{author}</div>
                    <div className="bg-aqua">{category}</div>
                    <div>Initial Rating : {initRating}</div>
                    <PostRating
                        postsRating={this.state.postsRating}
                        onIncrementClick={this.onIncrementClick}
                        onDecrementClick={this.onDecrementClick}
                        minCount={1}
                    />
                    <button class="btn btn-primary"
                        onClick={()=>addPostToFavourites(id,this.state.postsRating)}
                        >Add to Favourites
                    </button>
                </div>
            </div>
        )
    }
}


PostListItem.propTypes = {
    image:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    category:PropTypes.string.isRequired,
    author:PropTypes.string.isRequired,
    initRating:PropTypes.number.isRequired,
}


export default PostListItem

