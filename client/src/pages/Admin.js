import React, { Component } from 'react';
import BannerHolder from '../components/HomepageComponents/BannerHolder'
import Banner from '../components/HomepageComponents/Banner'
import ListOfBookings from '../components/Admin/ListOfBookings';

class Admin extends Component {
    render() {
        return (
            <>
                <BannerHolder classBanner="AdminBanner">
                    <Banner className="text-center" heading='hello Admin' message='Take Control Of The bookings'></Banner>
                </BannerHolder>
                <ListOfBookings/>
            </>
        );
    }
}

export default Admin;