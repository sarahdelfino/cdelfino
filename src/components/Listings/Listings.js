import React, { Component } from 'react'
import './listings.scss'
import { listings } from './PropertyList/listings-mock'
import PropertyList from './PropertyList/PropertyList'
import PropertyDetails from './PropertyDetails/PropertyDetails'

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
            seeMore: false,
            propertyIndex: null
        }
    }

    render() {
        const openProperty = (e, i) => {
            let pIndex = e.target.id.slice(-1);
            if (this.state.propertyClicked) {
                this.setState({
                    propertyClicked: false,
                    selectedProperty: null,
                    propertyIndex: null
                })
            } else {
                this.setState({
                    propertyClicked: true,
                    selectedProperty: e,
                    propertyIndex: pIndex
                })
            }
        }

        const isClicked = this.state.propertyClicked;
        const isExpanded = this.state.seeMore;

        return (
            <div className='listings-container'>
                <h2 style={{ color: 'white' }}>Listings</h2>
                {listingsMock.map((listing, index) => (
                    <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                    <li key={`${listing.address}`+`${listing.sqFeet.toString()}`} className='listing'>
                        <PropertyList click={openProperty} listing={listing} id={index} />
                    </li>
                    </ul>
                ))
                }
            </div>
        )
    }
}

export default Listings