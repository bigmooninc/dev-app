import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
 
export const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {

    const authLinks = (
        <ul className="flex">
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
                <a href="#!" onClick={logout}>Logout</a>
            </li>
        </ul>
    );


    const guestLinks = (
        <ul className="flex">
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>
    );

    return (
        <nav className="w-full max-w-3xl mx-auto flex justify-between">
            <h1>
                <Link to="/">DevApp</Link>
            </h1>
            {!loading && isAuthenticated ? authLinks : guestLinks}
        </nav>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar);