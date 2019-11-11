export default {
    database: {
        host: 'localhost',
        user: 'root',
        password: '12345',
        database: 'dbPractica3', 
    connectionTimeout: 300000,
    requestTimeout: 300000,
    pool: {
        idleTimeoutMillis: 300000,
        max: 100
    }
    }
}