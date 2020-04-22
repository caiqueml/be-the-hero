const express = require('express')
const { celebrate, Segments, Joi} = require('celebrate')

const OngContoller = require('./controllers/OngContoller')
const IncidentContoller = require('./controllers/IncidentContoller')
const ProfileContoller = require('./controllers/ProfileContoller')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

// Rotas para Login
routes.post('/sessions', SessionController.create)

// Rotas Ong
routes.get('/ongs', OngContoller.index)

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), OngContoller.create)

// Rotas Incidents
routes.post('/incidents', celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().greater(0)
    })
}),IncidentContoller.create)

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), IncidentContoller.index)

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), IncidentContoller.delete)

// Rotas Incidents expecífica por ong
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), ProfileContoller.index)

module.exports = routes