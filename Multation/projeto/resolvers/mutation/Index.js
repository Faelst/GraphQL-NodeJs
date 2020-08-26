const perfil = require('./Perfil')
const usuario = require('./Usuario')


module.exports = {
    ...usuario,
    ...perfil,
 }