import React from 'react'
import { NavLink, } from "react-router-dom"
import "../App.css"

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light navcss">
                <NavLink to="/" className="nav-item nav-link" activeClassName="active">Logo</NavLink>
                <button style={{background:"goldenrod"}} className="navbar-toggler"  type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>   
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav" style={{marginLeft:"60px"}}>
                        <NavLink to="/" className="navlinks nav-item navigaton1 px-5" activeClassName="active" exact>Shuffle !</NavLink>
                        <NavLink to="/Blog" className="navlinks nav-item navigaton1 px-5"activeClassName="active" exact>Blog</NavLink>
                        <NavLink to="/About" className=" navlinks nav-item navigaton1 px-5"activeClassName="active">About</NavLink>
                        <NavLink to="/Support" className=" navlinks nav-item navigaton1 px-5" activeClassName="active">Support</NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header
