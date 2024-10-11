import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';


const Home = () => {
    return (
        <div>
            <Header />
            <h1> Welcome to HuskyDining! </h1>
            <img src="https://uconn.edu/content/uploads/2022/11/Avery_Point_Drone0_20210624_0256.png" alt="UConn Campus" />
            <Footer />
        </div>
    );
}

export default Home;