import React from 'react'
import {Link} from 'react-router-dom'

const Pagination = () => {
    return (
                        
                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-start">
                                        <li className="page-item"><Link className="page-link" to="/">1</Link></li>
                                        <li className="page-item"><Link className="page-link" to="/">2</Link></li>
                                        <li className="page-item"><Link className="page-link" to="/">3</Link></li>
                                        <li className="page-item">
                                            <Link className="page-link" to="/">Next</Link>
                                        </li>
                                    </ul>
                                </nav>

    )
  }

  export default Pagination