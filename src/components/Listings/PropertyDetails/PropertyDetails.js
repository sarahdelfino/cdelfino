import React, { Component } from 'react'
import './propertyDetails.scss'
import bedIcon from '../../../images/bed.png'
import bathIcon from '../../../images/bath.png'
import sqFeetIcon from '../../../images/3d-printer.png'
import arrowDown from '../../../images/arrow-down.png'
import arrowUp from '../../../images/up-arrow.png'

class PropertyDetails extends Component {
    constructor(props) {
        super(props);
        this.listing = this.props.listing;
        this.id = this.props.id;
        this.state = {
            seeMore: false,
        }
    }

    render() {
        const expandedClicked = () => {
            this.state.seeMore ?
                this.setState({
                    seeMore: false
                }) :
                this.setState({
                    seeMore: true
                })
        }
        const isExpanded = this.state.seeMore;
        return (
            <div className='property-container'>
                <div className='property'>
                    <div className='property-image-container'></div>
                    <div className='property-text'>
                        <h3 className='price'>${this.listing.price}</h3>
                        <h3>{this.listing.address},</h3>
                        <h3>{this.listing.city}</h3>
                        <div className='icon-flex-container'>
                            <div className='icon-flex'>
                                <h3>{this.listing.bed}</h3>
                                <img src={bedIcon} />
                            </div>
                            <div className='icon-flex'>
                                <h3>{this.listing.bath}</h3>
                                <img src={bathIcon} />
                            </div>
                            <div className='icon-flex'>
                                <h3>{this.listing.sqFeet}</h3>
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
        )
    }
}

export default PropertyDetails