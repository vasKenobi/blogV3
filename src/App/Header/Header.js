import React from 'react'

import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import Favourites from './Favourites/Favourites'
import Topbar from './Topbar/Topbar'
import Topsearch from './Topbar/Topsearch'
import Firstsection from './Firstsection/Firstsection'

const Header = ({
	postsInFavourites
}) => {

	return (
		<div>
					
					

				<div className="topbar-section">
            		<div className="container-fluid">
						<div className="row">
						<Topbar/>
						<Topsearch/>
						<Favourites 
						postsInFavourites={postsInFavourites}
						/>
						
						</div>
					</div>
					
        		</div>

					<div className="header-section">
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<Logo/>
								</div>
							</div>
						</div>
					</div>


					

					

			<header className="header">
            	<div className="container">
                	<nav className="navbar navbar-inverse navbar-toggleable-md">
                    	<button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                        	<span className="navbar-toggler-icon"></span>
                    	</button>
						<Menu/>
					</nav>
            	</div>
        	</header>

			<Firstsection/>



		</div>
	)
}


export default Header
