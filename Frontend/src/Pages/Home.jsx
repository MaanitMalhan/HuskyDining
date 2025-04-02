import React from "react";
// import { Navbar } from "../components/navigation/Nav";
import { Navbar } from "../components/Navbar/Navbar";
import companyLogo from "../assets/Husky_Dining_logo.png";

export const Home_loggedout = () => {
  const styles = {
    title: {
        backgroundColor: "#f3f5f3",
        color: "#00007b",
        width: "100%",
        textAlign: "center",
        fontSize: "xx-large",
        fontWeight: "bold",
        padding: "20px 0",
    },
    logoContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px 0",
        backgroundColor: "#dcd7cf",
    },
    logo: {
        width: "425px",  
        height: "400px",
    },
    section: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
    },
    header: {
        fontSize: "24px",
        fontWeight: "bold",
        marginBottom: "10px",
    },
    paragraph: {
        fontSize: "18px",
        lineHeight: "1.6",
        color: "#333",
    },
    list: {
        textAlign: "left",
        listStyleType: "disc",
        marginLeft: "20px",
        fontSize: "18px",
    }
};


    return (
        <main className="overflow-hidden" style={{ backgroundColor: "#f3f5f3", minHeight: "100vh" }}>
            <Navbar />
            <div className="home">
                

                <div className="logoContainer" style={styles.logoContainer}>
                    <img src={companyLogo} style={styles.logo} alt="HuskyDining Logo" className="logo-image" />
                </div>

                <div className="section">
                    <section style={styles.section}>
                        <h2 style={styles.header}>What is HuskyDining?</h2>
                        <p style={styles.paragraph}>
                            HuskyDining is a platform created for UConn students to easily access dining hall menus
                            and restaurant options around campus. Our goal is to provide you with quick access to the 
                            dining services, so you can make informed decisions about your meals.
                        </p>
                    </section>
                    
                    <section style={styles.section}>
                        <h2 style={styles.header}>How It Works</h2>
                        <p style={styles.paragraph}>
                            Navigate to the <strong>Dining Hall Menus</strong> section to view the current menus for all UConn 
                            dining halls. The links will take you to UConn Dining Services, where you can find detailed 
                            nutritional information for each meal.
                        </p>
                        <p style={styles.paragraph}>
                            You can also explore restaurants around campus to expand your dining options beyond the dining halls.
                        </p>
                    </section>

                    <section style={styles.section}>
                        <h2 style={styles.header}>Key Features</h2>
                        <ul style={styles.list}>
                            <li>Easy access to UConn dining hall menus</li>
                            <li>Up-to-date nutritional analysis for each meal</li>
                            <li>Links to popular restaurants around campus</li>
                        </ul>
                    </section>
                </div>
            </div>
        </main>
    );
};
