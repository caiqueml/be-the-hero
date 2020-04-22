const cors = require ('cors')

const express = require('express') // Import express to a variable
const { errors } = require('celebrate')
const routes = require('./routes')

const app = express();

app.use(cors())

app.use(express.json()) // 'Diz' para o EXPRESS que está sendo usado JSON

app.use(routes)

app.use(errors())
/*
    Rota / Recurso
*/

/*
    Metodos HTTP:
    - GET: Busca uma informação no back-end
    - POST: Cria uma informação no back-end
    - PUT: Altera uma informação no back-end
    - DELETE: Deleta uma informação do back-end
*/

/*
    Tipos de Parametos:
    QUERY Params: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação)
    ROUTE Params: Parâmetros utilizados para identificar recursos (Nomear os recursos)
    REQUEST BODY: Corpa da requisição (é utilizado para criar ou alterar usuários)
*/

/*
    Tipos de DB:
    - SQL: MySQL, SQLite, PostgreSQL, Oracle, Mocrosoft SQL Server
    - NoSQL: MongoDB, CouchDB...
*/

/*
    Modos de conexão do Banco:
    - DRIVER: SELECT * FROM... (Query do banco)
    - QUERY BUILDER: table('users').select('*').where...
*/

app.listen(3333)