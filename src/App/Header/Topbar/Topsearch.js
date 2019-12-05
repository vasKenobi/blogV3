import React from 'react'
import {Link} from 'react-router-dom'

const Topsearch = () => {
	return (
      
                    <div className="col-lg-4">
                        <div className="topsearch text-right">
                            
                                <form className="form-inline search-form">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Search on the site"/>
                                    </div>
                                    <button type="submit" className="searchButton"><i className="fa fa-search"></i></button>
                                </form>
                            
                        </div>
                    </div>
           

        
    
    )
  }

  export default Topsearch