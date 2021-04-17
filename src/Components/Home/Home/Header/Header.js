import React from 'react';
import ChooseClasses from '../../ChooseClasses/ChooseClasses';
import Enroll from '../../Enroll/Enroll';
import Features from '../../Features/Features';
import Footer from '../../../Shared/Footer/Footer';
import HeaderMain from '../../HeaderMain/HeaderMain';
import Navbar from '../../../Shared/Navbar/Navbar';
import TeachersInfo from '../../TeachersInfo/TeachersInfo';
import UpcomingEvents from '../../UpcomingEvents/UpcomingEvents';
import HomeReview from '../../HomeReview/HomeReview';
import HomeAdmin from '../../HomeAdmin/HomeAdmin';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <Features></Features>
            <Enroll></Enroll>
            <ChooseClasses></ChooseClasses>
            <TeachersInfo></TeachersInfo>
            <HomeReview></HomeReview>
            <UpcomingEvents></UpcomingEvents>
            <HomeAdmin></HomeAdmin>
            <Footer></Footer>
        </div>
    );
};

export default Header;