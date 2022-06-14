import express from 'express';
export const usersRouter = express.Router(); 
import { authCheckMiddleware } from '../middleware/auth.middleware';
import { createUserController, getUserInfoController, signInController } from '../controllers/auth.controller';

usersRouter.post( '/sign-up', createUserController);

usersRouter.post( '/sign-in', authCheckMiddleware, signInController );

//usersRouter.get('/me', authCheckMiddleware, getUserInfoController);
usersRouter.get('/me', (req, res) => { 
	console.log('req: ', req);
	console.log('res: ', res);
	res.status(200).send("got the info");	
});


