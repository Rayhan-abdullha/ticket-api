require('dotenv').config('../.env')
const express = require('express')

const {errorHandler, errorController} = require('./error')
const app = express()

app.use(require('./middleware'))
app.use(require('./routes'))
app.use(errorHandler)
app.use(errorController)

module.exports = app