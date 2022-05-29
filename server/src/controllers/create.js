require('dotenv').config()
const mongoose = require('mongoose')
const { Person } = require('../schema')

const addName = async (name, age) => {
	await mongoose.connect(process.env.MONGODB_URI)
	new Person()
	await Person.create({
		name,
		age
	})
}

module.exports = {
	addName
}