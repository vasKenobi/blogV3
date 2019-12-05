import React from 'react'
import {Link} from 'react-router-dom'
import './menu.css'

const Menu = () => {
    return (
        <div className="menu">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">posts</Link></li>
                <li><Link to="/EnglishPL">English Premier League</Link></li>
                <li><Link to="/MajorSL">Major Soccer League</Link></li>
                <li><Link to="GermanBL">German Bundes Liga</Link></li>
            </ul>
        </div>
    )
}
export default Menu