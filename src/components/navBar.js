import React from 'react'
import {Link} from 'react-router-dom'

export default function navbar() {
    return (
        <div className = "nav-bar">
            <img className = "logo" src = "https://muzoonfire.com/wp-content/uploads/2018/01/Re-Size_Logo.png" alt = "muzo on fire logo"/>
            <Link to = "/about" className = "about-link">About</Link>
        </div>
    )
}
