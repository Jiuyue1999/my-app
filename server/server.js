const express = require("express");
const db = require('./db');
const app = express();
const port = 7000;
const cors = require('cors');

const corsOptions ={
    origin:'http://localhost:3000',
    credentials:true,
    optionSuccessStatus:200
}

app.use(cors(corsOptions));

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
const book_add1 = "INSERT INTO Books (title, author, price, quantity) VALUES ('The Great Gatsby', 'F. Scott Fitzgerald', 12.99, 10)";
const book_add2 = "INSERT INTO Books (title, author, price, quantity) VALUES ('To Kill a Mockingbird', 'Harper Lee', 10.99, 3)";
const book_add3 = "INSERT INTO Books (title, author, price, quantity) VALUES ('Pride and Prejudice', 'Jane Austen', 9.99, 8)";
const book_add4 = "INSERT INTO Books (title, author, price, quantity) VALUES ('Lun Yu', 'Confucius', 19.99, 8)";

// CREATE TABLE
app.get("/create_table", function(req, res) {
    db.query(qrop_books);
    db.query(create_books);
    db.query(book_add1);
    db.query(book_add2);
    db.query(book_add3);
    db.query(book_add4);
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
