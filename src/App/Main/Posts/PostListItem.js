import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import './PostListItem.css'
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
            <div className="product-list-item">
                <div className="product-image">
                    <img src={image} alt=""/>
                </div>
                <button onClick={()=>this.renderLike()}>
                    {isLiked ? <span>&#9829;</span> : <span>&#9825;</span>}
                </button>
                <div className="product-title">
                    <Link to={`/posts/${id}`}>{name}</Link>
                </div>
                <div className="product-description">{description}</div>
                <div className="product-features">author: {author}</div>
                <div className="product-features">category: {category} Gb</div>
                <div className="product-initRating">initRating : {initRating} $</div>
                <PostRating
                    postsRating={this.state.postsRating}
                    onIncrementClick={this.onIncrementClick}
                    onDecrementClick={this.onDecrementClick}
                    minCount={1}
                />
                <button 
                    className="btn btn-add-to-cart"
                    onClick={()=>addPostToFavourites(id,this.state.postsRating)}
                    >Add to Favourites</button>
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

