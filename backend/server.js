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

// const students = await getStudent(1)
// console.log(students)

// Function to add a new student
export async function addStudent({ netid, name, points, flex_passes }) {
    const [result] = await pool.query(`
    INSERT INTO students (netid, name, points, flex_passes)
    VALUES (?, ?, ?, ?)`, [netid, name, points, flex_passes]);
    return result.insertId;
}

// Function to update a student
export async function updateStudent(peoplesoft, { points, flex_passes }) {
    const [result] = await pool.query(`
    UPDATE students 
    SET points = ?, flex_passes = ? 
    WHERE peoplesoft = ?`, [points, flex_passes, peoplesoft]);
    return result.affectedRows;
}

// Function to delete a student
export async function deleteStudent(peoplesoft) {
    const [result] = await pool.query(`
    DELETE FROM students 
    WHERE peoplesoft = ?`, [peoplesoft]);
    return result.affectedRows;
}
