var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const db = require('./config/database')
const dbUser1 = process.env.DB_USER1
const dbPass1 = process.env.DB_PASS1
const dbName1 = process.env.DB_NAME1
//db(`mongodb+srv://${dbUser}:${dbPass}@cluster0.31jwc.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`)
db(`mongodb+srv://${dbUser1}:${dbPass1}@cluster0.ma571.gcp.mongodb.net/${dbName1}?retryWrites=true&w=majority`)
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Criação de uma nova rota
const teste = require('./routes/teste')
app.use('/teste', teste)

// Rota para cliente
const cliente = require('./routes/cliente')
app.use('/cliente', cliente)
<<<<<<< HEAD

// Rota para pedido
const pedido = require('./routes/pedido')
app.use('/pedido', pedido)

// Rota para secretaria
const secretaria = require('./routes/secretaria')
app.use('/secretaria', secretaria)

// Rota para pagamento
const pagamento = require('./routes/pagamento')
app.use('/pagamento', pagamento)

// Rota para cozinha
const cozinha = require('./routes/cozinha')
app.use('/cozinha', cozinha)

=======

// Rota para pedido
const pedido = require('./routes/pedido')
app.use('/pedido', pedido)

// Rota para secretaria
const secretaria = require('./routes/secretaria')
app.use('/secretaria', secretaria)

// Rota para pagamento
const pagamento = require('./routes/pagamento')
app.use('/pagamento', pagamento)

// Rota para cozinha
const cozinha = require('./routes/cozinha')
app.use('/cozinha', cozinha)

>>>>>>> 7fec4ffed3e07a3e15cb90a22aa05701babf732d
// Rota para confeiteiro
const confeiteiro = require('./routes/confeiteiro')
app.use('/confeiteiro', confeiteiro)

module.exports = app;
