const Database = require('./config')

const initDb = {
    async init() {
        const db = await Database()

        await db.exec(``)
    }
}

initDb.init()

CREATE TABLE rooms (
    id INTEGER
)