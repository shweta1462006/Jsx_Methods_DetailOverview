import React from 'react'
import logo from '../assets/img/alexa.svg'
import {NavLink} from 'react-router-dom'
export default function Header({ p1 = "Home", p2 = "About", p3 = "Services", p4 = "Contact",p5 }) {
    return (
        <>
            <div className="container">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <div className="col-md-3 mb-2 mb-md-0">
                        <NavLink to="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                            <img src={logo} alt="" height={50} width={50} />
                        </NavLink>
                    </div>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><NavLink to="/" className="nav-link px-2 link-secondary">{p1}</NavLink></li>
                        <li><NavLink to="/" className="nav-link px-2">{p2}</NavLink></li>
                        <li><NavLink to="/gallery" className="nav-link px-2">{p3}</NavLink></li>
                        <li><NavLink to="/form" className="nav-link px-2">{p4}</NavLink></li>
                        <li><NavLink to="/weather" className="nav-link px-2">{p5}</NavLink></li>
                      
                    </ul>

                    <div className="col-md-3 text-end">
                        <NavLink to={'/login'} type="button" className="btn btn-outline-primary me-2">Login</NavLink>
                        <button type="button" className="btn btn-primary">Sign-up</button>
                    </div>
                </header>
            </div>
        </>
    )
}
