import React from 'react'
import {Link} from 'react-router-dom'

const Topbar = () => {
	return (
      
                    <div className="col-lg-5">
                        <div className="topsocial">
                            <Link to="/" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i className="fa fa-facebook"></i></Link>
                            <Link to="/" data-toggle="tooltip" data-placement="bottom" title="Youtube"><i className="fa fa-youtube"></i></Link>
                            <Link to="/" data-toggle="tooltip" data-placement="bottom" title="Pinterest"><i className="fa fa-pinterest"></i></Link>
                            <Link to="/" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i className="fa fa-twitter"></i></Link>
                            <Link to="/" data-toggle="tooltip" data-placement="bottom" title="Flickr"><i className="fa fa-flickr"></i></Link>
                            <Link to="/" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i className="fa fa-instagram"></i></Link>
                        </div>
                    </div>
           

        
    
    )
  }

  export default Topbar