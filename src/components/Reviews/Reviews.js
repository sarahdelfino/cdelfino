import React, { Component } from 'react';
import './reviews.scss';

const reviewsMock = [
    {
        user: "randomLady123",
        description: "i got a kewl house",
    },
    {
        user: "ugh32",
        description: "la la la",
    }
]

class Reviews extends Component {

    render() {
        return (
            <div className='reviews-container'>
                <h2 style={{ color: 'white', paddingLeft: '10px' }}>Reviews</h2>
                {
                    reviewsMock.map((review) => (
                        <div className='review'>
                            <div className='review-icon'></div>
                            <div className='review-text'>
                                <h3>{review.user}</h3>
                                <p>{review.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Reviews