import React from 'react';
import Header from '../../components/HeaderComponent'; 
import Footer from '../../components/FooterComponent';
import Banner from '../../components/BannerComponent';
import Astro from '../../components/AstroComponent';
import Merch from '../../components/MerchComponent';
import Article from '../../components/ArticleComponent';
import Package from '../../components/PackageComponent';
import Online from '../../components/OnlineComponent';
import Horoscope from '../../components/HoroScopeComponent';
import '../../styles/HomePage.css';

const HomePageView: React.FC = () => {
    return (
        <div className="homepage">
            <Header />
            <Banner />
            <div className="container max-w-screen-xl mx-auto px-8">
                <Astro />
                <Merch />
                <Article />
                <Horoscope />
                <Package />
                <Online />   
            </div>
            <Footer />
        </div>
    );
};

export default HomePageView;
