import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Detail extends Component {
    render() {
        let { attractions } = this.props;
        return (
            <div className="container">
                <div className='cute-member row justify-content-center mt-5'>
                    <div className='col-11 col-lg-5'>
                        <div className='member-detail-card DogDetails-card card'>
                            <img className='card-img-top mt-2 mx-auto' src={attractions.src} alt={attractions.name} />
                            <div className='card-body'>
                                <h2 className='card-title text-center'>{attractions.name}</h2>
                                <ul className='list-group list-group-flush'>
                                    <li className='list-group-item'><strong>Name:</strong> {attractions.name}</li>
                                    <li className='list-group-item'><strong>About:</strong> {attractions.about}</li>
                                    <li className='list-group-item'><strong>Location:</strong> {attractions.location}</li>
                                </ul>
                                <div className='card-body'>
                                    <Link to='/attractions' className='btn btn-light'>Back to Attractions</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}