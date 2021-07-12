const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}))

route.get('/room/:room', RoomController.open)
route.post('/create-room', RoomController.create)

route.
route.post('/question/:room/:question/:action', QuestionController.index)

module.exports = route