const mongoose = require('mongoose')

const { Schema, model } = mongoose

const schema = new Schema({
	name: String,
	age: Number
})
const Person = model('Person', schema)

module.exports = {
	Person
}
