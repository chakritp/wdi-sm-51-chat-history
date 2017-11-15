//user model
const
	mongoose = require('mongoose'),
	bcrypt = require('bcrypt-nodejs'),
	userSchema = new mongoose.Schema({
		name: String,
		email: String,
		password: String
	})

userSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}

userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password)
}

	module.exports = mongoose.model('User', userSchema)