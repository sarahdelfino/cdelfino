import React, { Component } from 'react';
import './contact.scss';

class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='contact-container'>
                <div className='contact-text'>
                    <h2>Sign up to receive new listings</h2>
                    <form>
                        <input style={{ marginRight: '40px' }} placeholder='Name'></input>
                        <input placeholder='Email'></input>
                        <div className='button-container'>
                        <button className='submit-button'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact