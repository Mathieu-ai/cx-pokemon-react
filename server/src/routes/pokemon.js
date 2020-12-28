const { Router } = require('express')
const pokemons = require('../data/pokemons')

const router = Router()

// :: GET /pokemons -> Get all pokemons

router.get('/', (req, response) => {
    let rc = pokemons.find(pokemon => pokemon.numéro == req.params.id);
    return response.send(rc)   
    
})

module.exports = router