const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome_cliente: {
        type: String,
        required: true  // Atributo obrigatório
    },
    cpf: {
        type: Number,
        required: true,
        index: {unique: true}
    },
    data_nascimento: {
        type: Number,
        required: true,
    },
    endereco: {
        type: String,
        required: true
    },
    telefone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        index: {unique: true}
    },
    num_pedido: {
        type: Number,
        required: true
    }
})

// PARÂMETROS DO mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
//       criados a partir deste model (inicial minúscula, plural do
//       nome do model)
module.exports = mongoose.model('Cliente', esquema, 'clientes')