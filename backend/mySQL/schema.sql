CREATE DATABASE dining_hall;
USE dining_hall;

CREATE TABLE IF NOT EXISTS students (
    peoplesoft INT NOT NULL AUTO_INCREMENT,
    netid VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    points INT DEFAULT 0,
    flex_passes INT DEFAULT 0,
    PRIMARY KEY (peoplesoft)
);

CREATE TABLE IF NOT EXISTS reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    diningHall VARCHAR(100) NOT NULL, 
    reviewText TEXT NOT NULL,
    rating TINYINT CHECK (rating >= 1 AND rating <= 5), 
    reviewerName VARCHAR(100),  -- Optional reviewer name
    reviewDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- INSERT INTO students (netid, name, points, flex_passes)
-- VALUES
-- ('fha60182', 'John Doe', 200, 40),
-- ('vjah2145', 'Jane Doe', 200, 40);

-- Json for fake data to Post
{
    "diningHall": "Dining Hall",
    "reviewText": "The food was great, but the service could be improved.",
    "rating": 4,
    "reviewerName": "John Doe"
}

{
    "diningHall": "Dining Hall",
    "reviewText": "The food was great, but the service could be improved.",
    "rating": 5,
    "reviewerName": "Jane Doe"
}
