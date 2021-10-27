import React from 'react'

import logo from './../images/logo-free.png'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="!#">
                <img src={logo} width="30" height="30" alt="" />
                 <span className="ml-2">Pokemon App</span>
            </a>
        </nav>
    )
}
