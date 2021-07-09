const Database = require('./config')

const initDb = {
    async init() {
        const db = await Database()

        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT
        )`);

        db.exec(``)
    }
}

initDb.init()

CREATE TABLE questions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    TITU
)