import React from 'react'
import {Link} from 'react-router-dom'

const Menu = () => {
    return (
        <div className="collapse navbar-collapse justify-content-md-center">
            <ul className="navbar-nav">
                <li className="nav-item"><Link class="nav-link color-green-hover" to="/">Home</Link></li>
                <li className="nav-item"><Link class="nav-link color-green-hover" to="/">posts</Link></li>
                <li className="nav-item"><Link class="nav-link color-green-hover" to="/EnglishPL">English Premier League</Link></li>
                <li className="nav-item"><Link class="nav-link color-green-hover" to="/MajorSL">Major Soccer League</Link></li>
                <li className="nav-item"><Link class="nav-link color-green-hover" to="GermanBL">German Bundes Liga</Link></li>
            </ul>
        </div>
    )
}
export default Menu