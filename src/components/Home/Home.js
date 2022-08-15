import React, { createRef, useRef, Component } from 'react'
// import background from '../../images/alex-perez-NLUkAA-nDdE-unsplash-sm.jpg';
import './home.scss'
import Nav from '../Nav/Nav';
import Listings from '../Listings/Listings';
import Contact from '../Contact/Contact';
import Reviews from '../Reviews/Reviews';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: false
        }
    }

    componentDidMount() {
        if (window.innerWidth < 500) {
            this.setState({
                isMobile: true
            })
        } else {
            this.setState({
                isMobile: false
            })
        }
    }

    render() {
        const mobile = this.state.isMobile;

        return (
            <div className='app-container'>
                {mobile &&
                    <div className='home-background-image'>
                        <div className='home-text'>
                            <h1>Courtney Delfino</h1>
                            <h2>Real Estate</h2>
                            <div className='home-buttons-container'>
                                <button
                                className='home-button'
                                >
                                    Listings
                                </button>
                                <button
                                className='home-button contact-button'
                                >Contact</button>
                            </div>
                        </div>
                    </div>
                }
                <Contact id='contact' />
                <Listings id='listings' />
                <Reviews />
                {/* <Nav /> */}
            </div>
        )
    }
}

export default Home