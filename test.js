const Sequelize = require("sequelize");
const sequelize = new Sequelize('test', 'root', 'rmm112805', {
    host: "localhost",
    dialect: 'mysql'
});

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },

    conteudo: {
        type: Sequelize.TEXT
    }
})

// Postagem.create({
//     titulo: "Olá Mundo",
//     conteudo: "KK, eae men"
// })

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

// Usuario.sync({force: true})

Usuario.create({
    nome: "Rafael",
    sobrenome: "Delforge",
    idade: 13,
    email: "rafadevvv@gmail.com"
})