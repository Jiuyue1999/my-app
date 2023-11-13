const express = require("express");
const app = express();
const port = 7000;
const cors = require('cors');
const mysql = require('mysql');
const pool = require('./db.js');


const corsOptions ={
    origin:'http://localhost:3000',
    credentials:true,
    optionSuccessStatus:200
}

app.use(cors(corsOptions));


// Mysql DB connection
pool.getConnection((err,conn) => {
    if(err) throw err;
    const qry = "INSERT INTO book(title, author, price, quantity) VALUES('The Little Prince', 'Antoine de Saint-Exupéry', 11.99, 7)"
    conn.query(qry, (err,result) => {
        conn.release();
        if(err) throw err;
        console.log(result);
    });
});

// set access port
app.use(express.json());
app.listen(port, () => {
    console.log(`RUN http://localhost:${port}`);
});

app.get("/", function(req, res) {
    res.send("Hello WoRlD!")
});

// DROP table if exists, then CREATE
const qrop_books = "DROP TABLE IF EXISTS Books";
const create_books = "CREATE TABLE Books ( \
                        id int NOT NULL AUTO_INCREMENT, \
                        title varchar(255) NOT NULL, \
                        author varchar(255) NOT NULL, \
                        price float, \
                        quantity int, \
                        PRIMARY KEY (Id) );";

// INSERT default data
const item_add1 = "INSERT INTO Books (title, author, price, quantity) VALUES ('The Great Gatsby', 'F. Scott Fitzgerald', 12.99, 10)";
// const item_add2 = "INSERT INTO Item (Item, quantity) VALUES ('product 2', 20)";

// CREATE TABLE
app.get("/create_table", function(req, res) {
    db.query(qrop_books);
    db.query(create_books);
    db.query(item_add1);
    return res.send("created new table!")
})

// GET operation "get_book"
app.get("/get_book", function(req, res) {
    const result = db.query('SELECT * FROM Books');
    return res.send(result)
});

app.post("/update_quantity", function(req, res) {
    var IDs = req.body.id;
    var quantity = req.body.quantity;

    IDs.forEach((id_, index) => {
        const quan = quantity[index];
        const result1 = db.query(`UPDATE Books SET quantity = ${quan} WHERE id = ${id_};`);
    });

    return res.send("success!")
});
