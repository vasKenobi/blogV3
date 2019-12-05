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

	addPostToFavourites = (postId,count) =>{
		this.setState((prevState)=>({
			postsInFavourites:{
				...prevState.postsInFavourites,
				[postId]:(prevState.postsInFavourites[postId] || 0 ) + count
			}
		}))
	}

	removePostFromFavourites = (postId) => {
		this.setState((prevState)=>({
			postsInFavourites:omit(prevState.postsInFavourites,postId)
		}))
	}	
	changePostRating = (postId,count) => {
		this.setState((prevState)=>({
			postsInFavourites:{
				...prevState.postsInFavourites,
				[postId]:count,
			}
		}))
	}

	addLike = (postId) => {
		this.setState((prevState)=>({
			postsLikeState:{
				...prevState.postsLikeState,
				[postId]:true
			}
		}))
	}

	removeLike = (postId) => {
		this.setState((prevState)=>({
			postsLikeState:{
				...prevState.postsLikeState,
				[postId]:false
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
					removePostFromFavourites={this.removePostFromFavourites}
					changePostRating={this.changePostRating}
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







