module.exports = {
    create(req, res) {
        let roomId = 0

        for(var i = 0; i < 6; i++) {
            roomIdMath.floor(Math.random() * 10)
        }

        res.redirect(`/room/${roomId}`)
    }
}