import { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom';

import { links } from './links'

import logo from '../../images/logo.png'

import './navigation.scss'

const Navigation = () => {

    const [toggleNav, setToggleNav] = useState(null)

    const location = useLocation().pathname

    return (
        <>
            <div className="navigation-wrap">
                <div className="navigation-wrapper">
                    <div className="navigation">
                        <div className="logo-wrapper">
                            <img className="logo" src={logo} alt="logo" />
                            <div>
                                Воронеж
                            </div>
                        </div>
                        <div className="nav-horizontal">
                            {links.map(({ name, to, text }, i) => {
                                if (name === "home") {
                                    return <Link key={i} to={to}>
                                        <img className="home-icon" src={`https://img.icons8.com/material-outlined/30/${location === "/autokat-group/" ? "ffdd00" : "000000"}/home--v2.svg`} alt="homeIcon" />
                                    </Link>
                                }
                                return <Link key={i} to={to} style={location.replace("/autokat-group/", "") === name ? { color: "#ffdd00" } : null}>{text}</Link>
                            })}
                        </div>
                        <div className="nav-open-button" onClick={() => setToggleNav(true)}>
                            <img src="https://img.icons8.com/ios-glyphs/30/000000/menu--v1.svg" alt="navButton" />
                        </div>
                    </div>
                </div>
                <div style={{ display: toggleNav ? "flex" : "none" }} className="nav-vertical" onClick={() => setToggleNav(false)}>
                    {links.map(({ name, to, text }, i) => {
                        if (name === "home") {
                            return <Link key={i} to={to}>
                                <img className="home-icon" src={`https://img.icons8.com/material-outlined/30/${location === "/autokat-group/" ? "ffdd00" : "ffffff"}/home--v2.svg`} alt="homeIcon" />
                            </Link>
                        }
                        return <Link key={i} to={to} style={location.replace("/autokat-group/", "") === name ? { color: "#ffdd00" } : null}>{text}</Link>
                    })}
                </div>
                <Outlet />
            </div>
        </>
    )
}

export default Navigation