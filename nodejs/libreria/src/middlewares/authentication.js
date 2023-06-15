const passport = require('passport');

// middleware para validacion de autenticacion
const isAuthenticated = (req, res, next) => {
    passport.authenticate('jwt', {session: false}, (err, user,library, info) => {
        console.log('Validando autenticacion')

        if(err || !user) {
            const error = new Error("Usuario no autorizado")

            return next(error)
        }
        if(err || !library) {
            const error = new Error("Library no autorizada")

            return next(error)
        }

        next()
    })(req, res, next)
}

module.exports = { isAuthenticated }