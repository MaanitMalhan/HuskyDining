import React from "react";
import { Navbar } from "../components/navigation/Nav";

export const About = () => {
  return (
    <main className={`overflow-hidden p-6 bg-gray-100 min-h-screen`}>
      <Navbar />
      <section className={`mt-10 text-center`}>
        <h1 className={`text-5xl font-extrabold`} style={{ color: "#000080" }}>About Huskydining</h1>
        <p className={`mt-6 text-lg max-w-3xl mx-auto leading-relaxed`} style={{ color: "#333" }}>
          Welcome to Huskydining! Our mission is to provide students and faculty with access to nutritious, affordable meals while fostering a supportive campus community. 
          We aim to reduce food insecurity through innovative resource-sharing initiatives.
        </p>
      </section>

      <section className={`mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6`}>
        <div className={`rounded-lg shadow-lg p-8`} style={{ backgroundColor: "#f9f9f9", border: "1px solid #ccc" }}>
          <h2 className={`text-2xl font-semibold`} style={{ color: "#000080" }}>Our Mission</h2>
          <p className={`mt-4`} style={{ color: "#333" }}>
            We are dedicated to improving student well-being by addressing food insecurity and promoting equity on campus. By leveraging community support and existing resources, we enhance both academic performance and mental health for all students.
          </p>
        </div>
        <div className={`rounded-lg shadow-lg p-8`} style={{ backgroundColor: "#f9f9f9", border: "1px solid #ccc" }}>
          <h2 className={`text-2xl font-semibold`} style={{ color: "#000080" }}>Our Vision</h2>
          <p className={`mt-4`} style={{ color: "#333" }}>
            To be a model for sustainable, peer-driven resource sharing that empowers students to thrive academically and personally, even in the face of rising costs and financial barriers.
          </p>
        </div>
        <div className={`rounded-lg shadow-lg p-8`} style={{ backgroundColor: "#f9f9f9", border: "1px solid #ccc" }}>
          <h2 className={`text-2xl font-semibold`} style={{ color: "#000080" }}>Our Values</h2>
          <p className={`mt-4`} style={{ color: "#333" }}>
            Inclusion, sustainability, integrity, and community collaboration are at the core of everything we do, ensuring a fair and supportive environment for all.
          </p>
        </div>
      </section>

      <section className={`mt-16 text-center`}>
        <h2 className={`text-3xl font-bold`} style={{ color: "#000080" }}>Our Impact</h2>
        <p className={`mt-6 text-lg max-w-xl mx-auto leading-relaxed`} style={{ color: "#333" }}>
          By reducing financial trade-offs for students, providing consistent access to meals, and fostering a culture of mutual support, Huskydining enhances student success and retention rates. 
          This initiative aligns with our university's goals of equity, sustainability, and academic excellence.
        </p>
      </section>

      <section className={`mt-16 text-center`}>
        <h2 className={`text-3xl font-bold`} style={{ color: "#000080" }}>Meet the Team</h2>
        <p className={`mt-6 text-lg max-w-xl mx-auto leading-relaxed`} style={{ color: "#333" }}>
          Our dedicated team collaborates across departments to ensure every student has access to essential dining services, minimizing barriers to education and promoting a healthier, more engaged campus community.
        </p>
      </section>
    </main>
  );
};