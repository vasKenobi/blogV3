import React,{Component} from 'react'
import {omit} from 'lodash'
import '../common/style/reset.css'
import '../common/style/base.css'


import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

class App extends Component {

	state = {
		postsInFavourites: {
			'1':5,
			'2':10
		},
		productsLikeState: {
			'1':true,
			'2':true,
		}
		
	}

	addProductToCart = (productId,count) =>{
		this.setState((prevState)=>({
			postsInFavourites:{
				...prevState.postsInFavourites,
				[productId]:(prevState.postsInFavourites[productId] || 0 ) + count
			}
		}))
	}

	removeProductFromCart = (productId) => {
		this.setState((prevState)=>({
			postsInFavourites:omit(prevState.postsInFavourites,productId)
		}))
	}	
	changeProductQuantity = (productId,count) => {
		this.setState((prevState)=>({
			postsInFavourites:{
				...prevState.postsInFavourites,
				[productId]:count,
			}
		}))
	}

	addLike = (productId) => {
		this.setState((prevState)=>({
			productsLikeState:{
				...prevState.productsLikeState,
				[productId]:true
			}
		}))
	}

	removeLike = (productId) => {
		this.setState((prevState)=>({
			productsLikeState:{
				...prevState.productsLikeState,
				[productId]:false
			}
		}))
	}

	

	render() {
		return (
			<div>
				<Header 
					postsInFavourites={this.state.postsInFavourites}
					
				/>
				
				<Main 
					addProductToCart={this.addProductToCart}
					postsInFavourites={this.state.postsInFavourites}
					removeProductFromCart={this.removeProductFromCart}
					changeProductQuantity={this.changeProductQuantity}
					productsLikeState={this.state.productsLikeState}
					removeLike={this.removeLike}
					addLike={this.addLike}
				/>
				<Footer/>
			</div>
		)
	}
}



export default App







