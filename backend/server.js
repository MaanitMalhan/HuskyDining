//server.js
import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const dining_hall = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: "dining_hall"
}).promise()

const ledger_db = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: "ledger_db"
}).promise();

const auth_db = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: "auth_db"
}).promise();

export async function getStudents(){
    const [rows] = await dining_hall.query(`SELECT * FROM students`)
    return rows
}

export async function getStudent(peoplesoft){
    const [rows]  = await dining_hall.query(`
    SELECT * FROM students 
    WHERE peoplesoft = ?`, [peoplesoft])
    return rows[0]
}

export async function createTransaction(requesterId, recipientId, transactionType, requestType, amount) {
    // Check if the requester exists
    const [requesterRows] = await dining_hall.query(
        `SELECT * FROM students WHERE peoplesoft = ?`,
        [requesterId]
    );
    if (requesterRows.length === 0) {
        throw new Error("Requester not found");
    }

    const requester = requesterRows[0];

    // Verify if the requester has sufficient funds
    if (requestType === 'points' && requester.points < amount) {
        throw new Error("Requester has insufficient points");
    }
    if (requestType === 'flex_pass' && requester.flex_passes < amount) {
        throw new Error("Requester has insufficient flex passes");
    }

    // Check if the recipient exists
    const [recipientRows] = await dining_hall.query(
        `SELECT * FROM students WHERE peoplesoft = ?`,
        [recipientId]
    );
    if (recipientRows.length === 0) {
        throw new Error("Recipient not found");
    }

    // Create a new request
    const [result] = await dining_hall.query(
        `INSERT INTO requests (requester_id, recipient_id, transaction_type, request_type, amount) VALUES (?, ?, ?, ?, ?)`,
        [requesterId, recipientId, transactionType, requestType, amount]
    );
    return { requestId: result.insertId, status: "pending" };
}

export async function acceptTransaction(requestId) {
    // Get request details
    const [requestRows] = await dining_hall.query(
        `SELECT * FROM requests WHERE id = ? AND status = 'pending'`,
        [requestId]
    );

    if (requestRows.length === 0) {
        throw new Error("Request not found or already processed.");
    }

    const { requester_id, recipient_id, transaction_type, request_type, amount } = requestRows[0];

    // Verify users
    const [requesterRows] = await dining_hall.query(`SELECT * FROM students WHERE peoplesoft = ?`, [requester_id]);
    const [recipientRows] = await dining_hall.query(`SELECT * FROM students WHERE peoplesoft = ?`, [recipient_id]);

    if (requesterRows.length === 0) {
        throw new Error("Requester not found");
    }
    if (recipientRows.length === 0) {
        throw new Error("Recipient not found");
    }

    const requester = requesterRows[0];
    const recipient = recipientRows[0];

    if (transaction_type === 'donate') {
        // For donations: deduct from requester, add to recipient
        if (request_type === 'points') {
            if (requester.points < amount) throw new Error("Requester has insufficient points");
            await dining_hall.query(`UPDATE students SET points = points - ? WHERE peoplesoft = ?`, [amount, requester_id]);
            await dining_hall.query(`UPDATE students SET points = points + ? WHERE peoplesoft = ?`, [amount, recipient_id]);
        } else if (request_type === 'flex_pass') {
            if (requester.flex_passes < amount) throw new Error("Requester has insufficient flex passes");
            await dining_hall.query(`UPDATE students SET flex_passes = flex_passes - ? WHERE peoplesoft = ?`, [amount, requester_id]);
            await dining_hall.query(`UPDATE students SET flex_passes = flex_passes + ? WHERE peoplesoft = ?`, [amount, recipient_id]);
        }
    } else if (transaction_type === 'request') {
        // For requests: deduct from recipient, add to requester
        if (request_type === 'points') {
            if (recipient.points < amount) throw new Error("Recipient has insufficient points");
            await dining_hall.query(`UPDATE students SET points = points - ? WHERE peoplesoft = ?`, [amount, recipient_id]);
            await dining_hall.query(`UPDATE students SET points = points + ? WHERE peoplesoft = ?`, [amount, requester_id]);
        } else if (request_type === 'flex_pass') {
            if (recipient.flex_passes < amount) throw new Error("Recipient has insufficient flex passes");
            await dining_hall.query(`UPDATE students SET flex_passes = flex_passes - ? WHERE peoplesoft = ?`, [amount, recipient_id]);
            await dining_hall.query(`UPDATE students SET flex_passes = flex_passes + ? WHERE peoplesoft = ?`, [amount, requester_id]);
        }
    } else {
        throw new Error("Invalid transaction type");
    }

    // Mark the request as accepted
    await dining_hall.query(`UPDATE requests SET status = 'accepted' WHERE id = ?`, [requestId]);

    return { requestId, status: "accepted" };
}

export async function getTransaction(transactionID) {
    const [rows]  = await dining_hall.query(`
    SELECT * FROM requests 
    WHERE id = ?`, [transactionID])
    return rows[0]
}


export async function getReviews() {
    const [reviews] = await dining_hall.query("SELECT * FROM reviews");
    return reviews.reduce((acc, review) => {
      if (!acc[review.diningHall]) acc[review.diningHall] = [];
      acc[review.diningHall].push(review);
      return acc;
    }, {});
  }

export async function addReview(diningHall, reviewText, rating) {
    await dining_hall.query(
        "INSERT INTO reviews (diningHall, reviewText, rating) VALUES (?, ?, ?)",
        [diningHall, reviewText, rating]
    );
    const [updatedReviews] = await dining_hall.query("SELECT * FROM reviews");
    return updatedReviews.reduce((acc, review) => {
        if (!acc[review.diningHall]) acc[review.diningHall] = [];
        acc[review.diningHall].push(review);
        return acc;
    }, {});
}


// Function to add a new student
export async function addStudent({ netid, name, points, flex_passes }) {
    const [result] = await dining_hall.query(`
    INSERT INTO students (netid, name, points, flex_passes)
    VALUES (?, ?, ?, ?)`, [netid, name, points, flex_passes]);
    return result.insertId;
}

// Function to update a student
export async function updateStudent(peoplesoft, { points, flex_passes }) {
    const [result] = await dining_hall.query(`
    UPDATE students 
    SET points = ?, flex_passes = ? 
    WHERE peoplesoft = ?`, [points, flex_passes, peoplesoft]);
    return result.affectedRows;
}

// Function to delete a student
export async function deleteStudent(peoplesoft) {
    const [result] = await dining_hall.query(`
    DELETE FROM students 
    WHERE peoplesoft = ?`, [peoplesoft]);
    return result.affectedRows;
}
