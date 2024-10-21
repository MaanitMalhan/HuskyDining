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