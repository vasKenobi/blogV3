import React from 'react'
import {Link} from 'react-router-dom'


const Recentposts = () => {
    return (

                            <div className="widget">
                                <h2 className="widget-title">Recent Posts</h2>
                                <div className="blog-list-widget">
                                    <div className="list-group">
                                            <Link className="list-group-item list-group-item-action flex-column align-items-start" to="/BlogFootballEPL">
                                            <div className="w-100 justify-content-between">
                                                <img src="/images/EPL/LFC_mn.png" alt="" className="img-fluid float-left"/>
                                                <h5 className="mb-1">No Salah, Firmino or Mane in Liverpool and Manchester City combined XI </h5>
                                                <small>08 November, 2019</small>
                                            </div>
                                            </Link>

                                        <Link className="list-group-item list-group-item-action flex-column align-items-start" to="/BlogFootballMSL">
                                            <div className="w-100 justify-content-between">
                                                <img src="/images/MSL/Seatle_mn.png" alt="" className="img-fluid float-left"/>
                                                <h5 className="mb-1">Lodeiro vs Pozuelo: The creative pair central as Seattle meet Toronto</h5>
                                                <small>09 November, 2019</small>
                                            </div>
                                            </Link>

                                            <Link className="list-group-item list-group-item-action flex-column align-items-start" to="/BlogFootballBL">
                                            <div className="w-100 last-item justify-content-between">
                                                <img src="/images/BL/BM_mn.png" alt="" className="img-fluid float-left"/>
                                                <h5 className="mb-1">What next for Bayern following Kovac sacking?</h5>
                                                <small>05 November, 2019</small>
                                            </div>
                                            </Link>
                                    </div>
                                </div>
                            </div>
      

    )
  }

  export default Recentposts