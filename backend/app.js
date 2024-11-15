import express from 'express';
import { getStudent, getStudents, addStudent, updateStudent, deleteStudent } from './server.js';

const app = express()

app.get('/students', async (req, res) =>{
    const notes = await getStudents()
    res.send(notes)
})

app.get('/students/:peoplesoft', async (req, res) =>{
    const peoplesoft = req.params.peoplesoft
    const student = await getStudent(peoplesoft)
    res.send(student)
} )

// Add a new student
app.post('/students', async (req, res, next) => {
    try {
        const { netid, name, points, flex_passes } = req.body;
        const newStudentId = await addStudent({ netid, name, points, flex_passes });
        res.status(201).json({ message: 'Student added successfully', id: newStudentId });
    } catch (err) {
        next(err);
    }
});

// Update a student's points and flex passes
app.put('/students/:peoplesoft', async (req, res, next) => {
    try {
        const peoplesoft = req.params.peoplesoft;
        const { points, flex_passes } = req.body;
        const affectedRows = await updateStudent(peoplesoft, { points, flex_passes });
        if (affectedRows) {
            res.json({ message: 'Student updated successfully' });
        } else {
            res.status(404).json({ message: 'Student not found' });
        }
    } catch (err) {
        next(err);
    }
});

// Delete a student
app.delete('/students/:peoplesoft', async (req, res, next) => {
    try {
        const peoplesoft = req.params.peoplesoft;
        const affectedRows = await deleteStudent(peoplesoft);
        if (affectedRows) {
            res.json({ message: 'Student deleted successfully' });
        } else {
            res.status(404).json({ message: 'Student not found' });
        }
    } catch (err) {
        next(err);
    }
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something broke!', error: err.message });
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
