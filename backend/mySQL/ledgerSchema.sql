CREATE DATABASE ledger_db;

USE ledger_db;

CREATE TABLE IF NOT EXISTS users (
    TransactionID INT PRIMARY KEY AUTO_INCREMENT,         -- Unique ID for each transaction
    netid VARCHAR(100) NOT NULL,            -- User's netID (unique)
    transaction_type ENUM('deposit', 'transfer') NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    LastName VARCHAR(50),
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


