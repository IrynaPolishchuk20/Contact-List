import { Link } from "react-router";
import './Header.scss'

import { useSelector, useDispatch } from 'react-redux'
import { setSearchQuery } from '../../redux/actions'

export default function Header() {
    const dispatch = useDispatch()
    const search = useSelector(state => state.search.query)

    const handleChange = (e) => {
        dispatch(setSearchQuery(e.target.value))
    }

    return(
        <header className="container">
            <div className="row containerHeader">
                <div className="col-12">
                    <nav className="navbar">
                        <div className="container-fluid">
                           <div className="navbar-brand">
                                <Link className="navbar-brand" to="/">
                                    Contact List
                                </Link>
                                <Link className="navbar-brand" to="/add-contact">
                                    Add Contact
                                </Link>
                                <Link className="navbar-brand" to="/contact-statuss">
                                    Statuss
                                </Link>
                           </div>
 
                            <form className="d-flex" role="search">
                                <input value={search}
                                    onChange={handleChange}
                                    className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
 