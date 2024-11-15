CREATE DATABASE auth_db;
USE auth_db;

CREATE TABLE users (
    UserID INT PRIMARY KEY AUTO_INCREMENT,         -- Unique ID for each user
    netid VARCHAR(100) UNIQUE NOT NULL,            -- User's email (unique)
    PasswordHash VARCHAR(255) NOT NULL,            -- Hashed password
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Timestamp of when the user was created
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- Timestamp of last update
);

