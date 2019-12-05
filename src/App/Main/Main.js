import React from 'react'
import {Route} from 'react-router-dom'
import PostList from './Posts/PostList'
import FavourtiesPage from './FavourtiesPage/FavourtiesPage'
import MajorSL from './MajorSL/MajorSL'
import EnglishPL from './EnglishPL/EnglishPL'
import PostPage from './Posts/PostPage'
import GermanBL from './GermanBL/GermanBL'

const Main = ({
	addProductToCart,
	postsInFavourites,
	removeProductFromCart,
	changeProductQuantity,
	productsLikeState,
	removeLike,
	addLike,
}) => {
	return (
		<main className="main">
			<div className="container">
				<div className="row">
					<div className="col-lg-3">
						Filter
					</div>
					<div className="col-lg-9">
						<Route path="/" exact render={()=>(
							<PostList
								addProductToCart={addProductToCart}
								productsLikeState={productsLikeState}
								removeLike={removeLike}
								addLike={addLike}
						/>
						)}/>
						<Route path="/cart" render={()=>(
							<FavourtiesPage
								postsInFavourites={postsInFavourites}
								removeProductFromCart={removeProductFromCart}
								changeProductQuantity={changeProductQuantity}
								
						/>)}/>
						<Route path="/MajorSL" component={MajorSL}/>
						<Route path="/EnglishPL" component={EnglishPL}/>
						<Route path="/GermanBL" component={GermanBL}/>
						
						<Route path="/products/:productId" component={PostPage} />
					</div>
				</div>
			</div>
		</main>
	)
}

export default Main