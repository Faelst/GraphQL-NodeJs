const { Usuario, Perfil } = require("../Data/db");

module.exports = {
  usuarios() {
    return Usuario;
  },
  usuario(_, { id }) {
    const sels = Usuario.filter((u) => u.id === id);
    return sels ? sels[0] : null;
  },
  ola() {
    return "RESOLVER OLA";
  },
  dateTime() {
    return `${new Date()}`;
  },
  usuarioLogado() {
    return {
      id: 1,
      age: 23,
      salario_real: 1234,
      vip: true,
    };
  },
  featuredProduct() {
    return { name: "ps3", price: 3500 };
  },
  featuredProducts() {
    return [
      { name: "ps3", price: 1000, offer: 100 },
      { name: "ps3", price: 1000, offer: 80 },
      { name: "ps3", price: 1000, offer: 90 },
      { name: "ps3", price: 1000, offer: 70 },
      { name: "ps3", price: 1000, offer: 60 },
    ];
  },
  megaSena() {
    return numeros((maior, menor) => maior - menor);
  },
  perfils() {
    return Perfil;
  },
  perfil(_, { id }) {
    const select = Perfil.filter((e) => e.id === parseInt(id));
    return select ? select[0] : null;
  },
};
