const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    forma_pgto: {
        type: String,
        required: true,  // Atributo obrigatório
        enum: ['Cartão de Crédito', 'Cartão de Débito', 'Dinheiro']
    },
    valor_pedido: {
        type: Number,
        required: true
    },
    nome_cliente: {
        type: String,
        required: true  // Atributo obrigatório
    }
})

// PARÂMETROS DO mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
//       criados a partir deste model (inicial minúscula, plural do
//       nome do model)
module.exports = mongoose.model('Pagamento', esquema, 'pagamentos')