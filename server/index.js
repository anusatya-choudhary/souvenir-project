import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
//Import the routes
import postRoutes from './routes/post.js';

dotenv.config();
const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true }));
app.use(cors());

//Add the middle layer
app.use('/posts', postRoutes);
//localhost:3000/posts, the /posts is added to the URL

app.get('/', (req, res) => {
    res.send('Hello to Memories API')
});

//For Database, we are using mongoDB
//https://www.mongodb.com/cloud/atlas

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

