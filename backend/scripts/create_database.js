import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()
var dbconfig = require('../config/database');

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

await pool.query('CREATE DATABASE ' + dbconfig.database)

await pool.query('')

pool.log('Success: Database Created!')

pool.end()