
import React, { Component } from 'react'
import './listings.scss'
import { listings } from './listings-mock'
import { ReactComponent as RightArrow } from '../../images/arrow.svg'
import bedIcon from '../../images/bed.png'
import bathIcon from '../../images/bath.png'
import sqFeetIcon from '../../images/3d-printer.png'
import arrowDown from '../../images/arrow-down.png'
import arrowUp from '../../images/up-arrow.png'

const listingsMock = [
    {
        address: "1323 Main Street",
        price: "350,000",
        city: "Blah",
        county: "Blah",
        bed: 3,
        bath: 2,
        sqFeet: 1430,
    },
    {
        address: "13 Elm Street",
        price: "500,000",
        city: "Blah",
        county: "Blah",
        bed: 2,
        bath: 1.5,
        sqFeet: 2032,
    }
]

class Listings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            propertyClicked: false,
            selectedProperty: {},
            seeMore: false
        }
    }

    render() {
        const openProperty = (e) => {
            console.log(e);
            this.setState({
                propertyClicked: true,
                selectedProperty: e
            })
        }

        const expandedClicked = () => {
            this.state.seeMore ?
                this.setState({
                    seeMore: false
                }) :
                this.setState({
                    seeMore: true
                })
        }

        const isClicked = this.state.propertyClicked;
        const isExpanded = this.state.seeMore;

        return (
            <div className='listings-container'>
                <h2 style={{ color: 'white' }}>Listings</h2>
                {!isClicked ?
                    listingsMock.map((listing, index) => (
                        <div className='listing'>
                            <div className='listing-info'>
                                <div className='listing-image'></div>
                                <div className='listing-text'>
                                    <h3>{listing.address}</h3>
                                    <h3>{listing.price}</h3>
                                    <h3>Beds: {listing.bed}</h3>
                                    <h3>Baths: {listing.bath}</h3>
                                </div>
                                <div className='listing-arrow'>
                                    <RightArrow
                                        id={`listing-arrow-${index}`}
                                        onClick={() => openProperty(listing)}
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                    : <div className='property-container'>
                        <div className='property'>
                            <div className='property-image-container'></div>
                            <div className='property-text'>
                                <h3 className='price'>${this.state.selectedProperty.price}</h3>
                                <h3>{this.state.selectedProperty.address},</h3>
                                <h3>{this.state.selectedProperty.city}</h3>
                                <div className='icon-flex-container'>
                                    <div className='icon-flex'>
                                        <h3>{this.state.selectedProperty.bed}</h3>
                                        <img src={bedIcon} />
                                    </div>
                                    <div className='icon-flex'>
                                        <h3>{this.state.selectedProperty.bath}</h3>
                                        <img src={bathIcon} />
                                    </div>
                                    <div className='icon-flex'>
                                        <h3>{this.state.selectedProperty.sqFeet}</h3>
                                        <img src={sqFeetIcon} />
                                    </div>
                                </div>
                                <div className='show-more'>
                                    {!isExpanded ?
                                        <h3>Show More</h3> :
                                        <div className='expanded-property'>
                                            <ul>
                                                <li>asd</li>
                                                <li>asd</li>
                                                <li>asd</li>
                                                <li>asd</li>
                                                <li>asd</li>
                                                <li>asd</li>
                                            </ul>
                                            <div className='schedule-button-container'>
                                                <button className='schedule-button'>Schedule a showing</button>
                                            </div>
                                            <h3 style={{ textAlign: 'center' }}>Show Less</h3>
                                        </div>
                                    }
                                    <img src={!isExpanded ? arrowDown : arrowUp} onClick={() => expandedClicked()} />
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Listings