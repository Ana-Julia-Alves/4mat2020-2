const mongoose = require('mongoose')

const esquema = mongoose.Schema({
<<<<<<< HEAD
=======
    cliente: {
        type: String,
        required: true  // Atributo obrigatório
    },
>>>>>>> 7fec4ffed3e07a3e15cb90a22aa05701babf732d
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
<<<<<<< HEAD
    cliente:{type:mongoose.ObjectId, ref:'Cliente', required: true}
=======
    pedido:{type:mongoose.ObjectId, ref:'cliente', required: true}
>>>>>>> 7fec4ffed3e07a3e15cb90a22aa05701babf732d
})

// PARÂMETROS DO mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
//       criados a partir deste model (inicial minúscula, plural do
//       nome do model)
module.exports = mongoose.model('Pedido', esquema, 'pedidos')