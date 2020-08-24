const { usuarios, proximoId } = require("../data/db");
const { usuario } = require("./Query");

module.exports = {
  novoUsuario(_, args) {
    const emailExistente = usuarios.some((u) => u.email === args.email);

    if (emailExistente) {
      throw new Error("Email ja cadastrado");
    }

    const novo = {
      id: proximoId(),
      ...args,
      perfil_id: 1,
      status: "ATIVO",
    };
    usuarios.push(novo);
    return novo;
  },

  excluirUsuario(_, { id }) {
    const indexSelecionado = usuarios.findIndex((u) => u.id === id);

    if (indexSelecionado < 0) return null;

    const excluidos = usuarios.splice(indexSelecionado, 1);

    return excluidos ? excluidos[0] : null;
  },

  alterarUsuario(_, args) {
    const indexSelecionado = usuarios.findIndex((u) => u.id === args.id);
    if (indexSelecionado < 0) return null;

    const usuario = {
      ...usuarios[indexSelecionado],
      ...args,
    };
    usuarios.splice(indexSelecionado, 1, usuario);
    return usuario
  },
};
