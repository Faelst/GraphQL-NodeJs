
const { Perfil  } = require('../Data/db')

module.exports = {
    salario(usuario) {
        return usuario.salario_real
    },
    perfil(usuario) {
        const sels = Perfil
            .filter(p => p.id === usuario.perfil_id)
        return sels ? sels[0] : null
    }
}