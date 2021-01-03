import React, { Component } from 'react';
import Slider from './Slider'
import Identity from './Identity'
import AttaquesComp from './AttaquesComp'


/*
function IdentityAttribute(props) {
    const pokemon = props.data; 
    let listItems = Object.keys(pokemon)
    .filter(p => p !== 'Attaques')
    .filter(p => p !== 'Nom')
    .filter(p => p !== 'Numéro')
    .filter(p => p !== 'Talent')
    
    
    //.map( <PokemonAttribute name={p} value={this.state.pokemon[p]} />)
        .map( p =>  
            <div className='pokemonAttribute'>
                <span className="AttributeName"> {p} </span>
                <br></br>
                <span className="AttributeValue"> {pokemon[p]} </span>
            </div>
        );
    return (
      listItems
    );
   
}

*/

// function AttaqueAttribute(props) {
//     const attaque = props.data;
//     let listItems = Object.keys(attaque||{})
//         .map( p =>  
//             <div className='ATTAQUES'>
//                 <span className="pAtt"> {p} </span>
//                 <span className="AttaqueP"> {attaque[p]} </span>
//             </div>
//         );
//     return (
//       <ul>{listItems}</ul>
//     );
// }
// // 
// function Attaques( { list } ) {
//     return (
//         <div>
//           {list.map( (attaque) => (
//             <div className="AttTemp">
//                 <AttaqueAttribute data={attaque}/>
//             </div>
//           ))}
//         </div>
//       );
// }

const NOM = "Nom (FR)"
class PokedexDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {pokemon: {} , nom:"vide"}        
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:8080/pokemons/001')
        const pokemon = await response.json()

        this.setState( {pokemon} );
        this.setState( { nom : pokemon[NOM] } );
    }
// 
//<AttaquesAttribute data={this.state.pokemon.attaques && this.state.pokemon.attaques[0]} 2/>
    render() {
        return (
<div>            

            
            <div>
                <Slider className='slider'></Slider>
            </div> 

            <Identity></Identity>
            
            <div className = "ImagePok">
                <div class = "gallery">
                    <div class="clipped-border">
                        <img src= {'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' 
                        + this.state.pokemon.Numéro + '.png'} id="clipped" alt='Undefined'></img>
                    </div>
                    
                    <div className = "ShadowImg">
                    </div>
                </div>
            </div>

            <AttaquesComp></AttaquesComp>
            
                
            
                    
                
</div>
    
        )       
    }    
}

export default PokedexDetails;
