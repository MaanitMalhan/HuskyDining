import express from 'express'
import { getStudent, getStudents } from './server.js'

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

app.use((err, req, res,next) =>{
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(8080, () =>{
    console.log('server is running on port 8080')
})