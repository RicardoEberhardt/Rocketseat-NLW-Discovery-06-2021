const express = require('express')
const route = require('./')

const server = express()

server.listen(3000, () => console.log('Rodando'))