const Database = require("../db/config")

module.exports = {
    async create(req, res) {
        const db = await Database()
        const pass = req.body.password
        let roomId
        let isRoom = true

        while(isRoom) {

        }

        


        const roomsExistIds = await db.all(`SELECT id FROM rooms`)

        let isRoom = roomsExistIds.some(roomExistId => roomExistId === roomId)

        if(! roomsExistIds) {
            await db.run(`INSERT INTO rooms (
                id,
                pass
            ) VALUES (
                ${parseInt(roomId)},
                ${pass}
            )`)
        }

        

        await db.close()

        res.redirect(`/room/${roomId}`)
    }
}