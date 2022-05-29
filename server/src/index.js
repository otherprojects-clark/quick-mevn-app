require('dotenv').config()
const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const mongoose = require('mongoose')
const { addName } = require('./controllers/create')

const port = process.env.PORT

const app = express()

app.use([
	cors(), 
	logger('dev'), 
	express.json()
])

app.get('/', (req, res) => {
	res.send('Hello world')
})

app.post('/submit', async (req, res) => {
	console.log(req.body)
	res.sendStatus(200)
	await addName(req.body.name, req.body.age).finally(() => { mongoose.disconnect() })
})

app.listen(port, () => {
	console.log("server listening at port",port)
})