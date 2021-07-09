module.exports = {
    create(req, res) {
        let roomId = 123456

        Math.floor(Math.random() * 10)

        res.redirect(`/room/${roomId}`)
    }
}