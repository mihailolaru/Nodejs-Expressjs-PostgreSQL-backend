import express, { Request, Response, NextFunction } from 'express';
const app = express();

// Import routes
import { usersRouter } from './routes/users.router'; 
import { postsRouter } from './routes/posts.router';


app.use(express.json());
app.use('/api/users', usersRouter);
app.use('/api', postsRouter);

const port = process.env.PORT; 

app.listen(port, ()=>console.log( 'App running on port: ', port ));
