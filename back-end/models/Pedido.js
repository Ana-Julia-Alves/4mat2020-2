const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    cliente: {
        type: String,
        required: true  // Atributo obrigatório
    },
    num_pedido: {
        type: Number,
        required: true
    },
    data: {
        type: Date,
        required: true
    },
    hora: {
        type: String,
        required: true
    },
    pedido: {
        type: String,
        required: true
    },
    cliente:{type:mongoose.ObjectId, ref:'Cliente', required: true}

})

// PARÂMETROS DO mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
//       criados a partir deste model (inicial minúscula, plural do
//       nome do model)
module.exports = mongoose.model('Pedido', esquema, 'pedidos')