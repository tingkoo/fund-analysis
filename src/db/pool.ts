import config from 'config';
import mysql from 'mysql2';

function connect() {
    return mysql.createPool({
        host: config.get('db_host') as string,
        database: config.get('db_name') as string,
        user: config.get('db_user') as string,
        password: config.get('db_passwd') as string,
        connectionLimit: config.get('db_limit') as number,
    }).promise();
}

const promistPool = connect();

export default promistPool;