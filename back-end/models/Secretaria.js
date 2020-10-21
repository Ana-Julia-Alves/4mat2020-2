const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome_secretaria: {
        type: String,
        required: true  // Atributo obrigatório
    },
    formacao: {
<<<<<<< HEAD
        type: String,
=======
        type: Number,
>>>>>>> 7fec4ffed3e07a3e15cb90a22aa05701babf732d
        required: true,
        enum: ['Técnico', 'Médio', 'Executivo']
    },
    num_registro: {
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
module.exports = mongoose.model('Secretaria', esquema, 'secretarias')