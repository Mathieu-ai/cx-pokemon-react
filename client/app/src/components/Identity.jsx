import React, { Component } from 'react';



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
                <span> {p} </span>
                <br></br>
                <span> {pokemon[p]} </span>
            </div>
        );
    return (
      listItems
    );
   
}




const NOM = "Nom (FR)"
class Identity extends Component {
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
                <div className="TABLE">
                <table className="TableIndentity">
	                <thead>
		                <tr>
			                <th><h1>Identité</h1></th>
		                </tr>
	                </thead>
	                    <tbody>
	    	                <tr>
			                    <td className="TD"><IdentityAttribute data={this.state.pokemon}/></td>
		                    </tr>
	                    </tbody>
                </table>
            </div>             
</div>
    
        )       
    }    
}

export default Identity;
