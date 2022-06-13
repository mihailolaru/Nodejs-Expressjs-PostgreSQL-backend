import express from 'express';
export const postsRouter = express.Router();
import { authCheckMiddleware, checkAuthorMiddleware } from '../middleware/auth.middleware';
import { createPostController, getAllPostsController, getPostController, updatePostController, deletePostController } from '../controllers/posts.controller';

// body + authorId from token
postsRouter.post( 'posts/', authCheckMiddleware, createPostController );
// List all posts with author
postsRouter.get( 'posts/', getAllPostsController );
postsRouter.get('posts/:id', getPostController );
// Middleware to check if post belong to the author.
postsRouter.patch( 'post/:id', authCheckMiddleware, checkAuthorMiddleware, updatePostController );
postsRouter.delete( 'post/:id', authCheckMiddleware, checkAuthorMiddleware, deletePostController );