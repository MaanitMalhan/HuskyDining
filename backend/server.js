//server.js
import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export async function getStudents(){
    const [rows] = await pool.query(`SELECT * FROM students`)
    return rows
}

export async function getStudent(peoplesoft){
    const [rows]  = await pool.query(`
    SELECT * FROM students 
    WHERE peoplesoft = ?`, [peoplesoft])
    return rows[0]
}

export async function getReviews() {
    const [reviews] = await pool.query("SELECT * FROM reviews");
    return reviews.reduce((acc, review) => {
      if (!acc[review.diningHall]) acc[review.diningHall] = [];
      acc[review.diningHall].push(review);
      return acc;
    }, {});
  }

export async function addReview(diningHall, reviewText, rating) {
    await pool.query(
        "INSERT INTO reviews (diningHall, reviewText, rating) VALUES (?, ?, ?)",
        [diningHall, reviewText, rating]
    );
    const [updatedReviews] = await pool.query("SELECT * FROM reviews");
    return updatedReviews.reduce((acc, review) => {
        if (!acc[review.diningHall]) acc[review.diningHall] = [];
        acc[review.diningHall].push(review);
        return acc;
    }, {});
}

// const students = await getStudent(1)
// console.log(students)