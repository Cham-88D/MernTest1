import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import todosRoutes from './routes/todos.js';
const app = express();
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use('/todos', todosRoutes)
const mongodb = 'mongodb://127.0.0.1:27017/item-databse'
app.get('/', (req, res) => {
    res.send('Welcome to server')
})
const PORT =  5000;
mongoose.connect(mongodb, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => app.listen(5000, () => console.log(`server is running on port ${PORT}`))).catch(err => console.log(err))

