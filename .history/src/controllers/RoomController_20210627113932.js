module.exports = {
    create(req, res) {
        let roomId = 123456

        for(var i = 0; i < 6)
        Math.floor(Math.random() * 10)

        res.redirect(`/room/${roomId}`)
    }
}