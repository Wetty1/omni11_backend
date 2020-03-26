const connetion = require('../database/connection')
const crypto = require('crypto') 

module.exports = {
    async store(req, res) {
        const { name, email, whatsapp, city, uf } = req.body

        const id = crypto.randomBytes(4).toString('HEX')
    
        await connetion('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
    
        return res.json({ id })
    },
    async index(req,res) {
        const ongs = await connetion('ongs').select('*')

        return res.json(ongs)
    }
}