const { usuarios, proximoId, perfis } = require("../../data/db");

function indecePerfil(filtro) {
  const { id, nome } = filtro;
  if (id) {
    return perfis.findIndex((u) => u.id === id);
  } else if (nome) {
    return perfis.findIndex((u) => u.nome === nome);
  }
  return -1;
}

module.exports = {
  excluirPerfil(_, { filtro }) {
    const index = indecePerfil(filtro);
    if (index < 0) return null;
    const excluido = perfis.splice(index, 1);
    return excluido ? excluido[0] : null;
  },

  alterarPerfil(_, { filtro, dados }) {
    const index = indecePerfil(filtro);

    if (index < 0) return null;

    const perfil = {
      ...perfis[index],
      ...dados,
    };

    perfis.splice(index, 1, perfil);
    return perfis[index];
  },

  novoPerfil(_, { dados }) {
    const { id, nome } = dados;
    
    const idCadastrado = perfis.some((u) => u.id === id);
    
    if(idCadastrado) throw new Error("Id ja cadastrado");

    const novoPerfil = {
      ...dados
    }

    perfis.push(novoPerfil)
    return { ...dados }
  },
};
