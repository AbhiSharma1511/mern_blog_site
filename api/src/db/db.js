import mysql from 'mysql'

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'pageofwonder'
});
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql Connected...');
});

export default db;