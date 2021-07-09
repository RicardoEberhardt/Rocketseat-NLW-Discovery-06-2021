const express = require('express')
const route = require('./route')
const path = require

const server = express()

server.set('view engine', 'ejs')

server.set('views', )

server.use(route)

server.listen(3000, () => console.log('Rodando'))