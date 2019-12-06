import React from 'react'
import {Link} from 'react-router-dom'
import posts, { getPostsMap } from './posts'
import PostSharing from '../Lowsection/PostSharing'
import Banner from '../Lowsection/Banner'
import AboutAuthor from '../Lowsection/AboutAuthor'
import YouMayAlsoLike from '../Lowsection/YouMayAlsoLike'
import Comments from '../Lowsection/Comments'
import LeaveReply from '../Lowsection/LeaveReply'

const PostPage = ({
    match,
    postsMap = getPostsMap(posts)
}) => {
    console.log(match)
    return (
        <div>
            <section class="section wb">
                <div class="container">
                <div class="row">
                    <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div class="page-wrapper">
                            <div class="blog-title-area">
                                <span class="color-green"><Link title="" to={postsMap[match.params.postId].urlLinkHead}>{postsMap[match.params.postId].category}</Link></span>
                
                                <h3>{postsMap[match.params.postId].name} </h3>

                                <div class="blog-meta big-meta">
                                <small><Link title="" to="/">{postsMap[match.params.postId].date}</Link></small>
                                <small><Link title="" to="/">{postsMap[match.params.postId].author}</Link></small>
                                    
                                </div>
                                    <PostSharing/>
                                </div>

                                <div class="single-post-media">
                                                <img src={postsMap[match.params.postId].imageHead} alt="" class="img-fluid"/>
                                </div>

                                <div class="blog-content">
                                    <p>{postsMap[match.params.postId].description}</p>
                                    <p>{postsMap[match.params.postId].description2}</p>
                                    <p>{postsMap[match.params.postId].description3}</p>
                                </div>
                                <div class="blog-title-area">
                                    <PostSharing/>
                                </div>
                                <Banner/>
                                <hr class="invis1"/>

                                <AboutAuthor/>

                                <hr class="invis1"/>

                                <YouMayAlsoLike/>

                                <hr class="invis1"/>

                                <Comments/>

                                <hr class="invis1"/>

                                <LeaveReply/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default PostPage