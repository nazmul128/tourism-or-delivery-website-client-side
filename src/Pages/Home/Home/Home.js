import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Gallery from '../Gallery/Gallery'
import About from '../About/About';
// import Campstructure from '../CampStructure/Campstructure';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Gallery></Gallery>
            <About></About>
            {/* <Campstructure></Campstructure> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;