import express, { Express, Request, Response, NextFunction } from 'express';
const app: Express = express();
import dotenv from 'dotenv';
// Import routes
import { usersRouter } from './routes/users.router'; 
import { postsRouter } from './routes/posts.router';

dotenv.config();
app.use(express.json());
app.use('/api/users', usersRouter);
app.use('/api', postsRouter);

const port = process.env.PGPORT; 

app.listen(port, () => console.log( 'App running on port: ', port ));
