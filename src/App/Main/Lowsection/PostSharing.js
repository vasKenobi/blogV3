import React from 'react'
import {Link} from 'react-router-dom'

const PostSharing = () => {
    return (
                            <div class="post-sharing">
                                    <ul class="list-inline">
                                        <li><Link class="fb-button btn btn-primary btnSocial" to="/"><i class="fa fa-facebook btnSocial"></i> <span class="down-mobile btnSocial">Share on Facebook</span></Link></li>
                                        <li><Link class="tw-button btn btn-primary btnSocial" to="/"><i class="fa fa-twitter btnSocial"></i> <span class="down-mobile btnSocial">Tweet on Twitter</span></Link></li>
                                    </ul>
                                </div>
    )
}
export default PostSharing
