const { Router } = require('express')
const pokemons = require('../data/pokemons')

const router = Router()

// :: GET /pokemons -> Get all pokemons

const columnListId = [  
	"numéro",
    "nom",
    "nomen",
    "nomja",
    "nomtm",
    "nomde",
    "espece",
    "taille",
    "poids",
    "type1",
    "capspe1",
    "couleur",
    "forme",
    "attaques"
]

const columnListPokedex = [  
	"numéro",
    "nom",
    "type1",
]

function cpy (columnList) {
    return pokemons.map( pokemon => {
        let item = {};
        for (const col of columnList) 
            item[col] = pokemon[col] // copier la colonne de nom 'col' dans item
        return item;
    })
}

const pokemonsPokedex = cpy( columnListPokedex).sort((a, b) => (a.numéro > b.numéro) ? 1 : -1 )
const pokemonsId      = cpy( columnListId).sort((a, b) => (a.numéro > b.numéro) ? 1 : -1 )

router.get('/', (_, response) => {
    response.json(pokemonsPokedex)
})
router.get('/:id', (req, response) => {
    let rc = pokemonsId.find(pokemon => pokemon.numéro == req.params.id);
    return response.send(rc)   
    
})
module.exports = router