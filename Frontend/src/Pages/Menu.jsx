import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { color } from "framer-motion";

export const Menu = () => {
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
    heading:{
      color: "#000080",
      textAlign: "center",
      textDecoration: "none",
  }
  };
  const hovering = {
    headingHover: {
    textDecoration: "underline",
    color: "#000000",
    }
  };

  return (
    <main className="overflow-hidden p-6 bg-gray-100 min-h-screen" style={{ backgroundColor: "#f3f5f3", minHeight: "100vh" }}>
      <Navbar />
      <div className="rounded-lg h-[calc(100vh-64px)] overflow-y-auto w-[100%] text-white mt-[51px]">
        <h1 className="homeTitle" style={styles.title}>Menu</h1>

        <div className="dining-halls">
       
        <section className={`mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6`}>
        <div className={`rounded-lg shadow-lg p-8`} style={{ backgroundColor: "#f9f9f9", border: "1px solid #ccc" }}>
          <h2 className={`text-2xl font-semibold`} style={styles.heading} onMouseEnter={(e) => Object.assign(e.target.style, hovering.headingHover)}
            onMouseLeave={(e) => Object.assign(e.target.style, styles.heading)}
          ><a href="https://nutritionanalysis.dds.uconn.edu/shortmenu.aspx?sName=UCONN+Dining+Services&locationNum=15&locationName=Northwest+Marketplace&naFlag=1">Northwest Dining</a></h2>
          <p className={`mt-4`} style={{ color: "#333", textAlign: "center" }}>
            Dining hall Associated with the northwest dorm complex
          </p>
        </div>
    
        <div className={`rounded-lg shadow-lg p-8`} style={{ backgroundColor: "#f9f9f9", border: "1px solid #ccc" }}>
        <h2 className={`text-2xl font-semibold`} style={styles.heading} onMouseEnter={(e) => Object.assign(e.target.style, hovering.headingHover)}
            onMouseLeave={(e) => Object.assign(e.target.style, styles.heading)}
          ><a href="https://nutritionanalysis.dds.uconn.edu/shortmenu.aspx?sName=UCONN+Dining+Services&locationNum=07&locationName=North+Campus+Dining+Hall&naFlag=1">North Dining</a></h2>
          <p className={`mt-4`} style={{ color: "#333", textAlign: "center" }}>
            Dining hall Associated with the northwest dorm complex
          </p>
        </div>


        <div className={`rounded-lg shadow-lg p-8`} style={{ backgroundColor: "#f9f9f9", border: "1px solid #ccc" }}>
        <h2 className={`text-2xl font-semibold`} style={styles.heading} onMouseEnter={(e) => Object.assign(e.target.style, hovering.headingHover)}
            onMouseLeave={(e) => Object.assign(e.target.style, styles.heading)}
          ><a href="https://nutritionanalysis.dds.uconn.edu/shortmenu.aspx?sName=UCONN+Dining+Services&locationNum=03&locationName=Connecticut+Dining+Hall&naFlag=1&WeeksMenus=This+Week%27s+Menus&myaction=read&">Connecticut Dining</a></h2>
          <p className={`mt-4`} style={{ color: "#333", textAlign: "center" }}>
            Dining hall Associated with the northwest dorm complex
          </p>
        </div>
        </section>

        <section className={`mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6`}>
        <div className={`rounded-lg shadow-lg p-8`} style={{ backgroundColor: "#f9f9f9", border: "1px solid #ccc" }}>
        <h2 className={`text-2xl font-semibold`} style={styles.heading} onMouseEnter={(e) => Object.assign(e.target.style, hovering.headingHover)}
            onMouseLeave={(e) => Object.assign(e.target.style, styles.heading)}
          ><a href="https://nutritionanalysis.dds.uconn.edu/shortmenu.aspx?sName=UCONN+Dining+Services&locationNum=16&locationName=South+Campus+Marketplace&naFlag=1">South Dining</a></h2>
          <p className={`mt-4`} style={{ color: "#333", textAlign: "center" }}>
            Dining hall Associated with the northwest dorm complex
          </p>
        </div>


        <div className={`rounded-lg shadow-lg p-8`} style={{ backgroundColor: "#f9f9f9", border: "1px solid #ccc" }}>
        <h2 className={`text-2xl font-semibold`} style={styles.heading} onMouseEnter={(e) => Object.assign(e.target.style, hovering.headingHover)}
            onMouseLeave={(e) => Object.assign(e.target.style, styles.heading)}
          ><a href="https://nutritionanalysis.dds.uconn.edu/shortmenu.aspx?sName=UCONN+Dining+Services&locationNum=06&locationName=Putnam+Dining+Hall&naFlag=1">Putnam Dining</a></h2>
          <p className={`mt-4`} style={{ color: "#333", textAlign: "center" }}>
            Dining hall Associated with the northwest dorm complex
          </p>
        </div>

        <div className={`rounded-lg shadow-lg p-8`} style={{ backgroundColor: "#f9f9f9", border: "1px solid #ccc" }}>
        <h2 className={`text-2xl font-semibold`} style={styles.heading} onMouseEnter={(e) => Object.assign(e.target.style, hovering.headingHover)}
            onMouseLeave={(e) => Object.assign(e.target.style, styles.heading)}
          ><a href="https://nutritionanalysis.dds.uconn.edu/shortmenu.aspx?sName=UCONN+Dining+Services&locationNum=01&locationName=Whitney+Dining+Hall&naFlag=1">Whitney Dining</a></h2>
          <p className={`mt-4`} style={{ color: "#333", textAlign: "center" }}>
            Dining hall Associated with the northwest dorm complex
          </p>
        </div>
        </section>

        <section className={`mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6`}>
        <div className={`rounded-lg shadow-lg p-8`} style={{ backgroundColor: "#f9f9f9", border: "1px solid #ccc" }}>
        <h2 className={`text-2xl font-semibold`} style={styles.heading} onMouseEnter={(e) => Object.assign(e.target.style, hovering.headingHover)}
            onMouseLeave={(e) => Object.assign(e.target.style, styles.heading)}
          ><a href="https://nutritionanalysis.dds.uconn.edu/shortmenu.aspx?sName=UCONN+Dining+Services&locationNum=05&locationName=McMahon+Dining+Hall&naFlag=1">McMahon Dining</a></h2>
          <p className={`mt-4`} style={{ color: "#333", textAlign: "center" }}>
            Dining hall Associated with the northwest dorm complex
          </p>
        </div>

        <div className={`rounded-lg shadow-lg p-8`} style={{ backgroundColor: "#f9f9f9", border: "1px solid #ccc" }}>
        <h2 className={`text-2xl font-semibold`} style={styles.heading} onMouseEnter={(e) => Object.assign(e.target.style, hovering.headingHover)}
            onMouseLeave={(e) => Object.assign(e.target.style, styles.heading)}
          ><a href="https://nutritionanalysis.dds.uconn.edu/shortmenu.aspx?sName=UCONN+Dining+Services&locationNum=42&locationName=Gelfenbien+Commons,%20Halal+%26+Kosher&naFlag=1">Gelfenbien Dining</a></h2>
          <p className={`mt-4`} style={{ color: "#333", textAlign: "center" }}>
            Dining hall Associated with the northwest dorm complex
          </p>
        </div>

        <div className={`rounded-lg shadow-lg p-8`} style={{ backgroundColor: "#f9f9f9", border: "1px solid #ccc" }}>
        <h2 className={`text-2xl font-semibold`} style={styles.heading} onMouseEnter={(e) => Object.assign(e.target.style, hovering.headingHover)}
            onMouseLeave={(e) => Object.assign(e.target.style, styles.heading)}
          ><a href="https://nutritionanalysis.dds.uconn.edu/shortmenu.aspx?sName=UCONN+Dining+Services&locationNum=39&locationName=Everyday+Items&naFlag=1">Everyday Items</a></h2> 
          <p className={`mt-4`} style={{ color: "#333", textAlign: "center" }}>
            Dining hall Associated with the northwest dorm complex
          </p>
        </div>
        </section>



        </div> 
      </div>
    </main>
  );
};
