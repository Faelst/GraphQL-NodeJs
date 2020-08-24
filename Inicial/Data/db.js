

const Usuario = [
    {
        id: 1,
        nome: "Rafael", 
        perfil_id : 2,
        status:'ATIVO'
    },
    {
        id: 2,
        nome: "Felipe",
        perfil_id : 2,
        status: "INATIVO"
    },
    {
        id: 3,
        nome: "Joao",
        perfil_id : 1,
        status:'BLOQUEADO'
    },
    {
        id: 4,
        nome: "Ana Clara" ,
        perfil_id : 1,
        status:'BLOQUEADO'
    },
    {
        id: 5,
        nome: "Maria Fernanda",
        perfil_id : 1,
        status:'ATIVO'
    },
    {   
        id: 6,
        nome: "Fabio" ,
        perfil_id : 2,
        status:'INATIVO'
    }
]

const Perfil = [
    {id: 1 , nome: "Comun" },
    {id: 2 , nome: "administrador" },
]


module.exports = {Usuario , Perfil}