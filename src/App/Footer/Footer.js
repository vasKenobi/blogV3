import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
	return (
		<footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="widget">
                            <div className="footer-text text-center">
                                <Link to="/"><img src="/images/version/blog-football-footer-logo.png" alt="" className="img-fluid"/></Link>
                                <p>Football blog - last news, interesting articles, forecasts.</p>
                                <div className="social">
                                    <Link data-toggle="tooltip" data-placement="bottom" title="Facebook" to="/"><i className="fa fa-facebook"></i></Link>              
                                    <Link data-toggle="tooltip" data-placement="bottom" title="Twitter" to="/"><i className="fa fa-twitter"></i></Link>
                                    <Link data-toggle="tooltip" data-placement="bottom" title="Instagram" to="/"><i className="fa fa-instagram"></i></Link>
                                    <Link data-toggle="tooltip" data-placement="bottom" title="Pinterest" to="/"><i className="fa fa-pinterest"></i></Link>
                                </div>

                                <hr className="invis"/>

                                <div className="newsletter-widget text-center">
                                    <form className="form-inline">
                                        <input type="text" className="form-control" placeholder="Enter your email address"/>
                                        <button type="submit" className="btn btn-primary">Subscribe <i className="fa fa-envelope-open-o"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 text-center">
                        <br/>
                        <br/>
                        <div className="copyright">&copy; Footbal Blog.</div>
                    </div>
                </div>
            </div>
        </footer>
	)
}

export default Footer