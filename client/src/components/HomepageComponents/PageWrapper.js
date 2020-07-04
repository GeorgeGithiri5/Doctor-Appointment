import React, { Component } from 'react';
import BookingForm from './BookingForm';
// import {Slide} from '@material-ui/core';

// import FacebookIcon from '@material-ui/core'

class PageWrapper extends Component {
    render() {
        return (
            <>
                <div className='col-12 my-4 row'>
                    <div className='col-lg-3 d-flex align-items-center sidebar'>
                        <p>Slider Will be Placed Here</p>
                    </div>
                    <div className="col-lg-6 mx-sm-auto col-sm-8">
                        <BookingForm/>
                    </div>
                    <div className='col-lg-3 contact bg-warning ml-auto'>
                        {/* <FacebookIcon/> */}
                    </div>
                </div>   
            </>
        );
    }
}

export default PageWrapper;