import React, { Component } from 'react';
import Navbar from '../components/HomepageComponents/Navbar';
import BannerHolder from '../components/HomepageComponents/BannerHolder'
import Banner from '../components/HomepageComponents/Banner';
import PageWrapper from '../components/HomepageComponents/PageWrapper';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    
    render() {
        const name = "George"
        return (
            <>
                <Navbar/>
                <BannerHolder classBanner='homebanner'>
                    <Banner heading="We Offer Quick, Affordable And Quality Health Services" message={`Hello,${name}. Welcome
                    to your best doctor. We offer a Quick way of getting health services through this platform. Book your appointment to day for Our Services.
                    `}>

                    </Banner>
                </BannerHolder>
                <PageWrapper/>
            </>
        );
    }
}

export default Homepage;