import React, { Component } from 'react'
import './propertyList.scss'
import { ReactComponent as RightArrow } from '../../../images/arrow.svg'
import arrowDown from '../../../images/arrow-down.png'
import PropertyDetails from '../PropertyDetails/PropertyDetails'

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

class PropertyList extends Component {
    constructor(props) {
        super(props);
        this.listing = this.props.listing;
        this.id = this.props.id;
        this.state = {
            propertyClicked: false
        }
        console.log(this.props);
        console.log(this.id);
    }

    render() {
        const propertyClicked = (e) => {
            let arw = document.getElementById(e.target.id);
            arw.classList.toggle('rotated');
            this.state.propertyClicked ?
                this.setState({
                    propertyClicked: false
                }) :
                this.setState({
                    propertyClicked: true
                })
        }
        return (
            <div className='listings'>
                <div className='listing-info'>
                    <div className='listing-image'></div>
                    <div className='listing-text'>
                        <h3>{this.listing.address}</h3>
                        <h3>{this.listing.price}</h3>
                        <h4>Beds: {this.listing.bed}</h4>
                        <h4>Baths: {this.listing.bath}</h4>
                    </div>
                    <div className='listing-arrow'>
                        <RightArrow
                            id={`listing-arrow-${this.id}`}
                            onClick={propertyClicked}
                        />
                    </div>
                </div>
                {this.state.propertyClicked &&
                    <div>
                        <hr></hr>
                        <PropertyDetails listing={this.listing} />
                    </div>
                }
            </div>
        )
    }

}

export default PropertyList