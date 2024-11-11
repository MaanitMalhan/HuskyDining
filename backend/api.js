//api.js
import express from 'express'
import { getStudent, getStudents } from './server.js'
import { getReviews, addReview } from './server.js';

const app = express()
app.use(express.json());

app.get('/api/students', async (req, res) =>{
    const notes = await getStudents()
    res.send(notes)
})

app.get('/api/students/:peoplesoft', async (req, res) =>{
    const peoplesoft = req.params.peoplesoft
    const student = await getStudent(peoplesoft)
    res.send(student)
} )

app.get("/api/reviews", async (req, res) => {
    try {
        const reviews = await getReviews();
        res.json(reviews);
    } catch (error) {
        console.error("Error fetching reviews:", error);
        res.status(500).json({ error: "Failed to fetch reviews" });
    }
});

app.post("/api/reviews", async (req, res) => {
    const { diningHall, reviewText, rating } = req.body;
    try {
        const updatedReviews = await addReview(diningHall, reviewText, rating);
        res.json(updatedReviews);
    } catch (error) {
        console.error("Error submitting review:", error);
        res.status(500).json({ error: "Failed to submit review" });
    }
});

app.use((err, req, res,next) =>{
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(8080, () =>{
    console.log('server is running on port 8080')
})