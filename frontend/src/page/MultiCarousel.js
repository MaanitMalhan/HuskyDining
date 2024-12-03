import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Import necessary CSS

// Card Component with full width style
const Card = ({ title, description }) => (
  <div style={styles.card}>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

// Styles for the carousel container and card
const styles = {
  carouselContainer: {
    width: "100%",
    height: "100%",
    maxWidth: "600px", // Adjust this as needed
    margin: "0 auto",
    position: "relative",
  },
  card: {
    width: "100%", // Ensure card takes full width of the container
    height: "512px", // Ensure card takes full height of the container
    backgroundColor: "#f3f3f3",
    borderRadius: "8px",
    padding: "20px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
};

const MultiCarousel = () => {
  const responsive = {
    superLarge: {
      breakpoint: { max: 4000, min: 1536 },
      items: 1, // Only one card at a time for larger screens
    },
    large: {
      breakpoint: { max: 1536, min: 1200 },
      items: 1, // Only one card at a time
    },
    medium: {
      breakpoint: { max: 1200, min: 800 },
      items: 1, // Only one card at a time
    },
    small: {
      breakpoint: { max: 800, min: 0 },
      items: 1, // Only one card at a time
    },
  };

  return (
    <div style={styles.carouselContainer}>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        arrows={false}
        showDots={false}
        swipeable={true}
        draggable={true}
      >
        <Card title="Card 1" description="Description 1" />
        <Card title="Card 2" description="Description 2" />
        <Card title="Card 3" description="Description 3" />
        <Card title="Card 4" description="Description 4" />
        <Card title="Card 5" description="Description 5" />
      </Carousel>
    </div>
  );
};

export default MultiCarousel;
