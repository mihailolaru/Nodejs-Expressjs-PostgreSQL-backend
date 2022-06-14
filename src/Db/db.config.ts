import { Client } from 'pg';

export const client = new Client({
	user: 'postgres',
	host: 'localhost',
	database: 'expressTest',
	password: 'password',
	port: 5432,
});