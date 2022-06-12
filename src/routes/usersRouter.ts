import express from 'express';

export const usersRouter = express.Router(); 

usersRouter.post('users/sign-up', (req, res) => { 
	console.log(req)
	res.status(200).send('users/sign-up got your post req');
});

usersRouter.post('users/sign-in', (req, res) => { 
	console.log(req)
	res.status(200).send('users/sign-in got your post req');
});

usersRouter.get('users/me', (req, res) => { 
	console.log(req)
	res.status(200).send('users/sign-up got your post req');
});

