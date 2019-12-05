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
		postsLikeState: {
			'1':true,
			'2':true,
		}
		
	}

	addPostToFavourites = (productId,count) =>{
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
			postsLikeState:{
				...prevState.postsLikeState,
				[productId]:true
			}
		}))
	}

	removeLike = (productId) => {
		this.setState((prevState)=>({
			postsLikeState:{
				...prevState.postsLikeState,
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
					addPostToFavourites={this.addPostToFavourites}
					postsInFavourites={this.state.postsInFavourites}
					removeProductFromCart={this.removeProductFromCart}
					changeProductQuantity={this.changeProductQuantity}
					postsLikeState={this.state.postsLikeState}
					removeLike={this.removeLike}
					addLike={this.addLike}
				/>
				<Footer/>
			</div>
		)
	}
}



export default App







