import React from 'react'
import {Route} from 'react-router-dom'
import PostList from './Posts/PostList'
import FavourtiesPage from './FavourtiesPage/FavourtiesPage'
import MajorSL from './MajorSL/MajorSL'
import EnglishPL from './EnglishPL/EnglishPL'
import PostPage from './Posts/PostPage'
import GermanBL from './GermanBL/GermanBL'

const Main = ({
	addPostToFavourites,
	postsInFavourites,
	removePostFromFavourites,
	changePostRating,
	postsLikeState,
	removeLike,
	addLike,
}) => {
	return (
		<main className="main">
			<div className="container">
				<div className="row">
					<div className="col-lg-3">
						
					</div>
					<div className="col-lg-9">
						<Route path="/" exact render={()=>(
							<PostList
								addPostToFavourites={addPostToFavourites}
								postsLikeState={postsLikeState}
								removeLike={removeLike}
								addLike={addLike}
						/>
						)}/>
						<Route path="/cart" render={()=>(
							<FavourtiesPage
								postsInFavourites={postsInFavourites}
								removePostFromFavourites={removePostFromFavourites}
								changePostRating={changePostRating}
								
						/>)}/>
						<Route path="/MajorSL" component={MajorSL}/>
						<Route path="/EnglishPL" component={EnglishPL}/>
						<Route path="/GermanBL" component={GermanBL}/>
						
						<Route path="/posts/:postId" component={PostPage} />
					</div>
				</div>
			</div>
		</main>
	)
}

export default Main