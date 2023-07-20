import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Banner from './Banner/Banner';
import HottestCategories from './HottestCategories/HottestCategories';
import TopProducts from './TopProducts/TopProducts';
import SmartHome from './SmartHome/SmartHome';
import PeopleLoveIt from './PeopleLoveIt/PeopleLoveIt';
import HotOffers from './HotOffers/HotOffers';
import SimpleSlider from './YouCanAlsoSee/YouCanAlsoSee';
import KeepInTouch from './KeepInTouch/KeepInTouch';
function Home() {
  return (
    <div>
        <Header/>
        <Banner/>
        <HottestCategories/>
        <TopProducts/>
        <SmartHome/>
        <PeopleLoveIt/>
        <HotOffers/>
        <SimpleSlider/>
        <KeepInTouch/>
        <Footer/>
    </div>
  );
}

export default Home;