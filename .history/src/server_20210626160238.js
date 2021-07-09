const express = require('express')
const route = require('./route')

const server = express()

server.set('view engine', 'ejs')

server.set('vi')

server.use(route)

server.listen(3000, () => console.log('Rodando'))