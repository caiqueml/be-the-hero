const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {

    // Lista as ONG já ciradas no Banco 
    async index(request, response){
    const ongs = await connection('ongs').select('*')

    return response.json(ongs)
    },

    // Cria ONG nova no Banco
    async create(request, response){
        const { name, email, whatsapp, city, uf } = request.body

    const id = crypto.randomBytes(4).toString('HEX')
 
    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return response.json({  id })
    }
}