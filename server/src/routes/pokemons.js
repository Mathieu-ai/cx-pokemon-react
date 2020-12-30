const { Router } = require('express')
const pokemons = require('../data/pokemons')

const router = Router()

// :: GET /pokemons -> Get all pokemons


let columnListId = [  
	{ "numéro":"Numéro"},
    {"nom":"Nom (FR)"},
    {"nomen":"Nom (EN)"},
    {"nomja":"Nom (JA)"},
    {"nomtm":"Nom (TM)"},
    {"nomde":"Nom (DE)"},
    {"espece":"Espèce"},
    {"taille":"Taille"}, 
    {"poids": "Poids"},
    {"type1": "Type"},
    {"capspe1": "Talent"},
    {"couleur": "Couleur"},
    {"forme": "Forme"},
    {"attaques": "Attaques"}
]

let columnListPokedex = [  
	{ "numéro":"Numéro"},
    {"nom":"Nom (FR)"},
    {"type1": "Type"}
]

function cpy (columnList) {
    return pokemons.map( pokemon => {
        let item = {};
            for (const col of columnListId) {
        let propJson = Object.keys( col )[0]
        let libelle = col[ propJson ]
            return item;
        }
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