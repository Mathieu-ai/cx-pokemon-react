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

let columnListAttaques = [
    {"niveau": "Niveau"},
    {"nom": "Nom"},
    {"puissance": "Puissance"},
    {"precision": "Précision"},
    {"pp": "PP"}
]

/**
 * (Cette documentation est une 'javadoc')
 * change les propriétés de liste avec la table de correspondance columnList 
 * @param {string[]} columnList 
 * @param {Object} list 
 * @return {Object} List avec les nouvelles propriétés
 */ 
function cpy (columnList, list) {
    return list.map( record => {
        let item = {};	       
        for (const col of columnList) {
            var propJson = Object.keys( col )[0];
            let libelle = col[ propJson ];
            if (propJson == "attaques") {
                item[libelle] = cpy (columnListAttaques, record[ propJson])
            } else {
                item[libelle] = record[propJson] ;    // copier la colonne de nom 'col' dans item	
            }
        }                 
        return item;	       
    })	  

}

const pokemonsPokedex = cpy( columnListPokedex, pokemons).sort((a, b) => (a.Numéro > b.Numéro) ? 1 : -1 )
const pokemonsId      = cpy( columnListId, pokemons).sort((a, b) => (a.Numéro > b.Numéro) ? 1 : -1 )

router.get('/', (_, response) => {
    response.json(pokemonsPokedex)
})
router.get('/:id', (req, response) => {
    let rc = pokemonsId.find(pokemon => pokemon.Numéro == req.params.id);
    return response.send(rc)   
    
})
module.exports = router