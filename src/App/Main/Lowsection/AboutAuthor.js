import React from 'react'
import {Link} from 'react-router-dom'

const AboutAuthor = () => {
    return (
        <div class="custombox authorbox clearfix">
                                <h4 class="small-title">About author</h4>
                                <div class="row">
                                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                                        <img src="/images/author.png" alt="" class="img-fluid rounded-circle"/> 
                                    </div>

                                    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
                                        <h4><Link to="/">Gzhegozh</Link></h4>
                                        <p>World Famous Football expert, Gzhegozh "Iceman" Bzhezhishchekevich writes great articles and makes very accurate forecasts.</p>

                                        <div class="topsocial">
                                            <Link data-toggle="tooltip" data-placement="bottom" title="Facebook" to="/"><i class="fa fa-facebook"></i></Link>
                                            <Link data-toggle="tooltip" data-placement="bottom" title="Youtube" to="/"><i class="fa fa-youtube"></i></Link>
                                            <Link data-toggle="tooltip" data-placement="bottom" title="Pinterest" to="/"><i class="fa fa-pinterest"></i></Link>
                                            <Link data-toggle="tooltip" data-placement="bottom" title="Twitter" to="/"><i class="fa fa-twitter"></i></Link>
                                            <Link data-toggle="tooltip" data-placement="bottom" title="Instagram" to="/"><i class="fa fa-instagram"></i></Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
    )
}
export default AboutAuthor
