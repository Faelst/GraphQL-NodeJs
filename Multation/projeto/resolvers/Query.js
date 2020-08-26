const { usuarios, perfis } = require('../data/db')

function indiceUsuario(filtro){
    if(!filtro) return -1
    const {id , nome , email} = filtro
    if(id){
      return usuarios.findIndex(u => u.id === id)
    }else if(nome){
      return usuarios.findIndex(u => u.nome === nome)
    }
    return -1
  }

function indecePerfil(filtro){
    if(!filtro) return -1
    const {id , nome} = filtro
    if(id){
        return perfis.findIndex(u => u.id === id)
    }else if(nome){
        return perfis.findIndex(u => u.nome === nome)
    }else{  
        return -1
    }
}

module.exports = {
    usuarios() {
        return usuarios
    },
    usuario(_, { filtro }) {
        const i = indiceUsuario(filtro)
        if(i < 0 ) return null
        return usuarios[i]
    },
    perfis() {
        return perfis
    },
    perfil(_, { filtro }) {
        const index = indecePerfil(filtro)
        if(indecePerfil == -1) return null
        return perfis[index]
    }
}