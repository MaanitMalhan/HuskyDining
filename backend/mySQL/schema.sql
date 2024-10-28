CREATE DATABASE dining_hall;
USE dining_hall;

CREATE TABLE students (
    peoplesoft INT NOT NULL AUTO_INCREMENT,
    netid VARCHAR(255) NOT NULL,
    password VARCHAR(255) DEFAULT 'password',
    name VARCHAR(255) NOT NULL,
    points INT,
    flex_passes INT,
    PRIMARY KEY (peoplesoft)
);


-- INSERT INTO students (netid, name, points, flex_passes)
-- VALUES
-- ('fha60182', 'John Doe', 200, 40),
-- ('vjah2145', 'Jane Doe', 200, 40);