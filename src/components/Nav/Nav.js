import React, { Component } from 'react'
import './nav.scss'

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='nav-container'>
                <ul className='nav-list'>
                    <li>Home</li>
                    <li>Listings</li>
                    <li>Schedule</li>
                </ul>
                </div>
        )
    }
}

export default Nav