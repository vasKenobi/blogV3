import React from 'react'
import {Route} from 'react-router-dom'
import ProductsList from './Posts/ProductsList'
import FavourtiesPage from './FavourtiesPage/FavourtiesPage'
import ShippingPage from './ShippingPage/ShippingPage'
import EnglishPL from './EnglishPL/EnglishPL'
import ProductPage from './Posts/ProductPage'

const Main = ({
	addProductToCart,
	productsInCart,
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
							<ProductsList
								addProductToCart={addProductToCart}
								productsLikeState={productsLikeState}
								removeLike={removeLike}
								addLike={addLike}
						/>
						)}/>
						<Route path="/cart" render={()=>(
							<FavourtiesPage
								productsInCart={productsInCart}
								removeProductFromCart={removeProductFromCart}
								changeProductQuantity={changeProductQuantity}
								
						/>)}/>
						<Route path="/shipping" component={ShippingPage}/>
						<Route path="/EnglishPL" component={EnglishPL}/>
						<Route path="/products/:productId" component={ProductPage} />
					</div>
				</div>
			</div>
		</main>
	)
}

export default Main