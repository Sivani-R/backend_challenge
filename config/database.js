const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:'); // In-memory database for simplicity

db.serialize(() => {
    db.run(`
        CREATE TABLE products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            price REAL NOT NULL,
            quality INTEGER NOT NULL
        )
    `);
});

module.exports = db;
