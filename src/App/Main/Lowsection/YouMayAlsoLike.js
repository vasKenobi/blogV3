import React from 'react'
import {Link} from 'react-router-dom'

const YouMayAlsoLike = () => {
    return (
                        <div class="custombox clearfix">
                                <h4 class="small-title">You may also like</h4>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="blog-box">
                                            <div class="post-media">
                                                    <Link title="" to="/EnglishPL">
                                                    <img src="/images/EPL/LFC_MC_hm.png" alt="" class="img-fluid"/>
                                                    <div class="hovereffect">
                                                        <span class=""></span>
                                                    </div>
                                                    </Link>
                                            </div>
                                            <div class="blog-meta">
                                                <h4><Link title="" to="/BlogFootballEPL">No Salah, Firmino or Mane in Liverpool and Manchester City combined XI </Link></h4>
                                                <small><Link title="" to="/EnglishPL">Gzhegozh</Link></small>
                                                <small><Link title="" to="/EnglishPL">08 November, 2019</Link></small>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="blog-box">
                                            <div class="post-media">
                                                    <Link title="" to="/BundesL">
                                                    <img src="/images/BL/BMteam.png" alt="" class="img-fluid"/>
                                                    <div class="hovereffect">
                                                        <span class=""></span>
                                                    </div>
                                                    </Link>
                                            </div>
                                            <div class="blog-meta">
                                                <h4><Link title="" to="/BlogFootballBL">What next for Bayern following Kovac sacking?</Link></h4>
                                                <small><Link title="" to="/BundesL">Gzhegozh</Link></small>
                                                <small><Link title="" to="/BundesL">05 November, 2019</Link></small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    )
}
export default YouMayAlsoLike
