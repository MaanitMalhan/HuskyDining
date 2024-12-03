import { React, useState } from "react";
import Header from "../components/header-reviews";
import Footer from "../components/footer";
import huskyLogo from "../assets/husky.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = () => {
  // Simulating backend data with a list of reviews
  const reviewsList = [
    {
      id: 1,
      title: "Great food!",
      location: "Dining Hall A",
      rating: 5,
      verified: true,
      date: "2024-12-01",
    },
    {
      id: 2,
      title: "Not bad",
      location: "Dining Hall B",
      rating: 3,
      verified: false,
      date: "2024-11-15",
    },
    {
      id: 3,
      title: "Good experience",
      location: "Dining Hall C",
      rating: 4,
      verified: true,
      date: "2024-10-25",
    },
    {
      id: 4,
      title: "Terrible service",
      location: "Dining Hall A",
      rating: 2,
      verified: true,
      date: "2024-09-10",
    },
    {
      id: 5,
      title: "Amazing atmosphere",
      location: "Dining Hall B",
      rating: 5,
      verified: false,
      date: "2024-08-18",
    },
  ];

  const [reviews, setReviews] = useState(reviewsList);

  const [filters, setFilters] = useState({
    location: "",
    rating: "",
    verified: "",
    date: "",
  });

  const [newReview, setNewReview] = useState({
    title: "",
    location: "",
    rating: "",
    verified: false,
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    let filteredReviews = reviewsList;

    if (filters.location) {
      filteredReviews = filteredReviews.filter((review) =>
        review.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    if (filters.rating) {
      filteredReviews = filteredReviews.filter(
        (review) => review.rating >= Number(filters.rating)
      );
    }
    if (filters.verified !== "") {
      filteredReviews = filteredReviews.filter(
        (review) => review.verified === (filters.verified === "true")
      );
    }
    if (filters.date) {
      filteredReviews = filteredReviews.filter(
        (review) => new Date(review.date) >= new Date(filters.date)
      );
    }

    setReviews(filteredReviews);
  };

  const handleAddReview = () => {
    const newId = reviews.length + 1; // Simple id generation
    const newReviewData = { ...newReview, id: newId };
    setReviews((prevReviews) => [...prevReviews, newReviewData]); // Add new review to the list
    setNewReview({
      title: "",
      location: "",
      rating: "",
      verified: false,
      date: "",
    }); // Reset form
  };

  // Carousel responsive settings
  const responsive = {
    superLargeDesktop: {
      // screens > 4000px
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      // screens > 1024px
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      // screens > 600px
      breakpoint: { max: 1024, min: 600 },
      items: 1,
    },
    mobile: {
      // screens <= 600px
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="app">
      <Header />
      <main className="filter-reviews">
        <div>
          <div className="filters">
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={filters.location}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="rating"
              placeholder="Rating"
              value={filters.rating}
              onChange={handleInputChange}
            />
            <select
              name="verified"
              value={filters.verified}
              onChange={handleInputChange}
            >
              <option value="">Verified</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <input
              type="date"
              name="date"
              value={filters.date}
              onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          arrows={false}
          className="reviews-carousel"
        >
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <h3>{review.title}</h3>
              <p className="review-location">{review.location}</p>
              <p className="review-rating">Rating: {review.rating}</p>
              <p className="review-verified">
                {review.verified ? "Verified" : "Not Verified"}
              </p>
              <p className="review-date">
                {new Date(review.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </Carousel>

        <div className="add-review-form">
          <h2>Add a New Review</h2>
          <input
            type="text"
            name="title"
            placeholder="Review Title"
            value={newReview.title}
            onChange={handleReviewChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={newReview.location}
            onChange={handleReviewChange}
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating"
            value={newReview.rating}
            onChange={handleReviewChange}
          />
          <select
            name="verified"
            value={newReview.verified}
            onChange={handleReviewChange}
          >
            <option value={false}>Not Verified</option>
            <option value={true}>Verified</option>
          </select>
          <input
            type="date"
            name="date"
            value={newReview.date}
            onChange={handleReviewChange}
          />
          <button onClick={handleAddReview}>Add Review</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
