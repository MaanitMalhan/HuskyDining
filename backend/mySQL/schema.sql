CREATE DATABASE dining_hall;
USE dining_hall;

CREATE TABLE students(
    peoplesoft integer PRIMARY KEY AUTO_INCREMENT,
    netid VARCHAR(255),
    name VARCHAR(255) NOT NULL,
    points integer,
    flex_passes integer
);

-- INSERT INTO students (netid, name, points, flex_passes)
-- VALUES
-- ('vfsdn1234', 'John Doe', 200, 40),
-- ('krvj1234', 'Jane Doe', 200, 40);