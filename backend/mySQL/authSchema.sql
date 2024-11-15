CREATE DATABASE auth_db;
USE auth_db;

CREATE TABLE transactions (
    TransactionID INT PRIMARY KEY AUTO_INCREMENT,
    netid VARCHAR(100) NOT NULL,
    transaction_type ENUM('deposit', 'transfer') NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (netid) REFERENCES students(netid)
);
