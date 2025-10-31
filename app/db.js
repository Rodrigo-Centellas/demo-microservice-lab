import pg from 'pg';

export const pool = new pg.Pool({
    user:process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database:process.env.DATABASE,
    ssl: { rejectUnauthorized: false } 
})


// pool.query('SELECT * FROM users LIMIT 1')
//   .then(result => console.log(result.rows))
//   .catch(err => console.error(err));