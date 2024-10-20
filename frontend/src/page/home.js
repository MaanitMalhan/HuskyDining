import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <h1> Welcome to HuskyDining! </h1>
                <img 
                    src="https://uconn.edu/content/uploads/2022/11/Avery_Point_Drone0_20210624_0256.png" 
                    alt="UConn Campus" 
                    style={{ width: '100%', height: 'auto' }} 
                />
                <section>
                    <h2>What is HuskyDining?</h2>
                    <p>
                        HuskyDining is a platform created for UConn students to easily access dining hall menus
                        and restaurant options around campus. Our goal is to provide you with quick access to the 
                        dining services, so you can make informed decisions about your meals.
                    </p>
                </section>

                <section>
                    <h2>How It Works</h2>
                    <p>
                        Navigate to the <strong>Dining Hall Menus</strong> section to view the current menus for all UConn 
                        dining halls. The links will take you to UConn Dining Services, where you can find detailed 
                        nutritional information for each meal.
                    </p>
                    <p>
                        You can also explore restaurants around campus to expand your dining options beyond the dining halls.
                    </p>
                </section>

                <section>
                    <h2>Key Features</h2>
                    <ul>
                        <li>Easy access to UConn dining hall menus</li>
                        <li>Up-to-date nutritional analysis for each meal</li>
                        <li>Links to popular restaurants around campus</li>
                    </ul>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Home;