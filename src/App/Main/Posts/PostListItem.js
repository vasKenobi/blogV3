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
            urlLink,
            date,
            urlLinkHead,
            addPostToFavourites,
            id,
            isLiked,
        } = this.props

        return (
            <div className="blog-box row">
                <div className="col-md-4">
                    <button className="btn btn-primary" onClick={()=>this.renderLike()}>
                        {isLiked ? <span>&#9829;</span> : <span>&#9825;</span>}
                    </button>
                    <div className="post-media">
                        <img src={image} alt="" className="img-fluid"/>
                        <div className="hovereffect"></div>
                    </div>
                    <div className="postShClass">
                    <PostRating
                        postsRating={this.state.postsRating}
                        onIncrementClick={this.onIncrementClick}
                        onDecrementClick={this.onDecrementClick}
                        minCount={1}
                    />
                    </div>

                </div>
                
                <div className="blog-meta big-meta col-md-8">
                    <div><Link to={urlLinkHead}><span className="bg-aqua">{category}</span></Link></div>
                    
                    <h4 className="bg-aqua">
                        <Link to={`/posts/${id}`}>{name}</Link>
                    </h4>
                    <div>{description}</div>
                    <small>{author}</small>
                    <small>{date}</small>
                    
                    <div className="marginSmall" title="1 means best article you've ever read. 10 means worst one ever."><h5>Evaluate article</h5></div>
                    
                    <button className="btn btn-primary marginSmall"
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
    date:PropTypes.string.isRequired,
    author:PropTypes.string.isRequired,
    initRating:PropTypes.number.isRequired,
}


export default PostListItem

