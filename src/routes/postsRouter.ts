import express from 'express';

export const postsRouter = express.Router();

postsRouter.post('posts/', (req, res)=> {
	console.log('req: ', req);
	res.status(200).send('got your req at ');
});
postsRouter.get('posts/', (req, res)=> {
	console.log('req: ', req);
	res.status(200).send('got your req at ');
});
postsRouter.get('posts/:id', (req, res)=> {
	console.log('req: ', req);
	res.status(200).send('got your req at ');
});
postsRouter.patch('post/:id', (req, res)=> {
	console.log('req: ', req);
	res.status(200).send('got your req at ');
});
postsRouter.delete('post/:id', (req, res)=> {
	console.log('req: ', req);
	res.status(200).send('got your req at ');
});