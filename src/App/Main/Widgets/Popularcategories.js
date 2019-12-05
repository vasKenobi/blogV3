import React from 'react'
import {Link} from 'react-router-dom'

const Popularcategories = () => {
    return (

                            <div className="widget">
                                <h2 className="widget-title">Popular Categories</h2>
                                <div className="link-widget">
                                    <ul>
                                        <li><Link to="/EnglishPL">English Premier League <span>(888)</span></Link></li>
                                        <li><Link to="/MajorSL">Major Soccer League <span>(999)</span></Link></li>
                                        <li><Link to="/GermanBL">German Bundesliga <span>(444)</span></Link></li>
                                    </ul>
                                </div>
                            </div>
                       

      

    )
  }

  export default Popularcategories