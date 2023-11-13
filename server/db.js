const MySql = require("mysql");


const pool = MySql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'c1255197037',
    database: 'myapp'

});



module.exports = pool;