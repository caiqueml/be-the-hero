const express = require('express')

const OngContoller = require('./controllers/OngContoller')
const IncidentContoller = require('./controllers/IncidentContoller')
const ProfileContoller = require('./controllers/ProfileContoller')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

// Rotas para Login
routes.post('/sessions', SessionController.create)

// Rotas Ong
routes.get('/ongs', OngContoller.index)

routes.post('/ongs', OngContoller.create)

// Rotas Incidents
routes.post('/incidents', IncidentContoller.create)

routes.get('/incidents', IncidentContoller.index)

routes.delete('/incidents/:id', IncidentContoller.delete)

// Rotas Incidents expecífica por ong
routes.get('/profile', ProfileContoller.index)

module.exports = routes