CREATE DATABASE ledger_db;
USE dining_hall;

CREATE TABLE users (
    TransactionID INT PRIMARY KEY AUTO_INCREMENT,         -- Unique ID for each transaction
    netid VARCHAR(100) UNIQUE NOT NULL,            -- User's netID (unique)
    transaction_type ENUM('deposit', 'transfer') NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    LastName VARCHAR(50),
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
);


