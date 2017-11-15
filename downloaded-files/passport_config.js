const
	passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	User = require('../models/User.js')

// every request will attempt to extract the current user's id,
// and serialize it to put it into a cookie 🍪
passport.serializeUser((user, done) => {
	done(null, user.id)
})

// every request will also attempt to read a provided cookie
// grab the id within, and identify the user it belongs to 🤷‍
passport.deserializeUser((id, done) => {
	User.findById(id, (err, user) => {
		done(err, user)
	})
})

passport.use('local-signup', new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password',
	passReqToCallback: true
}, (req, email, password, done) => {
	User.findOne({email: email}, (err, user) => {
		if(err) return done(err)
		if(user) return done(null, false)
		var newUser = new User(req.body)
		newUser.password = newUser.generateHash(password)
		newUser.save((err) => {
			if(err) return console.log(err)
			return done(null, newUser)
		})
	})
}))

passport.use('local-login', new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password',
	passReqToCallback: true
}, (req, email, password, done) => {
	User.findOne({email: email}, (err, user) => {
		if(err) return done(err)
		// if no user found or password is invalid:
		if(!user || !user.validPassword(password)) {
			return done(null, false)
		}

		// if it gets to this, it means they logged in successfully:
		return done(null, user)
	})
}))

module.exports = passport