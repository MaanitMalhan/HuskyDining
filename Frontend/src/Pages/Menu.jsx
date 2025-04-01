import React from "react";
import { Navbar } from "../components/Navbar/Navbar";

export const Menu = () => {
  const styles = {
    title: {
      color: "#003366",
      width: "100%",
      textAlign: "center",
      fontSize: "3rem",
      fontWeight: "bold",
      padding: "20px 0",
      marginTop: "20px",
    },
    subtitle: {
      color: "#5C7FA3",
      textAlign: "center",
      fontSize: "1.5rem",
      fontWeight: "normal",
      marginTop: "-10px",
    },
    heading: {
      color: "#000080",
      textAlign: "center",
      textDecoration: "none",
      transition: "color 0.3s ease-in-out, text-decoration 0.3s ease-in-out",
    },
    headingHover: {
      textDecoration: "underline",
      color: "#333",
    },
  };

  return (
    <main className="overflow-hidden p-6 bg-gray-100 min-h-screen" style={{ backgroundColor: "#f3f5f3" }}>
      <Navbar />
      <div className="rounded-lg h-[calc(100vh-64px)] overflow-y-auto w-full text-white mt-[51px]">
        
        {/* Main Title */}
        <h1 className="homeTitle" style={styles.title}>Dining Menu</h1>
        {/* Subtitle */}
        <p style={styles.subtitle}>Click on a dining hall to see the menus.</p>

        <div className="dining-halls">
          <section className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
            {[
              {
                name: "Northwest Dining",
                link: "https://nutritionanalysis.dds.uconn.edu/shortmenu.aspx?sName=UCONN+Dining+Services&locationNum=15&locationName=Northwest+Marketplace&naFlag=1",
                description: "A modern dining hall offering a variety of fresh meals, from salads to grilled entrees."
              },
              {
                name: "North Dining",
                link: "https://nutritionanalysis.dds.uconn.edu/shortmenu.aspx?sName=UCONN+Dining+Services&locationNum=07&locationName=North+Campus+Dining+Hall&naFlag=1",
                description: "Known for its comfort food and late-night options, perfect for North Campus residents."
              },
              {
                name: "Connecticut Dining",
                link: "https://nutritionanalysis.dds.uconn.edu/shortmenu.aspx?sName=UCONN+Dining+Services&locationNum=03&locationName=Connecticut+Dining+Hall&naFlag=1",
                description: "A classic UConn dining experience with a diverse selection of cuisines."
              },
              {
                name: "South Dining",
                link: "https://nutritionanalysis.dds.uconn.edu/shortmenu.aspx?sName=UCONN+Dining+Services&locationNum=16&locationName=South+Campus+Marketplace&naFlag=1",
                description: "Offers healthy, farm-to-table inspired meals with plenty of vegetarian and vegan options."
              },
              {
                name: "Putnam Dining",
                link: "https://nutritionanalysis.dds.uconn.edu/shortmenu.aspx?sName=UCONN+Dining+Services&locationNum=06&locationName=Putnam+Dining+Hall&naFlag=1",
                description: "A spacious dining hall featuring international cuisines and made-to-order stations."
              },
              {
                name: "Whitney Dining",
                link: "https://nutritionanalysis.dds.uconn.edu/shortmenu.aspx?sName=UCONN+Dining+Services&locationNum=01&locationName=Whitney+Dining+Hall&naFlag=1",
                description: "A smaller, eco-friendly dining hall with a focus on sustainability and organic foods."
              },
              {
                name: "McMahon Dining",
                link: "https://nutritionanalysis.dds.uconn.edu/shortmenu.aspx?sName=UCONN+Dining+Services&locationNum=05&locationName=McMahon+Dining+Hall&naFlag=1",
                description: "Features a mix of traditional American fare and international dishes."
              },
              {
                name: "Gelfenbien Dining",
                link: "https://nutritionanalysis.dds.uconn.edu/shortmenu.aspx?sName=UCONN+Dining+Services&locationNum=42&locationName=Gelfenbien+Commons,%20Halal+%26+Kosher&naFlag=1",
                description: "Provides Halal and Kosher meal options, ensuring inclusive dining for all students."
              },
              {
                name: "Everyday Items",
                link: "https://nutritionanalysis.dds.uconn.edu/shortmenu.aspx?sName=UCONN+Dining+Services&locationNum=39&locationName=Everyday+Items&naFlag=1",
                description: "A convenient spot for grabbing quick meals, snacks, and beverages."
              },
            ].map((diningHall, index) => (
              <div key={index} className="rounded-lg shadow-lg p-8" style={{ backgroundColor: "#f9f9f9", border: "1px solid #ccc" }}>
                <h2
                  className="text-2xl font-semibold"
                  style={styles.heading}
                  onMouseEnter={(e) => Object.assign(e.target.style, styles.headingHover)}
                  onMouseLeave={(e) => Object.assign(e.target.style, styles.heading)}
                >
                  {/* Opens in a new tab with security attributes */}
                  <a href={diningHall.link} target="_blank" rel="noopener noreferrer">{diningHall.name}</a>
                </h2>
                <p className="mt-4" style={{ color: "#333", textAlign: "center" }}>
                  {diningHall.description}
                </p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
};