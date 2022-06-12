import express, { Request, Response, NextFunction } from 'express';
import { usersRouter } from './routes/usersRouter'; 
import { postsRouter } from './routes/postsRouter';
const app = express();

app.use(express.json());
app.use('/', usersRouter);
app.use('/', postsRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	console.log('Error handler');
	res.status(401).send(err.message);
})

const port = process.env.PORT; 

app.listen(port, ()=>console.log( 'app running on port: ', port ));
